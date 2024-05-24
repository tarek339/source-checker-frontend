import { BiLoaderAlt } from "react-icons/bi";

interface ILoading {
  style: React.CSSProperties;
}

const Loading = ({ style }: ILoading) => {
  return <BiLoaderAlt style={style} />;
};

export default Loading;
