import { FramerMotion, SubTitle, Grid } from "../../components";
import {
  PrivacyInfo,
  ContactData,
  Protocol,
  Cookies,
  RightAffected,
  SurveyData,
  Session,
} from "../../components/footer/data-privacy";

const PrivacyPolicy = () => {
  return (
    <FramerMotion>
      <Grid spacing={4} column gutters>
        <PrivacyInfo />
        <SubTitle title={"Datenschutz"} />
        <ContactData />
        <Protocol />
        <SurveyData />
        <Cookies />
        <Session />
        <RightAffected />
      </Grid>
    </FramerMotion>
  );
};

export default PrivacyPolicy;
