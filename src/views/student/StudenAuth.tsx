import { useState } from "react";
import { FormButton, Input } from "../../components";
import { useBreakPoints, useTranslations } from "../../hooks";
import axios from "axios";

const StudenAuth = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const [surveyID, setSurveyID] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/survey/students-survey", surveyID);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="header">
        <h2>Quellchecker: Traust du dem?</h2>
      </div>
      <div className="auth-holder">
        <div className="student-card">
          <h3>{t("chooseSurvey.surveyData")}</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "400px",
              margin: "0 auto",
              paddingTop: "2em",
            }}>
            <Input
              label={t("common.surveyID")}
              name={"surveyID"}
              htmlFor={"surveyID"}
              error={null}
              inputErrorStyle={null}
              value={surveyID}
              onChange={(e) => setSurveyID(e.target.value)}
            />
            {windowWidth > 425 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  width: "100%",
                }}>
                <FormButton title={t("common.callUp")} />
              </div>
            ) : (
              <FormButton title={t("common.callUp")} />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudenAuth;
