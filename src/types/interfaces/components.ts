export interface ISteps {
  counter: string;
  text: string;
  style?: React.CSSProperties;
}

export interface IInput {
  label: string;
  name: string;
  htmlFor: string;
  error: JSX.Element | null;
  inputErrorStyle: JSX.Element | null;
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

export interface IInputErrorContainer {
  children: React.ReactNode;
}

export interface IBackContinueButton {
  page: number;
}

export interface IModal {
  children: JSX.Element | JSX.Element[];
  isVisible?: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
}

export interface IModalContent {
  url: string;
  header: string;
  localeStorage: string;
  id: string;
}

export interface IToggleButton {
  label: string;
  isOn: boolean;
  handleToggle: React.ChangeEventHandler<HTMLInputElement> | undefined;
  ifOnText: string;
  ifOffText: string;
  htmlFor: string;
}
