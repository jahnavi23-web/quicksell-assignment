import { GiSettingsKnobs } from "react-icons/gi";
import { BiChevronDown, BiLowVision } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import { useState, useEffect, useRef } from "react";

import "./TopBar.css";
import { useCookies } from "react-cookie";

const TopBar = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const [state, setState] = useState({ group: 0, order: 0 });

  const [cookies, setCookie] = useCookies(["state"]);

  useEffect(() => {
    if (cookies.Group == 0 || cookies.Group == 1 || cookies.Group == 2) {
      // console.log("Cookies already exists");
      let new_state = { group: cookies.Group, order: cookies.Order };
      props.handler(new_state);
    } else {
      // console.log("Cookie doesn't exist, Creating cookies");
      let new_state = { group: 0, order: 0 };
      setCookie("Group", state.group, { path: "/" });
      setCookie("Order", state.order, { path: "/" });
      props.handler(state);
    }
  }, []);

  function handleClick() {
    setShowOptions(!showOptions);
  }

  function handleStateChangeOptions(group, order) {
    setShowOptions(false);
    let new_state = null;
    if (group !== null) {
      if (group === 0 || group === 1 || group === 2) {
        new_state = {
          group: group,
          order: state.order,
        };
        setState(new_state);
        props.handler(new_state);
      }
    }

    if (order !== null) {
      if (order === 0 || order === 1) {
        new_state = {
          group: state.group,
          order: order,
        };
        setState(new_state);
        props.handler(new_state);
      }
    }
  }

  let OptionsComp = null;
  if (showOptions) {
    OptionsComp = <Options handler={handleStateChangeOptions} state={state} />;
  }

  return (
    <div className="top">
      <div
        style={{
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

const GROUP_MODES = ["Status", "User", "Priority"];
const ORDER_MODES = ["Priority", "Title"];

const Options = (props) => {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["user"]);

  const [showGrouping, setShowGrouping] = useState(false);
  const [showOrdering, setShowOrdering] = useState(false);

  const [groupSelected, setGroupSelected] = useState(
    GROUP_MODES[props.state.group]
  );
  const [orderSelected, setOrderSelected] = useState(
    ORDER_MODES[props.state.order]
  );

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
    setCookie("Group", id, { path: "/" });
    // console.log("cookie  group updated");

    setGroupSelected(GROUP_MODES[id]);

    props.handler(id, null);
  }

  function handleSelectionOrderClick(id) {
    // console.log("selection Order clicked " + id);
    setCookie("Order", id, { path: "/" });
    // console.log("cookie  order updated");

    setOrderSelected(ORDER_MODES[id]);
    props.handler(null, id);
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
              option={groupSelected}
              handler={handleDropdownGroupClick}
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
              option={orderSelected}
              handler={handleDropdownOrderClick}
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
      <SelectionRow group={"Priority"} key={0} id={0} handler={props.handler} />
      <SelectionRow group={"Title"} key={1} id={1} handler={props.handler} />
    </ul>
  );
};

const SelectionBoxGroup = (props) => {
  return (
    <ul className="SelectionBox">
      <SelectionRow group={"Status"} key={0} id={0} handler={props.handler} />
      <SelectionRow group={"User"} key={1} id={1} handler={props.handler} />
      <SelectionRow group={"Priority"} key={2} id={2} handler={props.handler} />
    </ul>
  );
};

const SelectionRow = (props) => {
  function handleClick() {
    props.handler(props.id);
  }

  return (
    <li className="SelectionRow" onClick={handleClick}>
      <div>{props.group}</div>
    </li>
  );
};
