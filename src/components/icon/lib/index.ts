import type { IconComponent, IconName } from "../icon-types";
import ArrowLeft from "./arrow/ArrowLeft";
import ArrowRight from "./arrow/ArrowRight";
import ChevronDown from "./chevron/ChevronDown";
import ChevronDownDouble from "./chevron/ChevronDownDouble";
import ChevronDownLeft from "./chevron/ChevronDownLeft";
import ChevronDownRight from "./chevron/ChevronDownRight";
import ChevronLeft from "./chevron/ChevronLeft";
import ChevronLeftDouble from "./chevron/ChevronLeftDouble";
import ChevronRight from "./chevron/ChevronRight";
import ChevronRightDouble from "./chevron/ChevronRightDouble";
import ChevronSelectorHorizontal from "./chevron/ChevronSelectorHorizontal";
import ChevronSelectorVertical from "./chevron/ChevronSelectorVertical";
import ChevronUp from "./chevron/ChevronUp";
import ChevronUpDouble from "./chevron/ChevronUpDouble";
import ChevronUpLeft from "./chevron/ChevronUpLeft";
import ChevronUpRight from "./chevron/ChevronUpRight";
import Copy from "./Copy";
import Filter from "./filter/Filter";
import FilterClose from "./filter/FilterClose";
import Home from "./Home";
import Moon from "./Moon";
import Sun from "./Sun";
import Trash from "./Trash";
import Wallet from "./Wallet";

const icons: Record<IconName, IconComponent> = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'chevron-down': ChevronDown,
  'chevron-down-double': ChevronDownDouble,
  'chevron-down-left': ChevronDownLeft,
  'chevron-down-right': ChevronDownRight,
  'chevron-left': ChevronLeft,
  'chevron-left-double': ChevronLeftDouble,
  'chevron-right': ChevronRight,
  'chevron-right-double': ChevronRightDouble,
  'chevron-selector-horizontal': ChevronSelectorHorizontal,
  'chevron-selector-vertical': ChevronSelectorVertical,
  'chevron-up': ChevronUp,
  'chevron-up-double': ChevronUpDouble,
  'chevron-up-left': ChevronUpLeft,
  'chevron-up-right': ChevronUpRight,
  'copy': Copy,
  'filter': Filter,
  'filter-close': FilterClose,
  'home': Home,
  'moon': Moon,
  'sun': Sun,
  'trash': Trash,
  'wallet': Wallet
}

export default icons;