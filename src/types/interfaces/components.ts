import { IPages } from "./interfaces";
import { IHandleFirst, IHandleLast, IHandleViewsModal } from "./redux/slices";

export interface IInput {
  type?: string;
  label: string;
  name: string;
  htmlFor: string;
  error: JSX.Element | string | null;
  hasError: JSX.Element | string | null;
  value: string;
  placeHolder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClear?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ITextArea {
  label: string;
  name: string;
  htmlFor: string;
  error: JSX.Element | null;
  hasError: JSX.Element | null;
  value: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export interface IModal {
  children: React.ReactNode;
  open: boolean;
  onClose:
    | ((event: object, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  style?: React.CSSProperties;
}

export interface ISideBar {
  children: JSX.Element | JSX.Element[];
  collapsed: boolean;
  toggled: boolean;
}

export interface ISwitchToggle {
  label: string;
  labelText?: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  ifOnText: string;
  ifOffText: string;
  htmlFor: string;
}

export interface ITable {
  headers: string[] | null;
  propsChildren: JSX.Element[] | JSX.Element;
  first: number;
  last: number;
  setFirst: (value: React.SetStateAction<number>) => void | undefined;
  setLast: (value: React.SetStateAction<number>) => void | undefined;
  property: IPages[];
}

export interface IErrorModal {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IScreenShot {
  title: string;
  width: string;
  id: string | undefined;
  isMobileView: boolean;
  pageID: string;
  url: string;
  height: string;
  icon: JSX.Element;
  gap?: string;
  closeModal?: () => {
    payload: IHandleViewsModal;
    type: "viewsModal/handleViewsModal";
  };
}

export interface ILoadingPulse {
  color: string;
  size: number;
}

export interface ILoadingSpinner {
  color: string;
  size: number;
}

export interface IPageForm {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  titleError: string | JSX.Element | null;
  urlError: string | JSX.Element | null;
  inputValue: string;
  urlValue: string;
  textAreaValue: string;
  onChangeTitle: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onChangeUrl: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onChangeTextArea: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  onClickTitleIcon: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickUrlIcon: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IQRCode {
  size?: number;
  value: string;
  onClick?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
  cursor?: string;
}

export interface IHeader {
  title: string;
}

export interface ICard {
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
}

export interface IContentContainer {
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
  maxWidth?: number;
  marginTop?: number;
}

export interface IAppContainer {
  children: JSX.Element[] | JSX.Element;
}

export interface ISubCard {
  children: JSX.Element | JSX.Element[];
  width?: string;
  style?: React.CSSProperties;
  height?: string;
}

export interface IFlex {
  children: JSX.Element[] | JSX.Element;
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: string;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline"
    | "initial"
    | "inherit";
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export interface IButtonContainer {
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}

export interface IFormContainer {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  children: JSX.Element | JSX.Element[];
  gap?: string;
  style?: React.CSSProperties;
  maxWidth?: number;
  margin?: string;
  paddingTop?: string;
}

export interface ISubTitle {
  title: string | JSX.Element;
  style?: React.CSSProperties;
}

export interface IFramerMotion {
  children: JSX.Element | JSX.Element[];
}

export interface ITitle {
  title: string;
  style?: React.CSSProperties;
}

export interface IOpenGraphView {
  pageID: string;
  openGraphView: boolean;
  ogTitle: string;
  url: string;
  ogDescription: string;
  icon: JSX.Element;
  gap: string;
}

export interface ISpan {
  title: string | React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  textDecoration?: string;
  cursor?: string;
  icon?: JSX.Element;
}

export interface IScreenShotHolder {
  src: string;
}

export interface IOpenGraphHolder {
  ogTitle: string;
  ogImage: string | string[] | null;
  ogDescription: string;
  url: string;
}

export interface IStarRating {
  pageId: string;
  surveyId: string;
  studentId: string;
}

export interface IPageModal {
  children: JSX.Element;
  title: string;
}

export interface IResult {
  sumStars: number[] | undefined;
  credible: JSX.Element;
  trustworthy: JSX.Element;
  questionable: JSX.Element;
  doubtful: JSX.Element;
  unbelievable: JSX.Element;
  first: number;
  last: number;
  property: IPages[];
  setFirst: (first: number) => {
    payload: IHandleFirst;
    type: "sliceNums/handleFirst";
  };
  setLast: (last: number) => {
    payload: IHandleLast;
    type: "sliceNums/handleLast";
  };
}

export interface ISectionChild {
  text: string | JSX.Element;
  color?: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  style?: React.CSSProperties;
}

export interface ISectionHolder {
  page: IPages;
  starsArrayLength: number;
  credible: JSX.Element;
  trustworthy: JSX.Element;
  questionable: JSX.Element;
  doubtful: JSX.Element;
  unbelievable: JSX.Element;
}

export interface ILink {
  url: string;
  title: string;
  fontWeight?: number;
  fontSize?: number;
  color?: string;
}

export interface IThumbnail {
  url: string | string[] | null;
  width?: string;
  height?: string;
}

export interface ILinkButton {
  url: string;
  title: string;
}

export interface ISection {
  title: string;
  subTitle?: string;
  mappedTitle?: React.ReactNode;
}

export interface IIBack {
  onClick?: React.MouseEventHandler<SVGElement>;
  style?: React.CSSProperties;
}

export interface ITextSmall {
  text: string | JSX.Element;
  uppercase?: boolean;
  bold?: boolean;
}

export interface INoteModal {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IButton {
  title: string | JSX.Element;
  type?: "submit" | "button" | "reset" | undefined;
  error?: boolean;
  icon?: JSX.Element;
  gap?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: React.CSSProperties;
}

export interface IIconsListing {
  children: JSX.Element[] | JSX.Element | undefined;
}

export interface IViewsModal {
  pageId: string;
}

export interface BasicTableProps {
  header: string[];
  children: JSX.Element;
  minWidth: number;
}

export interface EnhancedTableHeadProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
