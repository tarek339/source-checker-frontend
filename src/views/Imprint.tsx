import { useEffect } from "react";
import { FramerMotion, ContentContainer, Flex } from "../components";
import {
  Contact,
  ImprintInformation,
  LegalForm,
  ProjectOwner,
  RightsOwner,
  TechnicalRealization,
} from "../components/survey/footer/imprint";
import { useDispatches } from "../hooks";

const Imprint = () => {
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, []);

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
