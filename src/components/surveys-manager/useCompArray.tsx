import { useEffect } from "react";
import {
  AddPages,
  ChooseAction,
  ChooseSurvey,
  NewSurvey,
  SaveSurvey,
  Steps,
  SurveyProp,
} from "..";
import { useTranslations, useSelectors, useLocaleStorage } from "../../hooks";
import { Cancel, Check } from "../icons";

const useCompArray = () => {
  const { t } = useTranslations();
  const { page, stepDone, survey } = useSelectors();
  const { setDoneStep } = useLocaleStorage();

  useEffect(() => {
    if (page !== 0) {
      setDoneStep();
    }
  }, [page]);

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
                ? "#f4d35e"
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
                ? "#f4d35e"
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
                ? "#f4d35e"
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
                ? "#f4d35e"
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
                ? "#f4d35e"
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

  const surveryNum = `(${t("common.surveyNumber")} ${survey?.surveyNumber})`;

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
          child={t("newSurvey.rating")}
        />
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.resultsType")}
          child={t("newSurvey.afterSurvey")}
        />
      ),
    },
    {
      comp: (
        <>
          <SurveyProp
            header={t("common.surveyID")}
            child={survey?.surveyId + " " + surveryNum}
          />
          <div className="warning-message">
            <p style={{ color: "#ff0000" }}>
              Umfrage wird nach 7 Tagen automatisch gelöscht.
            </p>
            <p style={{ color: "#ff0000" }}>
              ID und PIN sicher aufbewahren. Zurücksetzen nicht möglich.
            </p>
          </div>
        </>
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
