import { useEffect, useState, useRef } from "react";
import ColumnBox from "./ColumnBox";

const Dashboard = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);
  const [dataOut, setDataOut] = useState(undefined);
  const GROUP_MODES = ["STATUS", "USER", "PRIORITY"];
  const ORDER_MODES = ["PRIORITY", "TITLE"];
  const [GROUP_MODE, setGroup] = useState(GROUP_MODES[props.state.group]);
  const [ORDER_MODE, setOrder] = useState(ORDER_MODES[props.state.order]);


  // let GroupedOrderedData;

  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

  // var GROUP_MODE = "USER";
  // var ORDER_MODE = "PRIORITY";
  
  // if (props.state.group === 1) {
  //   GROUP_MODE = "STATUS";
  // } else if (props.state.group === 2) {
  //   GROUP_MODE = "USER";
  // } else if (props.state.group === 3) {
  //   GROUP_MODE = "PRIORITY";
  // }

  // if (props.state.order === 4) {
  //   ORDER_MODE = "PRIORITY";
  // } else if (props.state.order === 5) {
  //   ORDER_MODE = "TITLE";
  // }

  console.log('state: ' + props.state.group + ', ' + props.state.order);
  console.log('GROUP_MODE: ' + GROUP_MODE + ', ORDER_MODE: ' + ORDER_MODE);

  const ticketsByStatus = [];
  const ticketsByStatusPriority = [];
  const ticketsByStatusTitle = [];

  const ticketsByUsers = [];
  const ticketsByUsersPriority = [];
  const ticketsByUsersTitle = [];

  const ticketsByPriority = [];
  const ticketsByPriorityPrio = [];
  const ticketsByPriorityTitle = [];

  const priorities = [0, 1, 2, 3, 4];
  const priorityNames = ["No priority", "Low", "Medium", "High", "Urgent"];

  const status = ["In progress", "Todo", "Backlog", "Done", "Canceled"];

  useEffect(() => {
    // console.log(props.state.group + " is the value of group state");
    // console.log(props.state.order + " is the value of order state");
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        setTimeout(() => {
          // console.log(json);

          const users = json.users;
          const tickets = json.tickets;
          const usersLength = users.length;
          const ticketsLength = tickets.length;

          var testArray = [];
          if (GROUP_MODE === "USER") {
            for (var i = 0; i < usersLength; i++) {
              for (var j = 0; j < ticketsLength; j++) {
                if (users[i].id === tickets[j].userId) {
                  testArray.push(tickets[j]);
                }
              }
              ticketsByUsers.push(testArray);
              testArray = [];
            }

            if (ORDER_MODE === "PRIORITY") {
              for (var i = 0; i < usersLength; i++) {
                testArray = ticketsByUsers[i].sort(function (a, b) {
                  return b.priority - a.priority;
                });
                ticketsByUsersPriority.push(testArray);
                testArray = [];
              }
              setDataOut(ticketsByUsersPriority);
            } else if (ORDER_MODE === "TITLE") {
              for (var i = 0; i < usersLength; i++) {
                testArray = ticketsByUsers[i].sort(function (a, b) {
                  return a.title - b.title;
                });
                ticketsByUsersTitle.push(testArray);
                testArray = [];
              }
              setDataOut(ticketsByUsersTitle);
            }

            // console.log("ticketsByUsersPriority");
            // console.log(ticketsByUsersPriority);
            // console.log("ticketsByUsersTitle");
            // console.log(ticketsByUsersTitle);
          } else if (GROUP_MODE === "STATUS") {
            let statusTypes = [];
            for(var i = 0; i < ticketsLength; i++) {
              statusTypes.push(tickets[i].status);
            }

            let set = new Set(statusTypes);
            statusTypes = [...set.keys()];

            // console.log(JSON.stringify([...set.keys()]));
            

            // console.log(statusTypes);

            for (var i = 0; i < statusTypes.length; i++) {
              for (var j = 0; j < ticketsLength; j++) {
                if (statusTypes[i] === tickets[j].status) {
                  testArray.push(tickets[j]);
                }
              }
              ticketsByStatus.push(testArray);
              testArray = [];
            }

            if (ORDER_MODE === "PRIORITY") {
              for (var i = 0; i < statusTypes.length; i++) {
                testArray = ticketsByStatus[i].sort(function (a, b) {
                  return b.priority - a.priority;
                });
                ticketsByStatusPriority.push(testArray);
                testArray = [];
              }

              setDataOut(ticketsByStatusPriority);
            } else if (ORDER_MODE === "TITLE") {
              for (var i = 0; i < statusTypes.length; i++) {
                testArray = ticketsByStatus[i].sort(function (a, b) {
                  return a.title - b.title;
                });
                ticketsByStatusTitle.push(testArray);
                testArray = [];
              }

              setDataOut(ticketsByStatusTitle);
            }

            // console.log('ticketsByStatusPriority');
            // console.log(ticketsByStatusPriority);
            // console.log('ticketsByStatusTitle');
            // console.log(ticketsByStatusTitle);
          } else if (GROUP_MODE === "PRIORITY") {
            for (var i = 0; i < priorities.length; i++) {
              for (var j = 0; j < ticketsLength; j++) {
                if (priorities[i] === tickets[j].priority) {
                  testArray.push(tickets[j]);
                }
              }
              ticketsByPriority.push(testArray);
              testArray = [];
            }

            if (ORDER_MODE === "PRIORITY") {
              for (var i = 0; i < priorities.length; i++) {
                testArray = ticketsByPriority[i].filter(function (a) {
                  return a.priority === priorities[i];
                });
                ticketsByPriorityPrio.push(testArray);
                testArray = [];
              }

              setDataOut(ticketsByPriorityPrio);
            } else if (ORDER_MODE === "TITLE") {
              for (var i = 0; i < priorities.length; i++) {
                testArray = ticketsByPriority[i].sort(function (a, b) {
                  return a.title - b.title;
                });
                ticketsByPriorityTitle.push(testArray);
                testArray = [];
              }

              setDataOut(ticketsByPriorityTitle);
            }

            // console.log('ticketsByPriorityPrio');
            // console.log(ticketsByPriorityPrio);
            // console.log('ticketsByPriorityTitle');
            // console.log(ticketsByPriorityTitle);
          }
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      })
      .then((data) => {});
  }, []);

  var key = 'key';

  // if (GROUP_MODE === "STATUS") {
  //   key = ticketArray[0].status;
  // } else if (GROUP_MODE === "USER") {
  //   key = ticketArray[0].userId;
  // } else if (GROUP_MODE === "PRIORITY") {
  //   key = ticketArray[0].priority;
  // }

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
        dataOut &&
        dataOut[0][0] &&
        dataOut.map((ticketArray) => {
          // console.log(ticketArray[0].userId);
          return <ColumnBox mode={GROUP_MODE} array={ticketArray} key={key} />;
        })}
    </ul>
  );
};

export default Dashboard;
