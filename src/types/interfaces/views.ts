import { IPages } from "./interfaces";

export interface IResult {
  sumStars: number[] | undefined;
  credible: string;
  trustworthy: string;
  questionable: string;
  doubtful: string;
  unbelievable: string;
  onNext: React.MouseEventHandler<SVGElement> | undefined;
  onPrev: React.MouseEventHandler<SVGElement> | undefined;
}

export interface ISection {
  text: string;
  color?: string;
  minWidth?: string;
  maxWidth?: string;
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
