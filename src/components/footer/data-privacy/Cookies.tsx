import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import TextSmall from "../../fonts/TextSmall";

const Cookies = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Span title={"Cookies"} />
      <TextSmall text={"Diese Website verwendet keine Cookies."} />
    </Flex>
  );
};

export default Cookies;
