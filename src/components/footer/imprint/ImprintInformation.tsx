import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import Title from "../../fonts/Title";

const ImprintInformation = () => {
  return (
    <Flex direction={"column"} gap={"10px"}>
      <Title style={{ padding: "0px" }} title={"Impressum"} />
      <Span
        title={
          "Die Website und OER Quellenchecker ist ein Projekt von #UseTheNews / HAW Hamburg und der Hamburg Open Online University (HOOU@HAW)."
        }
      />
    </Flex>
  );
};

export default ImprintInformation;
