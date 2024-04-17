import { useTranslations } from "../../hooks";
import useDispatches from "../../hooks/useDispatches";
import useSelectors from "../../hooks/useSelectors";
import ContinueButton from "../ContinueButton";
import DividerHorizontal from "../DividerHorizontal";
import Modal from "../parents/containers/Modal";
import ModalContent from "../parents/containers/ModalContent";
import useCompArray from "./useCompArray";

const SaveSurvey = () => {
  const { t } = useTranslations();
  const { survey, modal } = useSelectors();
  const { closeModal, openModal } = useDispatches();
  const { surveyArray } = useCompArray();

  return (
    <>
      <Modal isVisible={modal} setIsVisible={closeModal}>
        <ModalContent
          url={"/survey/delete"}
          header={t("common.survey") + " " + survey?.surveyId!}
          localeStorage={"surveyData"}
          id={survey?.surveyId!}
        />
      </Modal>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "0 auto",
        }}>
        <h3>{t("saveSurvey.saveSurvey")}</h3>
        <div className="warning-message">
          <p>Umfrage wird nach 7 Tagen automatisch gelöscht.</p>
          <p>ID und PIN sicher aufbewahren. Zurücksetzen nicht möglich.</p>
        </div>
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
