import { useEffect, useState, useRef } from "react";
import ColumnBox from "./ColumnBox";
import "./Dashboard.css";

const Dashboard = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState([undefined]);
  const [dataOut, setDataOut] = useState(undefined);
  const GROUP_MODES = ["STATUS", "USER", "PRIORITY"];
  const ORDER_MODES = ["PRIORITY", "TITLE"];
  const [GROUP_MODE, setGroup] = useState(GROUP_MODES[props.state.group]);
  const [ORDER_MODE, setOrder] = useState(ORDER_MODES[props.state.order]);
  const [nColumnsText, setNColumnsText] = useState(5);

  const dataOutArray = [[]];

  // let GroupedOrderedData;

  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

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

  useEffect(() => {
    setGroup(GROUP_MODES[props.state.group]);
    setOrder(ORDER_MODES[props.state.order]);

    // {
    //   dataOut &&
    //     (() => {
    //       let length = dataOut[props.state.group][props.state.order].length;
    //       let text = "";
    //       for (let i = 0; i < length; i++) {
    //         text = text + " 1fr ";
    //       }

    //       setNColumnsText(text);

    //       return null;
    //     });
    // }

    // console.log("state: " + props.state.group + ", " + props.state.order);
    // console.log("GROUP_MODE: " + GROUP_MODE + ", ORDER_MODE: " + ORDER_MODE);
  });

  // console.log("state: " + props.state.group + ", " + props.state.order);
  // console.log("GROUP_MODE: " + GROUP_MODE + ", ORDER_MODE: " + ORDER_MODE);

  var ticketsByStatus = [];
  var ticketsByStatusPriority = [];
  var ticketsByStatusTitle = [];

  var ticketsByUsers = [];
  var ticketsByUsersPriority = [];
  var ticketsByUsersTitle = [];

  var ticketsByPriority = [];
  var ticketsByPriorityPrio = [];
  var ticketsByPriorityTitle = [];

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

          ticketsByStatus = [];
          ticketsByStatusPriority = [];
          ticketsByStatusTitle = [];

          ticketsByUsers = [];
          ticketsByUsersPriority = [];
          ticketsByUsersTitle = [];

          ticketsByPriority = [];
          ticketsByPriorityPrio = [];
          ticketsByPriorityTitle = [];

          var testArray = [];
          // if (GROUP_MODE === "USER") {
          let userTypes = [];
          for (var i = 0; i < ticketsLength; i++) {
            userTypes.push(tickets[i].name);
          }

          let set = new Set(userTypes);
          userTypes = [...set.keys()];

          for (var i = 0; i < usersLength; i++) {
            for (var j = 0; j < ticketsLength; j++) {
              if (users[i].id === tickets[j].userId) {
                testArray.push(tickets[j]);
              }
            }
            ticketsByUsers.push(testArray);
            testArray = [];
          }

          // if (ORDER_MODE === "PRIORITY") {
          for (var i = 0; i < usersLength; i++) {
            testArray = ticketsByUsers[i].sort(function (a, b) {
              return b.priority - a.priority;
            });
            ticketsByUsersPriority.push(testArray);
            testArray = [];
          }
          // setDataOut(ticketsByUsersPriority);
          // } else if (ORDER_MODE === "TITLE") {
          for (var i = 0; i < usersLength; i++) {
            testArray = ticketsByUsers[i].sort(function (a, b) {
              return a.title - b.title;
            });
            ticketsByUsersTitle.push(testArray);
            testArray = [];
          }
          // setDataOut(ticketsByUsersTitle);
          // }

          // console.log("ticketsByUsersPriority");
          // console.log(ticketsByUsersPriority);
          // console.log("ticketsByUsersTitle");
          // console.log(ticketsByUsersTitle);
          // } else if (GROUP_MODE === "STATUS") {
          let statusTypes = [];
          for (var i = 0; i < ticketsLength; i++) {
            statusTypes.push(tickets[i].status);
          }

          set = new Set(statusTypes);
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

          // if (ORDER_MODE === "PRIORITY") {
          for (var i = 0; i < statusTypes.length; i++) {
            testArray = ticketsByStatus[i].sort(function (a, b) {
              return b.priority - a.priority;
            });
            ticketsByStatusPriority.push(testArray);
            testArray = [];
          }

          // setDataOut(ticketsByStatusPriority);
          // } else if (ORDER_MODE === "TITLE") {
          for (var i = 0; i < statusTypes.length; i++) {
            testArray = ticketsByStatus[i].sort(function (a, b) {
              return a.title - b.title;
            });
            ticketsByStatusTitle.push(testArray);
            testArray = [];
          }

          // setDataOut(ticketsByStatusTitle);
          // }

          // console.log('ticketsByStatusPriority');
          // console.log(ticketsByStatusPriority);
          // console.log('ticketsByStatusTitle');
          // console.log(ticketsByStatusTitle);
          // } else if (GROUP_MODE === "PRIORITY") {
          let priorityTypes = [];
          for (var i = 0; i < ticketsLength; i++) {
            priorityTypes.push(tickets[i].priority);
          }

          set = new Set(priorityTypes);
          priorityTypes = [...set.keys()];
          // console.log(priorityTypes[0]);

          for (var i = 0; i < priorityTypes.length; i++) {
            for (var j = 0; j < ticketsLength; j++) {
              if (priorityTypes[i] === tickets[j].priority) {
                testArray.push(tickets[j]);
              }
              // console.log(testArray);
            }
            ticketsByPriority.push(testArray);
            testArray = [];
          }
          // console.log(ticketsByPriority);

          // if (ORDER_MODE === "PRIORITY") {
          for (var i = 0; i < priorityTypes.length; i++) {
            testArray = ticketsByPriority[i].filter(function (a) {
              return a.priority === priorityTypes[i];
            });
            ticketsByPriorityPrio.push(testArray);
            testArray = [];
          }

          // setDataOut(ticketsByPriorityPrio);
          // } else if (ORDER_MODE === "TITLE") {
          for (var i = 0; i < priorityTypes.length; i++) {
            testArray = ticketsByPriority[i].sort(function (a, b) {
              return a.title - b.title;
            });
            ticketsByPriorityTitle.push(testArray);
            testArray = [];
          }

          // setDataOut(ticketsByPriorityTitle);
          // }

          // console.log('ticketsByPriorityPrio');
          // console.log(ticketsByPriorityPrio);
          // console.log('ticketsByPriorityTitle');
          // console.log(ticketsByPriorityTitle);
          // }

          dataOutArray[0] = [];
          dataOutArray[1] = [];
          dataOutArray[2] = [];
          dataOutArray[0][0] = ticketsByStatusPriority;
          dataOutArray[0][1] = ticketsByStatusTitle;
          dataOutArray[1][0] = ticketsByUsersPriority;
          dataOutArray[1][1] = ticketsByUsersTitle;
          dataOutArray[2][0] = ticketsByPriorityPrio;
          dataOutArray[2][1] = ticketsByPriorityTitle;

          // let length = dataOutArray[props.state.group][props.state.order].length;
          // let text = "";
          // for (let i = 0; i < length; i++) {
          //   text = text + " 1fr ";
          // }

          // setNColumnsText(text);

          // console.log(dataOutArray);
          setDataOut(dataOutArray);
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

  var key = "key";

  // if (GROUP_MODE === "STATUS") {
  //   key = ticketArray[0].status;
  // } else if (GROUP_MODE === "USER") {
  //   key = ticketArray[0].userId;
  // } else if (GROUP_MODE === "PRIORITY") {
  //   key = ticketArray[0].priority;
  // }

  // let length = 5;
  // let text = "";
  // for (let i = 0; i < length; i++) {
  //   text = text + " 1fr ";
  // }
  // console.log(text);

  return (
    // <ul className="DashboardColumnList">
    <ul
      className="bottomG"
      style={{
        display: "grid",
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        // gridTemplateColumns: nColumnsText,
        // gridTemplateRows: "1fr",
      }}
    >
      {/* {loading && <div>Loading...</div>} */}
      {/* {!loading && error && <div>{error}</div>} */}
      {!loading &&
        data &&
        dataOut &&
        dataOut[0][0] &&
        dataOut[props.state.group][props.state.order].map((ticketArray) => {
          // console.log(ticketArray[0].userId);
          return (
            <ColumnBox
              mode={GROUP_MODE}
              array={ticketArray}
              users={data.users}
              key={key}
            />
          );
        })}
    </ul>
  );

  // return (
  //   <div className="a">
  //     <div className="b">
  //       <ul className="c">
  //         <li className="d">A</li>
  //         <li className="d">B</li>
  //         <li className="d">D</li>
  //         <li className="d">E</li>
  //         <li className="d">F</li>
  //       </ul>
  //     </div>
  //   </div>
  // );
};

export default Dashboard;
