import {
  FramerMotion,
  ContentContainer,
  Flex,
  SubTitle,
} from "../../components";
import {
  PrivacyInfo,
  ContactData,
  Protocol,
  Cookies,
  RightAffected,
  SurveyData,
} from "../../components/footer/data-privacy";

const PrivacyPolicy = () => {
  return (
    <FramerMotion>
      <ContentContainer
        maxWidth={1200}
        style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <Flex direction={"column"} gap={"50px"}>
          <PrivacyInfo />
          <SubTitle title={"Datenschutz"} />
          <ContactData />
          <Protocol />
          <SurveyData />
          <Cookies />
          <RightAffected />
        </Flex>
      </ContentContainer>
    </FramerMotion>
  );
};

export default PrivacyPolicy;
