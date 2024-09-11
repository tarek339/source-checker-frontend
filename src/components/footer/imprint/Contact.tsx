import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import SubTitle from "../../fonts/SubTitle";

const Contact = () => {
  return (
    <Flex direction={"column"} gap={"10px"}>
      <SubTitle title={"Kontakt für allgemeine Fragen oder Feedback:"} />
      <Span title={"E-Mail: fiete.stegers[at]haw-hamburg.de"} />
    </Flex>
  );
};

export default Contact;
