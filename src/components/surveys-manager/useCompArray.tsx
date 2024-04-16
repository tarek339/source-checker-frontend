import {
  AddPages,
  ChooseAction,
  ChooseSurvey,
  NewSurvey,
  SaveSurvey,
  Steps,
  SurveyProp,
} from "..";
import { useTranslations } from "../../hooks";
import useSelectors from "../../hooks/useSelectors";
import { Cancel, Check } from "../icons";

const useCompArray = () => {
  const { t } = useTranslations();
  const { page, stepDone, survey } = useSelectors();

  const steps = [
    {
      comp: (
        <Steps
          counter={t("survey.stepOne")}
          text={t("survey.stepOneText")}
          style={{
            color:
              page === 0
                ? "#2834c2"
                : (stepDone && page === 1) ||
                  (stepDone && page === 2) ||
                  (stepDone && page === 3) ||
                  (stepDone && page === 4)
                ? "#16a34a"
                : "darkgray",
          }}
        />
      ),
    },
    {
      comp: (
        <Steps
          counter={t("survey.stepTwo")}
          text={t("survey.stepTwoText")}
          style={{
            color:
              page === 1
                ? "#2834c2"
                : (stepDone && page === 2) ||
                  (stepDone && page === 3) ||
                  (stepDone && page === 4)
                ? "#16a34a"
                : "darkgray",
          }}
        />
      ),
    },
    {
      comp: (
        <Steps
          counter={t("survey.stepThree")}
          text={t("survey.stepThreeText")}
          style={{
            color:
              page === 2
                ? "#2834c2"
                : (stepDone && page === 3) || (stepDone && page === 4)
                ? "#16a34a"
                : "darkgray",
          }}
        />
      ),
    },
    {
      comp: (
        <Steps
          counter={t("survey.stepFour")}
          text={t("survey.stepFourText")}
          style={{
            color:
              page === 3
                ? "#2834c2"
                : stepDone && page === 4
                ? "#16a34a"
                : "darkgray",
          }}
        />
      ),
    },
    {
      comp: (
        <Steps
          counter={t("survey.stepFive")}
          text={t("survey.stepFiveText")}
          style={{
            color:
              page === 4
                ? "#2834c2"
                : stepDone && page === 4
                ? "#16a34a"
                : "darkgray",
          }}
        />
      ),
    },
  ];

  const actionsHolder = [
    {
      comp: <ChooseAction />,
    },
    {
      comp: <ChooseSurvey />,
    },
    {
      comp: <NewSurvey />,
    },
    {
      comp: <SaveSurvey />,
    },
    {
      comp: <AddPages />,
    },
  ];

  const surveysOptions = [
    {
      option: t("newSurvey.rating"),
    },
  ];
  const resultsOptions = [
    {
      option: t("newSurvey.afterSurvey"),
    },
  ];

  const surveyArray = [
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.anonymous")}
          child={
            <span style={{ display: "flex", alignItems: "center" }}>
              {survey?.anonymousResults ? <Check /> : <Cancel />}
            </span>
          }
        />
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("saveSurvey.chooseName")}
          child={
            <span style={{ display: "flex", alignItems: "center" }}>
              {survey?.freeUserNames ? <Check /> : <Cancel />}
            </span>
          }
        />
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.surveyType")}
          child={survey?.selectedSurveysOption}
        />
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.resultsType")}
          child={survey?.selectedResultsOption}
        />
      ),
    },
    {
      comp: (
        <SurveyProp header={t("common.surveyID")} child={survey?.surveyId} />
      ),
    },
    {
      comp: (
        <SurveyProp header={t("common.surveyPIN")} child={survey?.surveyPin} />
      ),
    },
  ];

  return {
    steps,
    actionsHolder,
    surveysOptions,
    resultsOptions,
    surveyArray,
  };
};

export default useCompArray;
