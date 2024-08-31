import Flex from "../../../containers/Flex";
import Span from "../../../fonts/Span";
import SubTitle from "../../../fonts/SubTitle";

const RightsOwner = () => {
  return (
    <Flex direction={"column"} gap={"10px"}>
      <SubTitle title={"Rechtlich verantwortlich"} />
      <div>
        <Span
          title={
            "Hochschule für Angewandte Wissenschaften Hamburg (HAW Hamburg)"
          }
        />
        <Span title={"Berliner Tor 5"} />
        <Span title={"20099 Hamburg"} />
        <Span title={"Deutschland"} />
      </div>

      <div>
        <Span title={"Tel. +49 40 428 75- 0"} />
        <Span title={"Fax +49 40 428 75 91 49"} />
        <Span title={"info[at]haw-hamburg.de"} />
      </div>
    </Flex>
  );
};

export default RightsOwner;
