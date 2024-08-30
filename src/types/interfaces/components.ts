import { IPages } from "./interfaces";
import { IHandleFirst, IHandleLast, IHandleModal } from "./redux/slices";

export interface IInput {
  type?: string;
  label: string;
  name: string;
  htmlFor: string;
  error: JSX.Element | string | null;
  inputErrorStyle: JSX.Element | string | null;
  value: string;
  placeHolder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface ITextArea {
  label: string;
  name: string;
  htmlFor: string;
  error: JSX.Element | null;
  inputErrorStyle: JSX.Element | null;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export interface IBackContinueButton {
  path: string;
}

export interface ISubButton {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  title: string | JSX.Element | JSX.Element[];
  type?: "submit" | "reset" | "button" | undefined;
  width?: string | undefined;
  icon?: JSX.Element;
  gap?: string;
}

export interface ICancelButton {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  title: string;
  style?: React.CSSProperties;
}

export interface IModal {
  children: JSX.Element | JSX.Element[];
  isVisible?: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
}

export interface IModals {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  onClose: () => {
    payload: IHandleModal;
    type: "modal/handleModal";
  };
}
export interface ISideBar {
  children: JSX.Element | JSX.Element[];
  collapsed: boolean;
  toggled: boolean;
}

export interface IModalContent {
  url: string;
  header: string;
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
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  status: number | string | null | undefined;
  statusText: string | undefined;
  errTitle: string | undefined;
  errMsg: string | undefined;
  optionOne: string | undefined;
  optionTwo: string | undefined;
}

export interface IFormButton {
  title: string | JSX.Element;
  style?: React.CSSProperties;
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
}

export interface IFlex {
  children: JSX.Element[] | JSX.Element;
  direction: "row" | "column" | "column-reverse" | "row-reverse";
  gap: string;
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
  gap: string;
  style?: React.CSSProperties;
  maxWidth?: number;
  margin?: string;
  paddingTop?: string;
}

export interface ISubTitle {
  title: string | JSX.Element;
  style?: React.CSSProperties;
}

export interface ILoadingBar {
  percent: number;
  marginTop: number;
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
  ogImage: string;
  ogDescription: string;
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
  fontWeight: number;
  fontSize: number;
  color?: string;
}

export interface IThumbnail {
  url: string;
  width?: string;
  height?: string;
}

export interface ILinkButton {
  url: string;
  title: string;
  color?: string;
  bgColor?: string;
}

export interface ISection {
  title: string;
  subTitle?: string;
  mappedTitle?: React.ReactNode;
}

export interface IIBack {
  onClick?:
    | React.MouseEventHandler<HTMLDivElement>
    | React.MouseEventHandler<HTMLSpanElement>
    | undefined;
}

export interface ITextSmall {
  text: string | JSX.Element;
  uppercase?: boolean;
  bold?: boolean;
}
