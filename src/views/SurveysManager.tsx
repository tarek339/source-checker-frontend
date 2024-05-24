import { useBreakPoints, useTranslations } from "../hooks";
import useSelectors from "../hooks/useSelectors";
import useCompArray from "../components/surveys-manager/useCompArray";

const SurveysManager = () => {
  const { t } = useTranslations();
  const { page, stepDone } = useSelectors();
  const { steps, actionsHolder } = useCompArray();
  const { windowWidth } = useBreakPoints();

  return (
    <div>
      <div className="header">
        <h2>Quellenchecker</h2>
      </div>
      <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
        <div className="card">
          <h2>{t("survey.createSurvey")} </h2>
          <div className="steps-holder">
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
          </div>
          <div className="action-holder">
            {actionsHolder
              .filter((_action, index) => index === page)
              .map((action, index) => {
                return <div key={index}>{action.comp}</div>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveysManager;
