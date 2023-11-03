import { useEffect, useState } from "react";
import ColumnBox from "./ColumnBox";

const Dashboard = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
  // const url = "https://refertest.pythonanywhere.com/job/openings";

  useEffect(() => {
    // console.log(props.state.group + " is the value of group state");
    // console.log(props.state.order + " is the value of order state");
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        // console.log(json);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        backgroundColor: "#f4f5f8",

        paddingLeft: "25px",
        paddingRight: "15px",
        paddingTop: "20px",
        paddingBottom: "10px",
      }}
    >
      {/* {loading && <div>Loading...</div>} */}
      {/* {!loading && error && <div>{error}</div>} */}
      {!loading &&
        data &&
        data.users.map((user) => {
          return (
            <ColumnBox
              state={props.state}
              data={data}
              user={user}
              key={user.id}
            />
          );
        })}
    </ul>
  );
};

export default Dashboard;



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
{
  /* <ColumnBox state={props.state} data={data} user={user} />
          <ColumnBox state={props.state} data={data} />
          <ColumnBox state={props.state} data={data} />
          <ColumnBox state={props.state} data={data} />
          <ColumnBox state={props.state} data={data} /> */
}

//   const handleClick = () => {
//     setCookie("Data", data, { path: "/" });
//     // setCookie("Password", pwd, { path: "/" });
//   };
//   useEffect(() => {
//     fetch(url)
//       .then((resp) => resp.json())
//       .then((json) => {
//         setData(json);
//         console.log(json.tickets[0].id);
//       })
//       .catch((error) => console.error(error))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
//   const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
