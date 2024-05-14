import { useState } from "react";
import {
  BackButton,
  DividerHorizontal,
  SubmitModal,
  ToggleButton,
} from "../..";
import {
  useDispatches,
  useLocaleStorage,
  useTranslations,
} from "../../../hooks";
import axios from "axios";
import { FaCircleDot } from "react-icons/fa6";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { dispatchLoading, openModal, closeModal } = useDispatches();
  const { createSurvey, setPage } = useLocaleStorage();

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
      createSurvey(res.data.survey);
      dispatchLoading(false);
      setPage(+3);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SubmitModal onSubmit={handleSubmit} />
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
            <h4 style={{ fontSize: "22px" }}>Rating</h4>
            <p style={{ color: "#2835c3" }}>{t("newSurvey.ratingText")}</p>
          </div>
        </div>
        <h3>{t("newSurvey.headerTwo")} </h3>
        <DividerHorizontal />
        <div
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
          <div className="button-container">
            <BackButton page={0} />
            <button
              className="continue-button"
              onClick={openModal}
              type="button">
              {t("common.continue")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSurvey;
