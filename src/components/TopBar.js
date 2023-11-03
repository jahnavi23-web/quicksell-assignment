import { GiSettingsKnobs } from "react-icons/gi";
import { BiChevronDown, BiLowVision } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import { useState, useEffect, useRef } from "react";

import "./TopBar.css";
import { useCookies } from "react-cookie";

const TopBar = (props) => {
  //   const inputRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);

  const [state, setState] = useState({ group: 1, order: 4 });
  // const stateRef = useRef(state);

  const [cookies, setCookie] = useCookies(["state"]);

  // let x = cookies.group;
  // console.log(cookies.Order);
  useEffect(() => {
    // if (
    //   getCookie("Group") == 1 ||
    //   getCookie("Group") == 2 ||
    //   getCookie("Group") == 3
    // )
    if (cookies.Group == 1 || cookies.Group == 2 || cookies.Group == 3) {
      // console.log(cookies.Group + " is the Group value cookie");
      let new_state = { group: cookies.Group, order: cookies.Order };
      // stateRef.current = new_state;
      props.handler(state);
    } else {
      // console.log("Cookie doesn't exist");
      let new_state = { group: 1, order: 4 };
      // stateRef.current = new_state;
      setCookie("Group", new_state.group, { path: "/" });
      setCookie("Order", new_state.order, { path: "/" });
      props.handler(state);
    }
  });

  function handleClick() {
    setShowOptions(!showOptions);
  }

  function handleStateChangeOptions(group_or_order) {
    setShowOptions(false);
    let new_state = null;
    if (group_or_order === 1 || group_or_order === 2 || group_or_order === 3) {
      new_state = {
        group: group_or_order,
        order: state.order,
      };
      // stateRef.current = new_state;
      setState(new_state);
    } else if (group_or_order === 4 || group_or_order === 5) {
      let new_state = {
        group: state.group,
        order: group_or_order,
      };
      // stateRef.current = new_state;
      setState(new_state);
    }

    setCookie("Group", state.group, { path: "/" });
    setCookie("Order", state.order, { path: "/" });

    // console.log(
    //   "New state: group " +
    //     state.group +
    //     ", order " +
    //     state.order
    // );
    // console.log(getCookie("Group"));
  }

  // console.log(cookies.Group);

  let OptionsComp = null;
  if (showOptions) {
    OptionsComp = <Options handler={handleStateChangeOptions} />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
      <div
        style={{
          //   margin: "5px",
          marginTop: "15px",
          marginBottom: "0px",
          marginLeft: "40px",
        }}
      >
        <Dropdown handler={handleClick} />
      </div>
      <div>{OptionsComp}</div>
    </div>
  );
};

export default TopBar;

const Dropdown = (props) => {
  const handleClick = () => {
    // alert("dropdown clicked");
    props.handler();
  };

  return (
    <div>
      <div className="DropdownBox" onClick={handleClick}>
        <div style={{ paddingLeft: "8px", paddingRight: "2px" }}>
          <div className="knobsStyle">
            <IconContext.Provider value={{ color: "blue", size: "12px" }}>
              <GiSettingsKnobs />
            </IconContext.Provider>
          </div>
        </div>
        <div className="DropdownName">Display</div>
        <div className="DropdownIcon">
          <BiChevronDown />
        </div>
      </div>
    </div>
  );
};

const DropdownOptions = (props) => {
  function handleClick() {
    // alert(props.option + " clicked");
    props.handler();
  }
  return (
    <div>
      <div className="DropdownOptionsBox" onClick={handleClick}>
        <div className="DropdownOptionsText"> {props.option}</div>
        <div className="DropdownOptionsIcon">
          <BiChevronDown />
        </div>
      </div>
    </div>
  );
};

const Options = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["user"]);

  const [showGrouping, setShowGrouping] = useState(false);
  const [showOrdering, setShowOrdering] = useState(false);

  function handleDropdownGroupClick() {
    // console.log("group clicked");
    setShowGrouping(true);
    setShowOrdering(false);
  }
  function handleDropdownOrderClick() {
    // console.log("order clicked");
    setShowGrouping(false);
    setShowOrdering(true);
  }

  function handleSelectionGroupClick(id) {
    // console.log("selection Group clicked " + id);
    props.handler(id);
  }

  function handleSelectionOrderClick(id) {
    // console.log("selection Order clicked " + id);
    props.handler(id);
  }

  let GroupComponent = null;
  let OrderComponent = null;
  if (showGrouping) {
    GroupComponent = <SelectionBoxGroup handler={handleSelectionGroupClick} />;
    OrderComponent = null;
  }
  if (showOrdering) {
    GroupComponent = null;
    OrderComponent = <SelectionBoxOrder handler={handleSelectionOrderClick} />;
  }
  //   handleStateChangeGrouping;
  //   handleStateChangeOptions;

  return (
    <div>
      <div className="OptionsColumn">
        <div className="OptionRow">
          <div
            className="OptionText"
            style={{
              fontSize: "13px",
            }}
          >
            Grouping
          </div>
          <div>
            <DropdownOptions
              option={"Status"}
              handler={handleDropdownGroupClick}
              //   handler={handleStateChangeGrouping}
            />
          </div>
        </div>
        <div className="OptionRow">
          <div
            className="OptionText"
            style={{
              fontSize: "13px",
            }}
          >
            Ordering
          </div>
          <div>
            <DropdownOptions
              option={"Priority"}
              handler={handleDropdownOrderClick}
              //   handler={handleStateChangeGrouping}
            />
          </div>
        </div>
      </div>
      <div>
        {GroupComponent}
        {OrderComponent}
      </div>
    </div>
  );
};

const SelectionBoxOrder = (props) => {
  return (
    <ul className="SelectionBox2">
      <SelectionRow group={"Priority"} key={4} id={4} handler={props.handler} />
      {/* <SelectionRow group={"Priority"} key={4} id={4} handler={handleChange} /> */}
      {/* <SelectionRow group={"Title"} key={5} id={5} handler={handleChange} /> */}
      <SelectionRow group={"Title"} key={5} id={5} handler={props.handler} />
    </ul>
  );
};

const SelectionBoxGroup = (props) => {
  return (
    <ul className="SelectionBox">
      <SelectionRow group={"Status"} key={1} id={1} handler={props.handler} />
      <SelectionRow group={"User"} key={2} id={2} handler={props.handler} />
      <SelectionRow group={"Priority"} key={3} id={3} handler={props.handler} />
    </ul>
  );
};

const SelectionRow = (props) => {
  function handleClick() {
    // alert(props.group + " clicked " + props.id);
    props.handler(props.id);
  }

  return (
    <li className="SelectionRow" onClick={handleClick}>
      <div>{props.group}</div>
    </li>
  );
};

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
