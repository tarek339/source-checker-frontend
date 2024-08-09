import Span from "../../../fonts/Span";
import Flex from "../../../containers/Flex";

export interface IEmptyData {
  title: string;
  width: string;
  height: string;
}

const EmptyData = ({ title, width, height }: IEmptyData) => {
  return (
    <Flex
      direction={"row"}
      align="center"
      justify="center"
      gap={""}
      style={{
        width: width,
        height: height,
        padding: "10px",
        border: "2px dashed lightgrey",
      }}>
      <Span title={title} fontSize={20} fontWeight={600} />
    </Flex>
  );
};

export default EmptyData;
