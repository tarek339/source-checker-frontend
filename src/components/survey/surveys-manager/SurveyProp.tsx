import { ISurveyProp } from "../../../types/interfaces/interfaces";
import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";

const SurveyProp = ({ header, child, secondChild }: ISurveyProp) => {
  return (
    <Flex direction={"row"} gap={"5px"} justify="space-between" align="center">
      <Flex direction={"row"} gap={"5px"} justify="flex-start" align="center">
        <Span fontWeight={600} title={header} />
        <div style={{ paddingTop: "3px" }}>{secondChild}</div>
      </Flex>
      <div>{child}</div>
    </Flex>
  );
};

export default SurveyProp;
