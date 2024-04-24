import { useEffect, useState } from "react";
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
import { FaRegCopy } from "react-icons/fa";

const SaveSurvey = () => {
  const { t } = useTranslations();
  const { survey, modal } = useSelectors();
  const { closeModal, openModal } = useDispatches();
  const { surveyArray } = useCompArray();
  const { getSurvey } = useLocaleStorage();

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    let num = `NUM: ${survey?.surveyNumber}`;
    let id = `ID: ${survey?.surveyId}`;
    let pin = `PIN: ${survey?.surveyPin}`;
    let input = document.createElement("input");
    input.value = `${num}, ${id}, ${pin}`;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  useEffect(() => {
    getSurvey();
  }, []);

  return (
    <>
      <Modal isVisible={modal} setIsVisible={closeModal}>
        <ModalContent
          url={`/survey/delete/${survey?._id}`}
          header={t("common.survey") + " " + survey?.surveyId!}
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
        <div className="warning-message">
          <p>Umfrage wird nach 7 Tagen automatisch gelöscht.</p>
          <p>ID und PIN sicher aufbewahren. Zurücksetzen nicht möglich.</p>
        </div>

        <div className="copy-data" onClick={copyToClipboard}>
          <FaRegCopy /> <span>{copied ? "Copied" : "ID/PIN"}</span>
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
