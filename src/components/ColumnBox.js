import ListHeader from "./ListHeader";
import ListCard from "./ListCard";
import { useEffect, useState } from "react";
import "./ColumnBox.css";

// import { FaEllipsis } from "react-icons/fa";
// import { HiOutlineEllipsisHorizontal } from "react-icons/hi";

import {
  Todo,
  InProgress,
  Backlog,
  High,
  Low,
  Medium,
  NoPriority,
  Urgent,
  Done,
  Canceled,
  MidIcon,
} from "./Icons";

export const priorityNames = ["No priority", "Low", "Medium", "High", "Urgent"];

export const statusNames = [
  "In progress",
  "Todo",
  "Backlog",
  "Done",
  "Canceled",
];

export const statusLogos = [
  <InProgress />,
  <Todo />,
  <Backlog />,
  <Done />,
  <Canceled />,
];
export const PriorityLogos = [
  <NoPriority />,
  <Low />,
  <Medium />,
  <High />,
  <Urgent />,
];

export function getHeaderLogo(props) {
  if (props.mode === "STATUS") {
    for (let i = 0; i < statusNames.length; i++) {
      if (props.array[0].status === statusNames[i]) {
        return statusLogos[i];
      }
    }
  } else if (props.mode === "PRIORITY") {
    return PriorityLogos[props.array[0].priority];
  } else {
    return null;
  }
}

export function getCardFooterLogo(props) {
  // console.log(props);
  if (props.mode === "STATUS" || props.mode === "USER") {
    return PriorityLogos[props.data.priority];
  }
  // else if (props.mode === "USER") {
  //   for (let i = 0; i < statusNames.length; i++) {
  //     if (props.data.status === statusNames[i]) {
  //       return statusLogos[i];
  //     }
  //   }
  // }
  else {
    return null;
  }
}

export function getCardMidLogo(props) {
  // console.log(props);
  if (props.mode === "PRIORITY" || props.mode === "USER") {
    //   return PriorityLogos[props.data.priority];
    // }
    // else if (props.mode === "USER") {
    for (let i = 0; i < statusNames.length; i++) {
      if (props.data.status === statusNames[i]) {
        return statusLogos[i];
      }
    }
  } else {
    return null;
  }
}

const ColumnBox = (props) => {
  const [title, setTitle] = useState("       ");
  const [logo, setLogo] = useState(getHeaderLogo(props));

  let mode = props.mode;
  let array = props.array;
  let users = props.users;

  // console.log(props);

  // const [title, setTitle] = useState('title');
  // let title = "title";
  // let titles = [];

  let count = props.array.length;

  useEffect(() => {
    // console.log(statusLogos);

    if (mode === "STATUS") {
      if (props.array.length !== 0) {
        setTitle(props.array[0].status);
      }

      // for (let i = 0; i < props.array.length; i++) {
      //   if (props.array[i].status != "") {
      //     // titles.push(props.array[i].status);
      //     setTitle(props.array[i].status);
      //   } else {
      //     // titles.push("No status");
      //     // props.array[i].status("       ")
      //   }
      // }
      // console.log("status " + title);
    } else if (mode === "USER") {
      if (props.array.length !== 0) {
        let user = props.users.find((user) => {
          return user.id === props.array[0].userId;
        });

        // props.array[0].userId
        setTitle(user.name);
      }
      // for (let i = 0; i < props.array.length; i++) {
      //   if (props.array[i].name != "") {
      //     // titles.push(props.array[i].status);
      //     setTitle(props.array[i].name);
      //   } else {
      //     // titles.push("No name");
      //   }
      // }
      // console.log("user " + title);
    } else if (mode === "PRIORITY") {
      if (props.array.length !== 0) {
        setTitle(priorityNames[props.array[0].priority]);
      }
      // for (let i = 0; i < props.array.length; i++) {
      //   if (props.array[i].priority != "") {
      //     // titles.push(props.array[i].status);
      //     setTitle(props.array[i].priority);
      //   } else {
      //     // titles.push("No priority");
      //   }
      // }
      // console.log("priority " + title);
    }

    setLogo(getHeaderLogo(props));
    // console.log(titles);

    // if (mode === "STATUS") {
    //   title = props.array[0].status;
    // } else if (mode === "USER") {
    //   title = props.array[0].userId;
    // } else if (mode === "PRIORITY") {
    //   title = props.array[0].priority;
    // }
  });

  return (
    <li className="column">
      <div className="user">
        <ListHeader
          title={title}
          count={count}
          logo={logo}
          name={props.mode === "USER" ? title : null}
          img={(props.mode === "USER") ? props.img : ''}
        />
        <ul className="conversation">
          {array.map((ticket) => {
            return (
              <ListCard
                data={ticket}
                key={ticket.id}
                mode={props.mode}
                name={getUserName(ticket.userId, props.users)}
              />
            );
          })}
        </ul>
      </div>
    </li>
  );

  // return <div></div>
};

export default ColumnBox;

function getUserName(userId, users) {
  if (userId && users) {
    let user = users.find((usr) => {
      return usr.id === userId;
    });

    // props.array[0].userId
    // setTitle(user.name);
    return user.name;
  }
}
// function GroupSortData(data) {
//   let users = data.users;
//   let tickets = data.tickets;
//   console.log(users);

//   let userIds = [];
//   for (let i = 0; i < users.length; i++) {
//     userIds.push(users[i].id);
//   }

//   console.log("test users ");
//   console.log(userIds);

//   let ticketsByUsers = [];
//   let ticketsByUsersPriority = [];
//   let ticketsByUsersTitle = [];
//   let testArray = [];

//   for (let i = 0; i < users.length; i++) {
//     for (let j = 0; j < tickets.length; j++) {
//       if (users[i].id === tickets[j].userId) {
//         testArray.push(tickets[j]);
//       }
//     }
//     ticketsByUsers.push(testArray);
//     testArray = [];
//   }
//   // console.log(ticketsByUsers);

//   for (let i = 0; i < ticketsByUsers.length; i++) {
//     testArray = ticketsByUsers[i].sort(function (a, b) {
//       return b.priority - a.priority;
//     });
//     ticketsByUsersPriority.push(testArray);
//     testArray = [];
//     testArray = ticketsByUsers[i].sort(function (a, b) {
//       return a.title - b.title;
//     });
//     ticketsByUsersTitle.push(testArray);
//     testArray = [];
//   }
//   // console.log("ticketsByUsersPriority");
//   // console.log(ticketsByUsersPriority);
//   // console.log("ticketsByUsersTitle");
//   // console.log(ticketsByUsersTitle);

//   let ticketsByStatus = [];
//   let status = ["In progress", "Todo", "Backlog", "Done", "Canceled"];

//   for (let i = 0; i < status.length; i++) {
//     for (let j = 0; j < tickets.length; j++) {
//       if (status[i] === tickets[j].status) {
//         testArray.push(tickets[j]);
//       }
//     }
//     ticketsByStatus.push(testArray);
//     testArray = [];
//   }
//   console.log("ticketsByStatus");
//   console.log(ticketsByStatus);

//   let ticketsByStatusPriority = [];
//   let ticketsByStatusTitle = [];
//   for (let i = 0; i < status.length; i++) {
//     testArray = ticketsByStatus[i].sort(function (a, b) {
//       return b.priority - a.priority;
//     });
//     ticketsByStatusPriority.push(testArray);
//     testArray = [];
//     testArray = ticketsByStatus[i].sort(function (a, b) {
//       return a.title - b.title;
//     });
//     ticketsByStatusTitle.push(testArray);
//     testArray = [];
//   }
//   // console.log('ticketsByStatusPriority');
//   // console.log(ticketsByStatusPriority);
//   // console.log('ticketsByStatusTitle');
//   // console.log(ticketsByStatusTitle);

//   let ticketsByPriority = [];
//   let priorities = [0, 1, 2, 3, 4];
//   for (let i = 0; i < priorities.length; i++) {
//     for (let j = 0; j < tickets.length; j++) {
//       if (priorities[i] === tickets[j].priority) {
//         testArray.push(tickets[j]);
//       }
//     }
//     ticketsByPriority.push(testArray);
//     testArray = [];
//   }

//   let ticketsByPriorityPrio = [];
//   let ticketsByPriorityTitle = [];
//   for (let i = 0; i < priorities.length; i++) {
//     testArray = ticketsByPriority[i].filter(function (a) {
//       return a.priority === priorities[i];
//     });
//     ticketsByPriorityPrio.push(testArray);
//     testArray = [];
//     testArray = ticketsByPriority[i].sort(function (a, b) {
//       return a.title - b.title;
//     });
//     ticketsByPriorityTitle.push(testArray);
//     testArray = [];
//   }
//   // console.log('ticketsByPriorityPrio');
//   // console.log(ticketsByPriorityPrio);
//   // console.log('ticketsByPriorityTitle');
//   // console.log(ticketsByPriorityTitle);
//   let GroupOrder_data = {
//     status_priority: ticketsByStatusPriority,
//     status_title: ticketsByStatusTitle,
//     user_priority: ticketsByUsersPriority,
//     user_title: ticketsByUsersTitle,
//     priority_prio: ticketsByPriorityPrio,
//     priority_title: ticketsByPriorityTitle,
//   };

//   return GroupOrder_data;
// }

// let data = props.data;
// let tickets = data.tickets;

// let GroupedOrderedData = GroupSortData(data);

// let data_out = [];
// let group_mode = "";

// if (props.state.order === 4) {
//   if (props.state.group === 1) {
//     data_out = GroupedOrderedData.status_priority;
//     group_mode = "status";
//   } else if (props.state.group === 2) {
//     data_out = GroupedOrderedData.user_priority;
//     group_mode = "user";
//   } else if (props.state.group === 3) {
//     data_out = GroupedOrderedData.priority_prio;
//     group_mode = "priority";
//   }
// } else if (props.state.order === 5) {
//   if (props.state.group === 1) {
//     data_out = GroupedOrderedData.status_title;
//     group_mode = "status";
//   } else if (props.state.group === 2) {
//     data_out = GroupedOrderedData.user_title;
//     group_mode = "user";
//   } else if (props.state.group === 3) {
//     data_out = GroupedOrderedData.priority_title;
//     group_mode = "priority";
//   }
// }
