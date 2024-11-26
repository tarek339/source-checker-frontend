import { useEffect } from "react";
import { ContentContainer, Flex, FramerMotion, SubTitle } from "../components";
import { useDispatches } from "../hooks";
import {
  ContactData,
  Cookies,
  PrivacyInfo,
  Protocol,
  RightAffected,
  SurveyData,
} from "../components/footer/data-privacy";

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
