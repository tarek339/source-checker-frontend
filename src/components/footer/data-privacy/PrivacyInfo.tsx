import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import Title from "../../fonts/Title";

const PrivacyInfo = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Title style={{ padding: "0px" }} title={"Datenschutzhinweise"} />
      <Flex direction={"row"} gap={"5px"}>
        <span style={{ fontSize: "18px" }}>
          Für Quellenchecker{" "}
          <span>
            <a
              style={{ fontSize: "18px" }}
              href="mailto:https://quellenchecker.hoou.tech/">
              https://quellenchecker.hoou.tech
            </a>
          </span>
          .
        </span>
      </Flex>
      <Span
        fontSize={18}
        title={
          "Ein Projekt von #UseTheNews / HAW Hamburg und der Hamburg Open Online University (HOOU@HAW)"
        }
      />
    </Flex>
  );
};

export default PrivacyInfo;
