import { useEffect } from "react";
import { FramerMotion, ContentContainer, Flex } from "../components";
import { useDispatches } from "../hooks";
import {
  ImprintInformation,
  RightsOwner,
  LegalForm,
  ProjectOwner,
  TechnicalRealization,
  Contact,
} from "../components/footer/imprint";

const Imprint = () => {
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, [setMainPage]);

  return (
    <FramerMotion>
      <ContentContainer
        maxWidth={1200}
        style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <Flex direction={"column"} gap={"70px"}>
          <ImprintInformation />
          <RightsOwner />
          <LegalForm />
          <ProjectOwner />
          <TechnicalRealization />
          <Contact />
        </Flex>
      </ContentContainer>
    </FramerMotion>
  );
};

export default Imprint;
