import { useSelectors } from "../../../hooks";
import Flex from "../../parents/containers/Flex";

const SurveyStart = () => {
  const { student } = useSelectors();
  return (
    <Flex direction={"column"} gap={"20px"} align="center" justify="center">
      <h3>Start</h3>
      <h3>{student?._id}</h3>
    </Flex>
  );
};

export default SurveyStart;
