import { useTranslations } from "../../hooks";
import useDispatches from "../../hooks/useDispatches";
import useSelectors from "../../hooks/useSelectors";
import DividerHorizontal from "../DividerHorizontal";
import { Cancel, Check } from "../icons";
import Modal from "../parents/containers/Modal";
import ModalContent from "../parents/containers/ModalContent";

const SaveSurvey = () => {
  const { t } = useTranslations();
  const { survey, modal } = useSelectors();
  const { closeModal, openModal, handlePage } = useDispatches();

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
          gap: "15px",
          margin: "0 auto",
          maxWidth: "400px",
        }}>
        <h3>{t("saveSurvey.saveSurvey")}</h3>

        <div className="survey-props">
          <h4>{t("saveSurvey.chooseName")}</h4>
          {survey?.anunomys ? <Check /> : <Cancel />}
        </div>
        <div className="survey-props">
          <h4>{t("common.surveyID")}</h4>
          <h4>{survey?.surveyId}</h4>
        </div>
        <div className="survey-props">
          <h4>{t("common.surveyPIN")}</h4>
          <h4>{survey?.surveyPin}</h4>
        </div>
        <button className="continue-button" onClick={() => handlePage(+4)}>
          {t("common.continue")}
        </button>
        <DividerHorizontal />
        <button onClick={openModal} className="back-button">
          {t("common.delete")}
        </button>
      </div>
    </>
  );
};

export default SaveSurvey;
