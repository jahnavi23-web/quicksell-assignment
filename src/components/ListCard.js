import "./ListCard.css";
import Icons from "./Icons";
// import { HiOutlineEllipsisHorizontal } from "react-icons/hi";
// import { FaBeer, FaEllipsis } from "react-icons/fa";
import { LiaEllipsisHSolid } from "react-icons/lia";
import { BsExclamationSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { getCardFooterLogo, getCardMidLogo } from "./ColumnBox";

function getUserName(props) {
  if (props.data.userId && props.users) {
    let user = props.users.find((user) => {
      return user.id === props.data.userId;
    });

    // props.array[0].userId
    // setTitle(user.name);
    return user.name;
  }
}

const ListCard = (props) => {
  let data = props.data;
  let id = data.id;
  let priority = data.priority;
  let status = data.status;
  let tag = data.tag;
  let title = data.title;
  let userId = props.userId;

  let CARD_TITLE;
  let MESSAGE_BODY;
  let BOTTOM_TAG;
  let BOTTOM_ICON;
  let MID_ICON;
  let DP_ICON;

  if (props.mode === "USER") {
    CARD_TITLE = id;
    MESSAGE_BODY = title;
    BOTTOM_TAG = tag;
    // BOTTOM_ICON = <FooterIcon props={props} />;
    BOTTOM_ICON = getCardFooterLogo(props);
    // MID_ICON = <MidIcon />;
    MID_ICON = getCardMidLogo(props);
    DP_ICON = null;
  } else if (props.mode === "STATUS") {
    CARD_TITLE = id;
    MESSAGE_BODY = title;
    BOTTOM_TAG = tag;
    // BOTTOM_ICON = <FooterIcon props={props} />;
    BOTTOM_ICON = getCardFooterLogo(props);
    MID_ICON = null;
    DP_ICON = <DpIcon height="22px" width="22px" name={props.name} imgSrc="" />;
  } else if (props.mode === "PRIORITY") {
    CARD_TITLE = id;
    MESSAGE_BODY = title;
    BOTTOM_TAG = tag;
    BOTTOM_ICON = null;
    // MID_ICON = <MidIcon />;
    MID_ICON = getCardMidLogo(props);
    DP_ICON = <DpIcon height="22px" width="22px" name={props.name} imgSrc="" />;
  }

  // console.log(data);

  // return <div></div>;

  return (
    // <div className="ListBox">
    <li className="message">
      <div className="ListContainer">
        <div>
          <div className="ListCard">
            <div
              style={{ display: "flex", flexDirection: "row", flexGrow: "1" }}
            >
              <div className="ListCardInfo">
                <div>
                  <div className="CardTitleBar">
                    <div className="CardTitleText">{CARD_TITLE}</div>
                  </div>
                  <div className="CardBody">
                    {MID_ICON}
                    <div className="CardBodyText">{MESSAGE_BODY}</div>
                  </div>
                  <div className="CardFooter">
                    {BOTTOM_ICON}
                    <div className="FooterTextBox">
                      <div className="FooterCircle"></div>
                      <div className="FooterText">{BOTTOM_TAG}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>{DP_ICON}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListCard;

export const DpIcon = (props) => {
  const [name, setName] = useState(props.name);
  const [img, setImg] = useState(props.img);

  // console.log(props);

  useEffect(() => {
    // let name = "Aksah Chandra";
    let name = props.name;
    name = name.toUpperCase();

    let nameSplit = name.split(" ");
    // console.log(nameSplit);
    let short = nameSplit[0][0];
    if (nameSplit.length > 1) {
      short = short + nameSplit[1][0];
    }
    setName(short);
  });

  return (
    <div
      className="CardTitleLogo"
      style={{
        height: props.height,
        width: props.width,
        // justifyContent: "center",
        alignContent: "center",
        // alignItems: "center",
      }}
    >
      <div
        style={{
          height: props.height,
          width: props.width,
          borderRadius: props.height,
          fontSize: 12,
          fontWeight: "bold",

          display: "flex",

          position: "absolute",
          // right: props.width,
          // top: props.height,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center",

          textAlign: "center",
          verticalAlign: "center",

          backgroundColor: "#87CEEB",
          color: "#eeeeee",
        }}
      >
        {" "}
        {name}{" "}
      </div>
      <img
        // src={img}
        src={img}
        className="CardTitleLogo"
        onError={(event) => (event.target.style.display = "none")}
      />
      <div className="CardTitleLogoStatus" />
    </div>
  );
};

export const FooterIcon = (props) => {
  return getCardFooterLogo(props);
  // <IconContext.Provider value={{ color: "grey", size: "14px" }}>
  //   <div className="FooterIcon">
  //     <HiOutlineEllipsisHorizontal />
  //   </div>
  // </IconContext.Provider>
};

const MidIcon = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "blue", size: "10px" }}>
      <div className="CardBodyIcon">
        <BsExclamationSquareFill />
      </div>
    </IconContext.Provider>
    // </div>
  );
};

{
  /* <div className="CardTitleLogo" style={{ height: "24px", width: "24px" }}>
<img
  src="wepik-export-20231101173926A2LC.jpeg"
  className="CardTitleLogo"
/>
<div className="CardTitleLogoStatus" />
</div> */
}

{
  /* <div className="FooterIcon"> */
}
{
  /* <LiaEllipsisHSolid /> */
}
{
  /* <IconContext.Provider value={{ color: "grey", size: "14px" }}>
              <div className="FooterIcon">
                {/* <BsExclamationSquareFill /> */
}
{
  /* <HiOutlineEllipsisHorizontal /> */
}
{
  /* </div> */
}
{
  /* </IconContext.Provider> */
}
