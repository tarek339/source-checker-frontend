import { useTranslations } from "../hooks";
import useSelectors from "../hooks/useSelectors";
import useCompArray from "../components/surveys-manager/useCompArray";
import { Card, Header, LoadingBar, SurveyContent } from "../components";
import { useEffect, useState } from "react";

const SurveysManager = () => {
  const { t } = useTranslations();
  const { page } = useSelectors();
  const { actionsHolder } = useCompArray();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    switch (page) {
      case 0:
        setPercent(0);
        break;
      case 1:
        setPercent(25);
        break;
      case 2:
        setPercent(50);
        break;
      case 3:
        setPercent(75);
        break;
      case 4:
        setPercent(100);
        break;
      default:
        0;
    }
  }, [page]);

  return (
    <div>
      <Header title={t("common.sourceChecker")} />
      <SurveyContent>
        <Card>
          <h2>{t("survey.createManagement")}</h2>
          <LoadingBar percent={percent} marginTop={2} page={page} />
          {/* <div className="steps-holder">
            {steps.map((step, index) => {
              return (
                <div
                  className="steps"
                  style={{
                    transition: "border-top 0.2s",
                    borderLeft:
                      windowWidth < 768
                        ? `4px solid ${
                            page === index
                              ? "#2834c2"
                              : stepDone && page === index + 1
                              ? "#2834c2"
                              : stepDone && page === index + 2
                              ? "#2834c2"
                              : stepDone && page === index + 3
                              ? "#2834c2"
                              : stepDone && page === index + 4
                              ? "#2834c2"
                              : "#D5D5D5"
                          }`
                        : "transparent",
                    borderTop:
                      windowWidth >= 768
                        ? `4px solid ${
                            page === index
                              ? "#2834c2"
                              : stepDone && page === index + 1
                              ? "#2834c2"
                              : stepDone && page === index + 2
                              ? "#2834c2"
                              : stepDone && page === index + 3
                              ? "#2834c2"
                              : stepDone && page === index + 4
                              ? "#2834c2"
                              : "#D5D5D5"
                          }`
                        : "transparent",
                  }}
                  key={index}>
                  {step.comp}
                </div>
              );
            })}
          </div> */}
          <div
            style={{
              margin: "2em auto",
              maxWidth: "800px",
            }}>
            {actionsHolder
              .filter((_action, index) => index === page)
              .map((action, index) => {
                return <div key={index}>{action.comp}</div>;
              })}
          </div>
        </Card>
      </SurveyContent>
    </div>
  );
};

export default SurveysManager;
