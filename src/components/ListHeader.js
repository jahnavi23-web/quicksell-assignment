import "./ListHeader.css";
import { BiPlus } from "react-icons/bi";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { DpIcon } from "./ListCard";



const ListHeader = (props) => {
  // let Icon = (
  //   <div
  //     style={{
  //       height: "20px",
  //       width: "20px",
  //       backgroundColor: "lightblue",
  //       borderRadius: "20px",
  //       position: 'relative',
  //     }}
  //   >
  //     <div className="CardTitleLogoStatus" />
  //   </div>
  // );

  // console.log(props);

  let Icon = (
    <DpIcon
      height="20px"
      width="20px"
      name={props.name ? props.name : ""}
      img={props.img ? props.img : ""}
    />
  );

  if (props.logo != null) {
    Icon = props.logo;
  }
  return (
    // <div style={{ width: "100px", height: "100px" }}>
    // <div className="HeaderBox">
    <div className="name">
      <div className="HeaderUserBox">
        <div className="HeaderIcon">
          {/* <DpIconHeader height="20px" width="20px" /> */}
          {Icon}
        </div>
        <div className="HeaderTitle">{props.title}</div>
        <div className="HeaderCount">{props.count}</div>
      </div>
      {/* <div className="Spacer"></div> */}
      <div className="HeaderOptions">
        <div className="HeaderPlus">
          <BiPlus />
        </div>
        <div className="HeaderElipsis">
          <HiOutlineEllipsisHorizontal />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ListHeader;

export const DpIconHeader = (props) => {
  return (
    <div
      className="CardTitleLogo"
      style={{ height: props.height, width: props.width }}
    >
      <img
        src="wepik-export-20231101173926A2LC.jpeg"
        className="CardTitleLogo"
      />
      <div
        className="CardTitleLogoStatus"
        style={{
          height: "2px",
          width: "2px",
          bottom: "-2px",
          right: "-1px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};
