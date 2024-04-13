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
  name: string;
  htmlFor: string;
  error: JSX.Element | null;
  inputErrorStyle?: JSX.Element | null;
  option: JSX.Element | undefined;
}

export interface IBackButton {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
