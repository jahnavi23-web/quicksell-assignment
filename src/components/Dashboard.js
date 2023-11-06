import { useEffect, useState, useRef } from "react";
import ColumnBox from "./ColumnBox";
import "./Dashboard.css";

function compareTitle(a, b) {
  var nameA = a.title.length,
    nameB = b.title.length;

  var result;
  if (nameA < nameB)
    //sort string ascending
    result = -1;
  else if (nameA > nameB) result = 1;
  else result = 0; //default return value (no sorting)

  return result;
}

function comparePriority(a, b) {
  return b.priority - a.priority;
}

function compareTicketTitleText(a, b) {
  var lengthA = a.title.length;
  var lengthB = b.title.length;

  return lengthA - lengthB; // Ascending order
}

function compareTicketsPriorityNumber(a, b) {
  var lengthA = a.priority;
  var lengthB = b.priority;

  return lengthB - lengthA; // Descending order
}

const imgSrcs = [
  "wepik-export-20231101173926A2LC.jpeg",
  "pexels-photo-220453.jpg",
  "7562313.jpeg",
  "7322232.jpeg",
  "1043471.jpeg",
];

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

  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

  useEffect(() => {
    setGroup(GROUP_MODES[props.state.group]);
    setOrder(ORDER_MODES[props.state.order]);
  });

  var ticketsOrderPriority = [];
  var ticketsOrderTitle = [];

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
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        setTimeout(() => {
          const users = json.users;
          const tickets = json.tickets;
          const usersLength = users.length;
          const ticketsLength = tickets.length;

          ticketsOrderPriority = JSON.parse(JSON.stringify(tickets));
          ticketsOrderTitle = JSON.parse(JSON.stringify(tickets));

          ticketsOrderPriority = JSON.parse(
            JSON.stringify(
              ticketsOrderPriority.sort(compareTicketsPriorityNumber)
            )
          );
          ticketsOrderTitle = JSON.parse(
            JSON.stringify(ticketsOrderTitle.sort(compareTicketTitleText))
          );

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
          for (var i = 0; i < usersLength; i++) {
            testArray = ticketsByUsers[i].sort(compareTicketsPriorityNumber);
            testArray[0].key = i;
            testArray[0].img = imgSrcs[i];
            ticketsByUsersPriority.push(JSON.parse(JSON.stringify(testArray)));
            testArray = [];
          }
          for (var i = 0; i < usersLength; i++) {
            testArray = ticketsByUsers[i].sort(compareTicketTitleText);
            testArray[0].key = i;

            testArray[0].img = imgSrcs[i];
            ticketsByUsersTitle.push(JSON.parse(JSON.stringify(testArray)));
            testArray = [];
          }
          let statusTypes = [];
          for (var i = 0; i < ticketsLength; i++) {
            statusTypes.push(tickets[i].status);
          }

          set = new Set(statusTypes);
          statusTypes = [...set.keys()];

          for (var i = 0; i < statusTypes.length; i++) {
            for (var j = 0; j < ticketsLength; j++) {
              if (statusTypes[i] === tickets[j].status) {
                testArray.push(tickets[j]);
              }
            }
            ticketsByStatus.push(testArray);
            testArray = [];
          }

          for (var i = 0; i < statusTypes.length; i++) {
            testArray = ticketsByStatus[i].sort(comparePriority);
            testArray[0].key = i;
            ticketsByStatusPriority.push(JSON.parse(JSON.stringify(testArray)));
            testArray = [];
          }

          for (var i = 0; i < statusTypes.length; i++) {
            testArray = ticketsByStatus[i].sort(compareTitle);
            testArray[0].key = i;

            ticketsByStatusTitle.push(JSON.parse(JSON.stringify(testArray)));
            testArray = [];
          }

          let priorityTypes = [4, 3, 2, 1, 0];

          for (var i = 0; i < priorityTypes.length; i++) {
            for (var j = 0; j < ticketsLength; j++) {
              if (priorityTypes[i] === tickets[j].priority) {
                testArray.push(tickets[j]);
              }
            }
            ticketsByPriority.push(testArray);
            testArray = [];
          }

          for (var i = 0; i < priorityTypes.length; i++) {
            testArray = ticketsByPriority[i].sort(comparePriority);
            testArray[0].key = i;
            ticketsByPriorityPrio.push(JSON.parse(JSON.stringify(testArray)));
            testArray = [];
          }

          for (var i = 0; i < priorityTypes.length; i++) {
            testArray = ticketsByPriority[i].sort(compareTitle);
            testArray[0].key = i;
            ticketsByPriorityTitle.push(JSON.parse(JSON.stringify(testArray)));
            testArray = [];
          }

          dataOutArray[0] = [];
          dataOutArray[1] = [];
          dataOutArray[2] = [];
          dataOutArray[0][0] = ticketsByStatusPriority;
          dataOutArray[0][1] = ticketsByStatusTitle;
          dataOutArray[1][0] = ticketsByUsersPriority;
          dataOutArray[1][1] = ticketsByUsersTitle;
          dataOutArray[2][0] = ticketsByPriorityPrio;
          dataOutArray[2][1] = ticketsByPriorityTitle;
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

  return (
    <ul
      className="bottomG"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      }}
    >
      {!loading &&
        data &&
        dataOut &&
        dataOut[0][0] &&
        dataOut[props.state.group][props.state.order].map((ticketArray) => {
          return (
            <ColumnBox
              mode={GROUP_MODE}
              array={ticketArray}
              users={data.users}
              key={ticketArray[0].key}
              img={ticketArray[0].img ? ticketArray[0].img : null}
            />
          );
        })}
    </ul>
  );
};

export default Dashboard;
