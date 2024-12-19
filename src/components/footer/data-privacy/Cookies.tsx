import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";

const Cookies = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Span fontSize={18} title={"Cookies"} />
      <Span fontSize={16} title={"Diese Website verwendet keine Cookies."} />
    </Flex>
  );
};

export default Cookies;
