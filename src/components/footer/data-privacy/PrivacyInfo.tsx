import Flex from "../../containers/Flex";
import Link from "../../fonts/Link";
import Span from "../../fonts/Span";
import Title from "../../fonts/Title";

const PrivacyInfo = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Title style={{ padding: "0px" }} title={"Datenschutzhinweise"} />
      <Flex direction={"row"} gap={"5px"}>
        <Span fontSize={18} title={"für Quellenchecker"} />
        <Link
          url={"https://quellenchecker.hoou.tech/"}
          title={"https://quellenchecker.hoou.tech"}
          fontWeight={600}
          fontSize={18}
        />
      </Flex>
      <Span
        fontSize={18}
        title={
          "ein Projekt von #UseTheNews / HAW Hamburg und der Hamburg Open Online University (HOOU@HAW)"
        }
      />
    </Flex>
  );
};

export default PrivacyInfo;
