import { useEffect } from "react";
import {
  useDispatches,
  useLocaleStorage,
  useSelectors,
  useTranslations,
} from "../../hooks";
import ContinueButton from "../buttons/ContinueButton";
import DividerHorizontal from "../DividerHorizontal";
import Modal from "../parents/containers/Modal";
import ModalContent from "../parents/containers/ModalContent";
import useCompArray from "./useCompArray";

const SaveSurvey = () => {
  const { t } = useTranslations();
  const { survey, modal } = useSelectors();
  const { closeModal, openModal } = useDispatches();
  const { surveyArray } = useCompArray();
  const { getSurvey } = useLocaleStorage();

  useEffect(() => {
    getSurvey();
  }, []);

  return (
    <>
      <Modal isVisible={modal} setIsVisible={closeModal}>
        <ModalContent
          url={`/survey/delete/${survey?._id}`}
          header={t("common.survey") + " " + "ID:" + " " + survey?.surveyId!}
          localeStorage={"surveyData"}
          page={"page"}
        />
      </Modal>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "0 auto",
          maxWidth: "800px",
        }}>
        <h3>{t("saveSurvey.saveSurvey")}</h3>

        {surveyArray.map((survey, index) => {
          return (
            <div key={index}>
              {survey.comp}
              <div style={{ paddingTop: "21px" }}>
                {index !== surveyArray.length - 1 && <DividerHorizontal />}
              </div>
            </div>
          );
        })}

        <DividerHorizontal />
        <div className="button-container">
          <button onClick={openModal} className="back-button">
            {t("common.delete")}
          </button>
          <ContinueButton page={+4} />
        </div>
      </div>
    </>
  );
};

export default SaveSurvey;
