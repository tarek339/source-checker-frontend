import { IPages } from "./interfaces";

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
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
}

export interface ICancelButton {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  title: string;
}

export interface IModal {
  children: JSX.Element | JSX.Element[];
  isVisible?: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
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

export interface IToggleButton {
  label: string;
  labelText?: string;
  isOn: boolean;
  handleToggle: React.ChangeEventHandler<HTMLInputElement> | undefined;
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

export interface ISurveyContent {
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
}

export interface ISubCard {
  children: JSX.Element | JSX.Element[];
  width: string;
  style?: React.CSSProperties;
}

export interface IFlex {
  children: JSX.Element[] | JSX.Element;
  direction: "row" | "column" | "column-reverse" | "row-reverse";
  gap: string;
  justify?: string;
  align?: string;
  width?: string;
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
}

export interface ISubHeader {
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

export interface ISubTitel {
  title: string;
}

export interface IOpenGraphView {
  pageID: string;
  openGraphView: boolean;
  ogTitle: string;
  url: string;
  ogDescription: string;
}
