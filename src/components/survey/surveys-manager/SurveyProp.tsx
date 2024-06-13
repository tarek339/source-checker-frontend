import { ISurveyProp } from "../../../types/interfaces/interfaces";
import Flex from "../../parents/containers/Flex";

const SurveyProp = ({ header, child, secondChild }: ISurveyProp) => {
  return (
    <Flex direction={"row"} gap={"5px"} justify="space-between" align="center">
      <Flex direction={"row"} gap={"5px"} justify="flex-start" align="center">
        <h4>{header}</h4>
        <div style={{ paddingTop: "3px" }}>{secondChild}</div>
      </Flex>
      <div>{child}</div>
    </Flex>
  );
};

export default SurveyProp;
