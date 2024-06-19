import { IPages } from "./interfaces";
import { IHandleModal } from "./redux/slices";

export interface ISteps {
  counter: string;
  text: string;
  style?: React.CSSProperties;
}

export interface IInput {
  label: string;
  name: string;
  htmlFor: string;
  error: JSX.Element | string | null;
  inputErrorStyle: JSX.Element | string | null;
  value: string;
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

export interface ISelect {
  label: string;
  error: JSX.Element | null;
  inputErrorStyle?: JSX.Element | null;
  selectedItem: JSX.Element | string | undefined;
  option: JSX.Element[] | JSX.Element | string | undefined;
}

export interface IBackContinueButton {
  path: string;
}

export interface IContButton {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  title: string | JSX.Element | JSX.Element[];
  type?: "submit" | "reset" | "button" | undefined;
  width?: string | undefined;
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
  headers: string[];
  propsChildren: JSX.Element[] | JSX.Element;
  first: number;
  last: number;
  setFirst: (value: React.SetStateAction<number>) => void | undefined;
  setLast: (value: React.SetStateAction<number>) => void | undefined;
  property: IPages[];
}

export interface IErrorModal {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
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
  value: string;
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
  title: string;
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
}

export interface IOpenGraphView {
  pageID: string;
  openGraphView: boolean;
  ogTitle: string;
  url: string;
  ogDescription: string;
}

export interface ISpanBold {
  title: string | React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLSpanElement> | undefined;
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
  credible: string;
  trustworthy: string;
  questionable: string;
  doubtful: string;
  unbelievable: string;
  first: number;
  last: number;
  property: IPages[];
  setFirst: (value: React.SetStateAction<number>) => void | undefined;
  setLast: (value: React.SetStateAction<number>) => void | undefined;
}

export interface ISection {
  text: string;
  color?: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
}

export interface ISectionHolder {
  page: IPages;
  starsArrayLength: number;
  credible: string;
  trustworthy: string;
  questionable: string;
  doubtful: string;
  unbelievable: string;
}
