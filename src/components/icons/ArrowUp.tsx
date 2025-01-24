import { FiArrowUp } from "react-icons/fi";

interface ArrowUpProps {
  fontSize: string;
  color: string;
}

const ArrowUp = ({ fontSize, color }: ArrowUpProps) => {
  return <FiArrowUp fontSize={fontSize} color={color} />;
};

export default ArrowUp;
