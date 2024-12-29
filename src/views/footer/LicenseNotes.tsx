import { FramerMotion, ContentContainer, Title, Flex } from "../../components";
import {
  GeneralInfo,
  Mit,
  Apache,
  Ccby,
  Isc,
  Dependencies,
  DevDependencies,
} from "../../components/footer/license-notes";

const LicenseNotes = () => {
  return (
    <FramerMotion>
      <ContentContainer
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
        }}>
        <Title style={{ padding: "0px" }} title={"Lizenzhinweise"} />
        <Title
          style={{ padding: "0px" }}
          title={
            "License Information for this website and used icons on this website"
          }
        />
        <Flex direction={"column"} gap={"30px"}>
          <GeneralInfo />
          <Mit />
          <Apache />
          <Ccby />
          <Isc />
          <Dependencies />
          <DevDependencies />
        </Flex>
      </ContentContainer>
    </FramerMotion>
  );
};

export default LicenseNotes;
