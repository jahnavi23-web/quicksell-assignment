import ListHeader from "./ListHeader";
import ListCard from "./ListCard";

const ColumnBox = (props) => {
  let data = props.data;
  let tickets = data.tickets;

  // let uniqueUsers = data.

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
          return <ListCard data={ticket} />;
        })}
      {/* </div> */}
    </li>
  );
};

export default ColumnBox;

// function gUser(ticket) {
//   return Array.from(new Set(ticket))
// }

// function userTickets(data) {
//   let users = data.users;
//   let tickets = data.tickets;
//   let userTicketsArray = [];
//   let usersArray = [];

//   // userTicketsArray = tickets.filter(ticket) => re
//   return null;
// }
