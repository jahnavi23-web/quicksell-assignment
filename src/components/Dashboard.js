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
        console.log(json);
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
