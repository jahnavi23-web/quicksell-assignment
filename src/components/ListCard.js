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

  let cardTitle;
  let message;
  let bottomTag;
  let bottonIcon;
  let midIcon;
  let dpIcon;

  let card = "user";
  if(card === 'user') {
    cardTitle = id;
    message = title;
    bottomTag = tag;
    bottonIcon = status;
    midIcon = tag;
    dpIcon = tag;
  } else if (card === 'status') {
    cardTitle = id;
    message = title;
    bottomTag = tag;
    bottonIcon = status;
    midIcon = userId;
    dpIcon = userId;
  } else if (card === 'priority') {
    cardTitle = id;
    message = title;
    bottomTag = tag;
    bottonIcon = status;
    midIcon = tag;
    dpIcon = tag;
  }

console.log(data);

  return (
    <li
      style={{ display: "flex", flexDirection: "row", paddingBottom: "10px" }}
    >
      <div className="ListCard">
        <div className="ListCardInfo">
          <div className="CardTitleBar">
            <div className="CardTitleText">{cardTitle}</div>
            {/* <div
          className="CardTitleLogo"
          style={{ height: "24px", width: "24px" }}
        >
          <img
            src="wepik-export-20231101173926A2LC.jpeg"
            className="CardTitleLogo"
          />
          <div className="CardTitleLogoStatus" />
        </div> */}
          </div>
          <div className="CardBody">
            <div>
              <IconContext.Provider value={{ color: "blue", size: "8px" }}>
                <div className="CardBodyIcon">
                  <BsExclamationSquareFill />
                </div>
              </IconContext.Provider>
            </div>
            <div className="CardBodyText">
              {message}<div>{" "}</div>
            </div>
          </div>
          <div className="CardFooter">
            {/* <div className="FooterIcon"> */}
            {/* <LiaEllipsisHSolid /> */}
            <IconContext.Provider value={{ color: "grey", size: "14px" }}>
              <div className="FooterIcon">
                {/* <BsExclamationSquareFill /> */}
                <HiOutlineEllipsisHorizontal />
              </div>
            </IconContext.Provider>
            {/* </div> */}
            <div className="FooterTextBox">
              <div className="FooterCircle"></div>
              <div className="FooterText">{bottomTag}</div>
            </div>
          </div>
        </div>
        <div>
          <DpIcon height="22px" width="22px" />
        </div>
      </div>
    </li>
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
