import { GiSettingsKnobs } from "react-icons/gi";
import { BiChevronDown, BiLowVision } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
// import { FaEllipsis } from "react-icons/fa";
// import { HiOutlineEllipsisHorizontal } from "react-icons/hi";

import { CgSignal } from "react-icons/cg";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaCircleXmark, FaCircleHalfStroke } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { BsExclamationSquareFill } from "react-icons/bs";
import { BiLoaderCircle, BiPlus } from "react-icons/bi";
// import {
//   PiCellSignalMediumDuotone,
//   PiCellSignalLowDuotone,
//   PiCellSignalHighDuotone,
// } from "react-icons/hi";

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