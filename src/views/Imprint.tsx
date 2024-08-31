import { FramerMotion, ContentContainer, Flex } from "../components";
import {
  Contact,
  ImprintInformation,
  LegalForm,
  ProjectOwner,
  RightsOwner,
  TechnicalRealization,
} from "../components/survey/footer/imprint";

const Imprint = () => {
  return (
    <FramerMotion>
      <ContentContainer maxWidth={1200}>
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
