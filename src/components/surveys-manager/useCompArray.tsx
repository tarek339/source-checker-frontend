import { useEffect, useState } from "react";
import {
  AddPages,
  ChooseAction,
  ChooseSurvey,
  LoadingSpinner,
  NewSurvey,
  SaveSurvey,
  Steps,
  SurveyProp,
} from "..";
import { useTranslations, useSelectors, useLocaleStorage } from "../../hooks";
import { No, Yes } from "../icons";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const useCompArray = () => {
  const { t } = useTranslations();
  const { page, stepDone, survey, loading } = useSelectors();
  const { setDoneStep } = useLocaleStorage();

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    let id = `ID: ${survey?.surveyId}`;
    let pin = `PIN: ${survey?.surveyPin}`;
    let input = document.createElement("input");
    input.value = `${id}, ${pin}`;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

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
                ? "#2834c2"
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
                ? "#2834c2"
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
                ? "#2834c2"
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
                ? "#2834c2"
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
                ? "#2834c2"
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
      comp: (
        <>
          {loading ? (
            <LoadingSpinner fontSize={"64px"} color={"#D5D5D5"} />
          ) : (
            <SaveSurvey />
          )}
        </>
      ),
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
            <div style={{ display: "flex", alignItems: "center" }}>
              {survey?.anonymousResults ? <Yes /> : <No />}
            </div>
          }
        />
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("saveSurvey.chooseName")}
          child={
            <div style={{ display: "flex", alignItems: "center" }}>
              {survey?.freeUserNames ? <Yes /> : <No />}
            </div>
          }
        />
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.surveyType")}
          child={<p>{t("newSurvey.rating")}</p>}
        />
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.resultsType")}
          child={<p>{t("newSurvey.rating")}</p>}
        />
      ),
    },
    {
      comp: (
        <>
          <SurveyProp
            header={t("common.surveyID")}
            secondChild={
              copied ? (
                <FaCheck style={{ fontSize: "20px" }} />
              ) : (
                <FaRegCopy
                  onClick={copyToClipboard}
                  style={{
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
              )
            }
            child={<p>{survey?.surveyId}</p>}
          />
          <div>
            <p style={{ color: "#ff0000", fontSize: "16px" }}>
              {t("saveSurvey.info")}
            </p>
            <p style={{ color: "#ff0000", fontSize: "16px" }}>
              {t("saveSurvey.secondInfo")}
            </p>
          </div>
        </>
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("common.surveyPIN")}
          child={<p>{survey?.surveyPin}</p>}
        />
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
