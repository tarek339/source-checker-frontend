import Flex from "../../containers/Flex";
import Link from "../../fonts/Link";
import TextSmall from "../../fonts/TextSmall";
import Title from "../../fonts/Title";

const PrivacyInfo = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Title style={{ padding: "0px" }} title={"Datenschutzhinweise"} />
      <Flex direction={"row"} gap={"5px"}>
        <TextSmall text={"für Quellenchecker"} />
        <Link
          url={"https://quellenchecker.hoou.tech/"}
          title={"https://quellenchecker.hoou.tech"}
          fontWeight={600}
          fontSize={14}
        />
      </Flex>
      <TextSmall
        text={
          "ein Projekt von #UseTheNews / HAW Hamburg und der Hamburg Open Online University (HOOU@HAW)"
        }
      />
    </Flex>
  );
};

export default PrivacyInfo;
