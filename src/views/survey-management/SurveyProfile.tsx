import { useDispatches, useSelectors, useTranslations } from "../../hooks";
import {
  ContentContainer,
  Card,
  FramerMotion,
  Flex,
  SubTitle,
  Divider,
  ButtonContainer,
  SurveyProfileData,
  Title,
  Button,
  RatingInfo,
} from "../../components";
import { useNavigate } from "react-router-dom";
import withSurveyAuthPages from "../../hoc/withSurveyAuthPages";
import DeleteSurveyModal from "../../components/survey/surveys-manager/DeleteSurveyModal";

const SurveyProfile = () => {
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { openModal } = useDispatches();

  const navigate = useNavigate();

  return (
    <ContentContainer>
      <Title title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <DeleteSurveyModal />
          <Flex
            direction={"column"}
            gap={"20px"}
            style={{
              margin: "0 auto",
              maxWidth: "1000px",
            }}>
            <SubTitle title={t("saveSurvey.saveSurvey")} />

            <RatingInfo />

            <SurveyProfileData />

            <Divider />

            <ButtonContainer>
              <Button error onClick={openModal} title={t("button.delete")} />
              <Button
                onClick={() =>
                  navigate(`/surveys-manager/add-pages/${survey?._id}`)
                }
                title={t("button.continue")}
              />
            </ButtonContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default withSurveyAuthPages(SurveyProfile);
