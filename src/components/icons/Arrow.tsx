import { MdOutlineArrowForwardIos } from "react-icons/md";

export interface IUp {
  fontSize: number;
  onClick?: React.MouseEventHandler<SVGElement> | undefined;
  deg: number;
}

const Arrow = ({ fontSize, onClick, deg }: IUp) => {
  return (
    <MdOutlineArrowForwardIos
      fontSize={`${fontSize}px`}
      style={{
        cursor: "pointer",
        transform: `rotate(${deg}deg)`,
        transition: "300ms ease all",
      }}
      onClick={onClick}
    />
  );
};

export default Arrow;
