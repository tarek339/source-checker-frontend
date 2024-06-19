import { MdOutlineArrowBackIos } from "react-icons/md";

export interface IPrev {
  first: number;
  onClick: React.MouseEventHandler<SVGElement> | undefined;
  fontSize: number;
}

const Prev = ({ first, onClick, fontSize }: IPrev) => {
  return (
    <MdOutlineArrowBackIos
      fontSize={`${fontSize}px`}
      style={{ cursor: first === 0 ? "default" : "pointer" }}
      onClick={onClick}
    />
  );
};

export default Prev;
