import { useEffect } from "react";
import { useDispatches } from "../../hooks";
import {
  FramerMotion,
  ContentContainer,
  Flex,
  SubTitle,
  SurveyData,
} from "../../components";
import {
  PrivacyInfo,
  ContactData,
  Protocol,
  Cookies,
  RightAffected,
} from "../../components/footer/data-privacy";

const PrivacyPolicy = () => {
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, [setMainPage]);

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
