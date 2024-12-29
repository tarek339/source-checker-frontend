import { MdHome } from "react-icons/md";

interface IHome {
  color?: string;
  onClick?: React.MouseEventHandler<SVGElement> | undefined;
}
const Home = ({ color, onClick }: IHome) => {
  return (
    <MdHome
      color={color}
      size={48}
      onClick={onClick}
      style={{ transition: "color 0.2s ease" }}
    />
  );
};

export default Home;
