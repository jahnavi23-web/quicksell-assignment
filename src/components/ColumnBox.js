import ListHeader from "./ListHeader";
import ListCard from "./ListCard";

const ColumnBox = (props) => {
  let data = props.data;
  let tickets = data.tickets;

  // let uniqueUsers = data.
  let GroupedOrderedData = GroupSortData(data);

  let data_out = [];
  let group_mode = "";

  if (props.state.order === 4) {
    if (props.state.group === 1) {
      data_out = GroupedOrderedData.status_priority;
      group_mode = "status";
    } else if (props.state.group === 2) {
      data_out = GroupedOrderedData.user_priority;
      group_mode = "user";
    } else if (props.state.group === 3) {
      data_out = GroupedOrderedData.priority_prio;
      group_mode = "priority";
    }
  } else if (props.state.order === 5) {
    if (props.state.group === 1) {
      data_out = GroupedOrderedData.status_title;
      group_mode = "status";
    } else if (props.state.group === 2) {
      data_out = GroupedOrderedData.user_title;
      group_mode = "user";
    } else if (props.state.group === 3) {
      data_out = GroupedOrderedData.priority_title;
      group_mode = "priority";
    }
  }

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        // backgroundColor: "yellow",

        paddingLeft: "10px",
        paddingRight: "15px",
      }}
    >
      <ListHeader title={props.user.name} count={3} logo={null} />
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          // backgroundColor: 'blue',

          listStyle: 'none',
          listStyleType: 'none', 
          // width: '250px'
        }}
      > */}
      {tickets.map((ticket) => {
        return <ListCard data={ticket} key={ticket.id} />;
      })}
      {/* </div> */}
    </li>
  );
};

export default ColumnBox;

function GroupSortData(data) {
  let users = data.users;
  let tickets = data.tickets;
  console.log(users);

  let userIds = [];
  for (let i = 0; i < users.length; i++) {
    userIds.push(users[i].id);
  }

  console.log("test users ");
  console.log(userIds);

  let ticketsByUsers = [];
  let ticketsByUsersPriority = [];
  let ticketsByUsersTitle = [];
  let testArray = [];

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < tickets.length; j++) {
      if (users[i].id === tickets[j].userId) {
        testArray.push(tickets[j]);
      }
    }
    ticketsByUsers.push(testArray);
    testArray = [];
  }
  // console.log(ticketsByUsers);

  for (let i = 0; i < ticketsByUsers.length; i++) {
    testArray = ticketsByUsers[i].sort(function (a, b) {
      return b.priority - a.priority;
    });
    ticketsByUsersPriority.push(testArray);
    testArray = [];
    testArray = ticketsByUsers[i].sort(function (a, b) {
      return a.title - b.title;
    });
    ticketsByUsersTitle.push(testArray);
    testArray = [];
  }
  // console.log("ticketsByUsersPriority");
  // console.log(ticketsByUsersPriority);
  // console.log("ticketsByUsersTitle");
  // console.log(ticketsByUsersTitle);

  let ticketsByStatus = [];
  let status = ["In progress", "Todo", "Backlog", "Done", "Canceled"];

  for (let i = 0; i < status.length; i++) {
    for (let j = 0; j < tickets.length; j++) {
      if (status[i] === tickets[j].status) {
        testArray.push(tickets[j]);
      }
    }
    ticketsByStatus.push(testArray);
    testArray = [];
  }
  console.log("ticketsByStatus");
  console.log(ticketsByStatus);

  let ticketsByStatusPriority = [];
  let ticketsByStatusTitle = [];
  for (let i = 0; i < status.length; i++) {
    testArray = ticketsByStatus[i].sort(function (a, b) {
      return b.priority - a.priority;
    });
    ticketsByStatusPriority.push(testArray);
    testArray = [];
    testArray = ticketsByStatus[i].sort(function (a, b) {
      return a.title - b.title;
    });
    ticketsByStatusTitle.push(testArray);
    testArray = [];
  }
  // console.log('ticketsByStatusPriority');
  // console.log(ticketsByStatusPriority);
  // console.log('ticketsByStatusTitle');
  // console.log(ticketsByStatusTitle);

  let ticketsByPriority = [];
  let priorities = [0, 1, 2, 3, 4];
  for (let i = 0; i < priorities.length; i++) {
    for (let j = 0; j < tickets.length; j++) {
      if (priorities[i] === tickets[j].priority) {
        testArray.push(tickets[j]);
      }
    }
    ticketsByPriority.push(testArray);
    testArray = [];
  }

  let ticketsByPriorityPrio = [];
  let ticketsByPriorityTitle = [];
  for (let i = 0; i < priorities.length; i++) {
    testArray = ticketsByPriority[i].filter(function (a) {
      return a.priority === priorities[i];
    });
    ticketsByPriorityPrio.push(testArray);
    testArray = [];
    testArray = ticketsByPriority[i].sort(function (a, b) {
      return a.title - b.title;
    });
    ticketsByPriorityTitle.push(testArray);
    testArray = [];
  }
  // console.log('ticketsByPriorityPrio');
  // console.log(ticketsByPriorityPrio);
  // console.log('ticketsByPriorityTitle');
  // console.log(ticketsByPriorityTitle);
  let GroupOrder_data = {
    status_priority: ticketsByStatusPriority,
    status_title: ticketsByStatusTitle,
    user_priority: ticketsByUsersPriority,
    user_title: ticketsByUsersTitle,
    priority_prio: ticketsByPriorityPrio,
    priority_title: ticketsByPriorityTitle,
  };

  return GroupOrder_data;
}
