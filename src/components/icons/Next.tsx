import { MdOutlineArrowForwardIos } from "react-icons/md";

interface IPrev {
  last: number;
  propertyLength: number;
  onClick: React.MouseEventHandler<SVGElement> | undefined;
  fontSize: number;
}

const Next = ({ last, propertyLength, onClick, fontSize }: IPrev) => {
  return (
    <MdOutlineArrowForwardIos
      fontSize={`${fontSize}px`}
      cursor={last >= propertyLength ? "default" : "pointer"}
      onClick={onClick}
    />
  );
};

export default Next;
