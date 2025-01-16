import { MdHome } from "react-icons/md";

interface IHome {
  color?: string;
  size?: number;
  onClick?: React.MouseEventHandler<SVGElement> | undefined;
}
const Home = ({ color, size, onClick }: IHome) => {
  return (
    <MdHome
      color={color}
      size={size}
      onClick={onClick}
      style={{ transition: "color 0.2s ease" }}
    />
  );
};

export default Home;
