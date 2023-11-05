import { GiSettingsKnobs } from "react-icons/gi";
import { BiChevronDown, BiLowVision } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { FaEllipsisH } from "react-icons/fa";
// import { HiOutlineEllipsisHorizontal } from "react-icons/hi";

import { LiaEllipsisHSolid } from "react-icons/lia";

import { CgSignal } from "react-icons/cg";
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  FaCircleXmark,
  FaCircleHalfStroke,
  FaRegCalendarCheck,
} from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { BsExclamationSquareFill } from "react-icons/bs";
import { BiLoaderCircle, BiPlus } from "react-icons/bi";

import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";

import { BsFillQuestionDiamondFill } from "react-icons/bs";

import { IconContext } from "react-icons/lib";

import {
  PiCellSignalMediumDuotone,
  PiCellSignalLowDuotone,
  PiCellSignalHighDuotone,
} from "react-icons/pi";

const Icons = {
  Knobs: GiSettingsKnobs,
  DownArrow: BiChevronDown,
  PlusJust: BiPlus,
  PlusSign: HiPlus,
  // EllipsisBig: FaEllipsis,
  // EllipsisSmall: HiOutlineEllipsisHorizontal,
  Signal: CgSignal,
  Checked: IoCheckmarkCircle,
  CircleOutline: FaCircleXmark,
  Circle: FaRegCircle,
  HalfCircle: FaCircleHalfStroke,
  Caution: BsExclamationSquareFill,
  Progressing: BiLoaderCircle,

  // Medium: PiCellSignalMediumDuotone,
  // Low: PiCellSignalLowDuotone,
  // High: PiCellSignalHighDuotone,
};

export default Icons;

export const MidIcon = () => {
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

export const Canceled = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "red", size: "16px" }}>
      <div className="CardBodyIcon">
        <FaCircleXmark />
      </div>
    </IconContext.Provider>
    // </div>
  );
};

export const Done = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "blue", size: "16px" }}>
      <div className="CardBodyIcon">
        <IoCheckmarkCircle />
      </div>
    </IconContext.Provider>
    // </div>
  );
};

export const Todo = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "grey", size: "15px" }}>
      <div className="CardBodyIcon">
        <FaRegCalendarCheck />
      </div>
    </IconContext.Provider>
    // </div>
  );
};

export const InProgress = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "green", size: "14px" }}>
      <div className="CardBodyIcon">
        <FaCircleHalfStroke />
        {/* <BiLoaderCircle /> */}
      </div>
    </IconContext.Provider>
    // </div>
  );
};

export const Backlog = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "black", size: "14px" }}>
      <div className="CardBodyIcon">
        <BsFillQuestionDiamondFill />
      </div>
    </IconContext.Provider>
    // </div>
  );
};

export const NoPriority = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "darkgrey", size: "16px" }}>
      <div className="CardBodyIcon">
        {/* <HiOutlineEllipsisHorizontal /> */}
        <LiaEllipsisHSolid />
        {/* <FaEllipsisH /> */}
      </div>
    </IconContext.Provider>
    // </div>
  );
};

export const Medium = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "orange", size: "16px" }}>
      <div className="CardBodyIcon">
        <PiCellSignalMediumDuotone />
      </div>
    </IconContext.Provider>
    // </div>
  );
};

export const Low = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "darkyellow", size: "16px" }}>
      <div className="CardBodyIcon">
        <PiCellSignalLowDuotone />
      </div>
    </IconContext.Provider>
    // </div>
  );
};

export const High = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "green", size: "16px" }}>
      <div className="CardBodyIcon">
        <PiCellSignalHighDuotone />
      </div>
    </IconContext.Provider>
    // </div>
  );
};

export const Urgent = () => {
  return (
    // <div className="CardBody">
    <IconContext.Provider value={{ color: "red", size: "14px" }}>
      <div className="CardBodyIcon">
        <BsExclamationSquareFill />
      </div>
    </IconContext.Provider>
    // </div>
  );
};
