import "./ListCard.css";
import Icons from "./Icons";
// import { HiOutlineEllipsisHorizontal } from "react-icons/hi";
// import { FaBeer, FaEllipsis } from "react-icons/fa";
import { LiaEllipsisHSolid } from "react-icons/lia";
import { BsExclamationSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";

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

  let card = "priority";
  if (card === "user") {
    CARD_TITLE = id;
    MESSAGE_BODY = title;
    BOTTOM_TAG = tag;
    BOTTOM_ICON = <FooterIcon />;
    MID_ICON = <MidIcon />;
    DP_ICON = null;
  } else if (card === "status") {
    CARD_TITLE = id;
    MESSAGE_BODY = title;
    BOTTOM_TAG = tag;
    BOTTOM_ICON = <FooterIcon />;
    MID_ICON = null;
    DP_ICON = <DpIcon />;
  } else if (card === "priority") {
    CARD_TITLE = id;
    MESSAGE_BODY = title;
    BOTTOM_TAG = tag;
    BOTTOM_ICON = null;
    MID_ICON = <MidIcon />;
    DP_ICON = <DpIcon height="22px" width="22px" />;
  }

  // console.log(data);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "10px",
          flexGrow: "1",
          // backgroundColor: "red",
          justifyContent: "space-between",
          alignItems: "space-between;",
        }}
      >
        <div className="ListCard">
          <div style={{ display: "flex", flexDirection: "row", flexGrow: "1" }}>
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
  );
};

export default ListCard;

export const DpIcon = (props) => {
  return (
    <div
      className="CardTitleLogo"
      style={{ height: props.height, width: props.width }}
    >
      <img
        src="wepik-export-20231101173926A2LC.jpeg"
        className="CardTitleLogo"
      />
      <div className="CardTitleLogoStatus" />
    </div>
  );
};

export const FooterIcon = (props) => {
  return (
    <IconContext.Provider value={{ color: "grey", size: "14px" }}>
      <div className="FooterIcon">
        <HiOutlineEllipsisHorizontal />
      </div>
    </IconContext.Provider>
  );
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
