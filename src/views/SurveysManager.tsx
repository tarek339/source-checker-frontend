import { useTranslations } from "../hooks";
import { Card, FramerMotion, Header, SurveyContent } from "../components";

const SurveysManager = () => {
  const { t } = useTranslations();

  return (
    <>
      <Header title={t("common.sourceChecker")} />
      <FramerMotion>
        <SurveyContent>
          <Card>
            <h2>{t("survey.createManagement")}</h2>
          </Card>
        </SurveyContent>
      </FramerMotion>
    </>
  );
};

export default SurveysManager;
