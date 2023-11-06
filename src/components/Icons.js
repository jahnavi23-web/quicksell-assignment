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
    <IconContext.Provider value={{ color: "blue", size: "10px" }}>
      <div className="CardBodyIcon">
        <BsExclamationSquareFill />
      </div>
    </IconContext.Provider>
  );
};

export const Canceled = () => {
  return (
    <IconContext.Provider value={{ color: "red", size: "16px" }}>
      <div className="CardBodyIcon">
        <FaCircleXmark />
      </div>
    </IconContext.Provider>
  );
};

export const Done = () => {
  return (
    <IconContext.Provider value={{ color: "blue", size: "16px" }}>
      <div className="CardBodyIcon">
        <IoCheckmarkCircle />
      </div>
    </IconContext.Provider>
  );
};

export const Todo = () => {
  return (
    <IconContext.Provider value={{ color: "grey", size: "15px" }}>
      <div className="CardBodyIcon">
        <FaRegCalendarCheck />
      </div>
    </IconContext.Provider>
  );
};

export const InProgress = () => {
  return (
    <IconContext.Provider value={{ color: "green", size: "14px" }}>
      <div className="CardBodyIcon">
        <FaCircleHalfStroke />
      </div>
    </IconContext.Provider>
  );
};

export const Backlog = () => {
  return (
    <IconContext.Provider value={{ color: "black", size: "14px" }}>
      <div className="CardBodyIcon">
        <BsFillQuestionDiamondFill />
      </div>
    </IconContext.Provider>
  );
};

export const NoPriority = () => {
  return (
    <IconContext.Provider value={{ color: "darkgrey", size: "16px" }}>
      <div className="CardBodyIcon">
        {/* <HiOutlineEllipsisHorizontal /> */}
        <LiaEllipsisHSolid />
        {/* <FaEllipsisH /> */}
      </div>
    </IconContext.Provider>
  );
};

export const Medium = () => {
  return (
    <IconContext.Provider value={{ color: "orange", size: "16px" }}>
      <div className="CardBodyIcon">
        <PiCellSignalMediumDuotone />
      </div>
    </IconContext.Provider>
  );
};

export const Low = () => {
  return (
    <IconContext.Provider value={{ color: "darkyellow", size: "16px" }}>
      <div className="CardBodyIcon">
        <PiCellSignalLowDuotone />
      </div>
    </IconContext.Provider>
  );
};

export const High = () => {
  return (
    <IconContext.Provider value={{ color: "green", size: "16px" }}>
      <div className="CardBodyIcon">
        <PiCellSignalHighDuotone />
      </div>
    </IconContext.Provider>
  );
};

export const Urgent = () => {
  return (
    <IconContext.Provider value={{ color: "red", size: "14px" }}>
      <div className="CardBodyIcon">
        <BsExclamationSquareFill />
      </div>
    </IconContext.Provider>
  );
};
