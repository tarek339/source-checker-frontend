import { useEffect } from "react";
import { useDispatches } from "../hooks";
import { FramerMotion, ContentContainer, Title, Flex } from "../components";
import "../components/footer/license-notes/table.css";
import {
  GeneralInfo,
  MIT,
  Apache,
  ApacheTwo,
  ISC,
  Dependencies,
  DevDependencies,
} from "../components/footer/license-notes";

const LicenseNotes = () => {
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, []);

  return (
    <FramerMotion>
      <ContentContainer
        maxWidth={1200}
        style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <Title title={"Lizenzhinweise"} />
        <Title
          title={
            "License Information for this website and used icons on this website"
          }
        />
        <Flex style={{ paddingLeft: "20px" }} direction={"column"} gap={"30px"}>
          <GeneralInfo />
          <MIT />
          <Apache />
          <ApacheTwo />
          <ISC />
          <Dependencies />
          <DevDependencies />
        </Flex>
      </ContentContainer>
    </FramerMotion>
  );
};

export default LicenseNotes;
