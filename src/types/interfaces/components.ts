import { PagesProps } from "./interfaces";
import {
  HandleFirstAction,
  IHandleLastAction,
  HandleViewsModalAction,
} from "./redux/slices";

export interface InputProps {
  htmlFor: string;
  type?: string;
  label: string;
  palceholder?: string;
  error: boolean;
  errorMessage?: string | JSX.Element | null;
  value: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClear: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface TextAreaProps {
  htmlFor: string;
  label: string;
  value: string;
  disabled: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose:
    | ((event: object, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  style?: React.CSSProperties;
}

export interface ErrorModalProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ScreenShotProps {
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
    payload: HandleViewsModalAction;
    type: "viewsModal/handleViewsModal";
  };
}

export interface LoadingPulseProps {
  color: string;
  size: number;
}

export interface LoadingSpinnerProps {
  color: string;
  size: number;
}

export interface PageFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  inputValue: string;
  urlValue: string;
  textAreaValue: string;
  titleError: boolean;
  urlError: boolean;
  titleErrorMessage: string;
  urlErrorMessage: string;
  onChangeTitle: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onChangeUrl: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onChangeTextArea: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  onClickTitleIcon: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickUrlIcon: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface QRCodeProps {
  size?: number;
  value: string;
  onClick?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
  cursor?: string;
}

export interface HeaderProps {
  title: string;
}

export interface BasicCardProps {
  children: JSX.Element[] | JSX.Element;
  width?: string;
}

export interface AppContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export interface GridPorps {
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
  children: JSX.Element[] | JSX.Element;
  spacing?: number;
  column?: boolean;
  columnReverse?: boolean;
  rowReverse?: boolean;
  maxWidth?: number;
  maxedWidth?: boolean;
  noMargin?: boolean;
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  flexStart?: boolean;
  center?: boolean;
  flexEnd?: boolean;
  between?: boolean;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  gutters?: boolean;
  padding?: boolean;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  alignStretch?: boolean;
  justifyItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  nowrap?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export interface GridItemProps {
  children: JSX.Element[] | JSX.Element;
  size?: number;
}

export interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  children: JSX.Element | JSX.Element[];
}

export interface SubTitleProps {
  title: string | JSX.Element;
  color?: string;
  marginBottom?: string;
  marginTop?: string;
  center?: boolean;
  small?: boolean;
}

export interface FramerMotionProps {
  children: JSX.Element | JSX.Element[];
}

export interface TitleProps {
  title: string;
  marginBottom?: string;
  color?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface OpenGraphViewProps {
  pageID: string;
  openGraphView: boolean;
  ogTitle: string;
  url: string;
  ogDescription: string;
  icon: JSX.Element;
  gap: string;
}

export interface SpanProps {
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

export interface ScreenShotHolderProps {
  src: string;
}

export interface OpenGraphHolderProps {
  ogTitle: string;
  ogImage: string | string[] | null;
  ogDescription: string;
  url: string;
}

export interface StarRatingProps {
  pageId: string;
  surveyId: string;
  studentId: string;
}

export interface PageModalProps {
  children: JSX.Element;
  title: string;
}

export interface ResultProps {
  first: number;
  last: number;
  nextId: string;
  prevId: string;
  property: PagesProps[];
  setFirst: (first: number) => {
    payload: HandleFirstAction;
    type: "sliceNums/handleFirst";
  };
  setLast: (last: number) => {
    payload: IHandleLastAction;
    type: "sliceNums/handleLast";
  };
}

export interface SectionChildProps {
  text: string | JSX.Element;
  color?: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  style?: React.CSSProperties;
}

export interface SectionHolderProps {
  page: PagesProps;
}

export interface LinkProps {
  url: string;
  title: string;
  fontWeight?: number;
  fontSize?: number;
  color?: string;
}

export interface ThumbnailProps {
  url: string | string[] | null;
  width?: string;
  height?: string;
  overflowY?:
    | "visible"
    | "hidden"
    | "clip"
    | "scroll"
    | "auto"
    | "initial"
    | "inherit";
}

export interface LinkButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface SectionProps {
  title: string;
  subTitle?: string;
  mappedTitle?: React.ReactNode;
}

export interface IIBack {
  onClick?: React.MouseEventHandler<SVGElement>;
  style?: React.CSSProperties;
  size?: number;
}

export interface TextSmallProps {
  text: string | JSX.Element;
  uppercase?: boolean;
  bold?: boolean;
}

export interface NoteModalProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ButtonProps {
  title: string | JSX.Element;
  type?: "submit" | "button" | "reset" | undefined;
  error?: boolean;
  fullWidth?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  gap?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: React.CSSProperties;
}

export interface ViewsModalProps {
  pageId: string;
}

export interface BasicTableProps {
  header: string[] | JSX.Element[];
  children: JSX.Element;
  minWidth: number;
}

export interface SummaryTableProps {
  header: string[] | JSX.Element[] | null;
  children: JSX.Element;
  flexEnd?: boolean;
  size?: "small" | "medium";
  right?: boolean;
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

export interface ActionButtonProps {
  onClick:
    | React.MouseEventHandler<HTMLButtonElement>
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined;
  onMouseEnter: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onMouseLeave: React.MouseEventHandler<HTMLButtonElement> | undefined;
  borderColor: string;
  color: string;
  icon: JSX.Element | undefined;
  title: string;
}

export interface EmptyDataProps {
  title: string;
  width: string;
  height: string;
}

export interface SideDrawerProps {
  open: boolean;
  toggleDrawer:
    | ((event: object, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  children: JSX.Element | JSX.Element[];
  anchor: "left" | "top" | "right" | "bottom" | undefined;
}

export interface BtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  title?: string;
}

export interface SwitchButtonProps {
  label?: string;
  labelText?: string;
  toggled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  ifOnText?: string;
  ifOffText?: string;
  type?: "submit" | "button";
}

export interface UlListProps {
  children: JSX.Element | JSX.Element[];
}

export interface ListItemProps {
  children: string | number;
}

export interface BasicLinkProps {
  href: string;
  title?: string;
  mail?: boolean;
  bold?: boolean;
  small?: boolean;
  xs?: boolean;
}

export interface TextProps {
  text: string | number | JSX.Element;
  bold?: boolean;
  color?: string;
  pointer?: boolean;
  underline?: boolean;
  small?: boolean;
  uppercase?: boolean;
  center?: boolean;
  body2?: boolean;
  style?: React.CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

export interface BasicDividerProps {
  borderWidth?: number;
}
