import { ImCancelCircle } from "react-icons/im";

interface ICancel {
  onClick: React.MouseEventHandler<SVGElement> | undefined;
}

const Cancel = ({ onClick }: ICancel) => {
  return (
    <ImCancelCircle
      color="#17181d"
      cursor="pointer"
      onClick={onClick}
      size={26}
    />
  );
};

export default Cancel;
