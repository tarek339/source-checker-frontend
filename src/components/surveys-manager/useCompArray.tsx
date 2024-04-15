import { ChooseAction, ChooseSurvey, NewSurvey, Steps } from "..";
import { useTranslations } from "../../hooks";
import useSelectors from "../../hooks/useSelectors";

const useCompArray = () => {
  const { t } = useTranslations();
  const { page, stepDone } = useSelectors();

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
            color: page === 3 ? "#2834c2" : "darkgray",
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
  ];

  const options = [
    {
      comp: "One",
    },
    {
      comp: "Two",
    },
    {
      comp: "Three",
    },
  ];

  return {
    steps,
    actionsHolder,
    options,
  };
};

export default useCompArray;
