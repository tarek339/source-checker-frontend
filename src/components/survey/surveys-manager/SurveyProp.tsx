import { ISurveyProp } from "../../../types/interfaces/interfaces";
import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";

const SurveyProp = ({ header, child, secondChild, filter }: ISurveyProp) => {
  return (
    <Flex direction={"row"} gap={"5px"} justify="space-between" align="center">
      <Flex direction={"row"} gap={"5px"} justify="flex-start" align="center">
        <Flex direction={"column"} gap="5px">
          <Span fontWeight={600} title={header} />
          <span style={{ fontSize: "16px" }}>{secondChild}</span>
        </Flex>
      </Flex>
      <div style={{ filter: `blur(${filter}px)` }}>{child}</div>
    </Flex>
  );
};

export default SurveyProp;
