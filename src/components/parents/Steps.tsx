import { useBreakPoints } from "../../hooks";
import { ISteps } from "../../types/interfaces/components";
import Flex from "./containers/Flex";

const Steps = ({ counter, text, style }: ISteps) => {
  const { windowWidth } = useBreakPoints();
  return (
    <Flex
      direction={"column"}
      gap={"5px"}
      justify="center"
      style={{ paddingLeft: windowWidth <= 768 ? "15px" : "0px" }}>
      <span
        style={{
          fontWeight: 600,
          fontSize: "20px",
          ...style,
        }}>
        {counter}
      </span>
      <span style={{ color: "#17181d" }}>{text}</span>
    </Flex>
  );
};

export default Steps;
