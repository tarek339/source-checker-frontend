import { MdHome } from "react-icons/md";

interface IHome {
  color: string;
}
const Home = ({ color }: IHome) => {
  return (
    <MdHome color={color} size={48} style={{ transition: "color 0.2s ease" }} />
  );
};

export default Home;
