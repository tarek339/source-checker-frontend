import { FramerMotion, ContentContainer, Flex } from "../../components";
import {
  ImprintInformation,
  RightsOwner,
  LegalForm,
  ProjectOwner,
  TechnicalRealization,
  Contact,
} from "../../components/footer/imprint";

const Imprint = () => {
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
