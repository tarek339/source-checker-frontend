import { useEffect } from "react";
import { useDispatches } from "../hooks";
import { FramerMotion, ContentContainer, Title, Flex } from "../components";
import "../components/footer/license-notes/table.css";
import {
  GeneralInfo,
  Mit,
  Apache,
  Isc,
  Dependencies,
  DevDependencies,
  Ccby,
} from "../components/footer/license-notes";

const LicenseNotes = () => {
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, [setMainPage]);

  return (
    <FramerMotion>
      <ContentContainer
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
        }}>
        <Title title={"Lizenzhinweise"} />
        <Title
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
