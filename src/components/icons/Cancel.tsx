import { MdOutlineCancel } from "react-icons/md";

interface ICancel {
  onClick?: React.MouseEventHandler<SVGElement> | undefined;
}

const Cancel = ({ onClick }: ICancel) => {
  return <MdOutlineCancel color="#17181d" fontSize="48px" onClick={onClick} />;
};

export default Cancel;
