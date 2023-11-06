import ListHeader from "./ListHeader";
import ListCard from "./ListCard";
import { useEffect, useState } from "react";
import "./ColumnBox.css";

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
  if (props.mode === "STATUS" || props.mode === "USER") {
    return PriorityLogos[props.data.priority];
  } else {
    return null;
  }
}

export function getCardMidLogo(props) {
  if (props.mode === "PRIORITY" || props.mode === "USER") {
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

  let count = props.array.length;

  useEffect(() => {
    if (mode === "STATUS") {
      if (props.array.length !== 0) {
        setTitle(props.array[0].status);
      }
    } else if (mode === "USER") {
      if (props.array.length !== 0) {
        let user = props.users.find((user) => {
          return user.id === props.array[0].userId;
        });

        setTitle(user.name);
      }
    } else if (mode === "PRIORITY") {
      if (props.array.length !== 0) {
        setTitle(priorityNames[props.array[0].priority]);
      }
    }

    setLogo(getHeaderLogo(props));
  });

  return (
    <li className="column">
      <div className="user">
        <ListHeader
          title={title}
          count={count}
          logo={logo}
          name={props.mode === "USER" ? title : null}
          img={props.mode === "USER" ? props.img : ""}
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
};

export default ColumnBox;

function getUserName(userId, users) {
  if (userId && users) {
    let user = users.find((usr) => {
      return usr.id === userId;
    });

    return user.name;
  }
}
