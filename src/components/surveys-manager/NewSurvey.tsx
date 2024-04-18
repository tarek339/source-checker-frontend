import { useState } from "react";
import { BackButton, DividerHorizontal, FormButton, ToggleButton } from "..";
import { useDispatches, useTranslations } from "../../hooks";
import axios from "axios";
import { FaCircleDot } from "react-icons/fa6";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { handlePage, dispatchSurvey, dispatchLoading } = useDispatches();

  const [anonymousResults, setAnonymousResults] = useState(false);
  const [freeUserNames, setFreeUserNames] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      dispatchLoading(true);
      const res = await axios.post("/survey/create", {
        anonymousResults,
        freeUserNames,
      });
      localStorage.setItem("surveyData", JSON.stringify(res.data.survey));
      const surveyDataString = localStorage.getItem("surveyData");
      const surveyData = JSON.parse(surveyDataString!);
      dispatchSurvey(surveyData);
      dispatchLoading(false);
      handlePage(+3);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        margin: "0 auto",
      }}>
      <h3>{t("newSurvey.headerOne")} </h3>
      <DividerHorizontal />
      <div className="rating-container">
        <div className="icon-holder">
          <FaCircleDot />
        </div>
        <div>
          <h4>Rating</h4>
          <p>{t("newSurvey.ratingText")}</p>
        </div>
      </div>
      <h3>{t("newSurvey.headerTwo")} </h3>
      <DividerHorizontal />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}>
        <ToggleButton
          label={t("newSurvey.freeNames")}
          labelText={t("newSurvey.labelTextOne")}
          isOn={freeUserNames}
          handleToggle={() => setFreeUserNames(!freeUserNames)}
          ifOnText={t("newSurvey.yes")}
          ifOffText={t("newSurvey.no")}
          htmlFor={"user-names"}
        />
        <ToggleButton
          label={t("newSurvey.anonymous")}
          labelText={t("newSurvey.labelTextTwo")}
          isOn={anonymousResults}
          handleToggle={() => setAnonymousResults(!anonymousResults)}
          ifOnText={t("newSurvey.yes")}
          ifOffText={t("newSurvey.no")}
          htmlFor={"anonymous"}
        />

        <DividerHorizontal />
        <div className="button-holder">
          <BackButton page={0} />
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default NewSurvey;
