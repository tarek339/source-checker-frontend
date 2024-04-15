import { useState } from "react";
import { BackButton, DividerHorizontal, FormButton, ToggleButton } from "..";
import { useTranslations } from "../../hooks";
import useDispatches from "../../hooks/useDispatches";
import axios from "axios";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { handlePage, dispatchSurvey } = useDispatches();

  const [anunomys, setAnunomys] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post("/survey/create", {
      anunomys,
    });
    localStorage.setItem("surveyData", JSON.stringify(res.data.survey));
    const surveyDataString = localStorage.getItem("surveyData");
    const surveyData = JSON.parse(surveyDataString!);
    dispatchSurvey(surveyData);
    handlePage(+3);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        margin: "0 auto",
        maxWidth: "300px",
      }}>
      <h3>{t("newSurvey.header")} </h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}>
        <ToggleButton
          label={t("newSurvey.anonymous")}
          isOn={anunomys}
          handleToggle={() => setAnunomys(!anunomys)}
          ifOnText={t("newSurvey.yes")}
          ifOffText={t("newSurvey.no")}
        />

        <FormButton />
        <DividerHorizontal />
        <BackButton onClick={() => handlePage(0)} />
      </form>
    </div>
  );
};

export default NewSurvey;
