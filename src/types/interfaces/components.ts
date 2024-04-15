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
  inputErrorStyle?: JSX.Element | null;
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

export interface IBackButton {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
