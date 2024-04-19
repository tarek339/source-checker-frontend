import { useState } from "react";
import {
  useDispatches,
  useSelectors,
  useTranslations,
  useBreakPoints,
} from "../../../hooks";
import Modal from "../../parents/containers/Modal";
import FormButton from "../../parents/form/FormButton";
import Input from "../../parents/form/Input";
import InputMessage from "../../parents/form/InputMessage";
import axios from "axios";
import InputErrorContainer from "../../parents/form/InputErrorContainer";
import CancelButton from "../../buttons/CancelButton";

const ModalHolder = () => {
  const { modal, survey } = useSelectors();
  const { closeModal, dispatchSurvey, dispatchLoading, dispatchPages } =
    useDispatches();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [note, setNote] = useState("");
  const [titleErrorMessage, setTitleErrorMessage] =
    useState<JSX.Element | null>(null);
  const [urlErrorMessage, setUrlErrorMessage] = useState<JSX.Element | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      !title ? setTitleErrorMessage(<InputErrorContainer />) : null;
      !url ? setUrlErrorMessage(<InputErrorContainer />) : null;
      if (!title || !url) return;
      dispatchLoading(true);
      const res = await axios.put(`/survey/complete/${survey?.surveyId}`, {
        page: {
          title,
          url,
          note,
        },
      });

      localStorage.setItem("surveyData", JSON.stringify(res.data.survey));
      const surveyDataString = localStorage.getItem("surveyData");
      const surveyData = JSON.parse(surveyDataString!);
      dispatchSurvey(surveyData);
      dispatchPages(surveyData.pages);
      setTitle("");
      setUrl("");
      setNote("");
      dispatchLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isVisible={modal}
      setIsVisible={closeModal}
      style={{ width: windowWidth <= 500 ? "80%" : "500px" }}>
      <div className="modal-content">
        <h3>{t("addPages.createPage")}</h3>
        <form className="form-content" onSubmit={handleSubmit}>
          <Input
            label={t("common.title")}
            name={"tile"}
            htmlFor={"tile"}
            error={titleErrorMessage}
            inputErrorStyle={titleErrorMessage}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleErrorMessage(null);
            }}
          />
          <Input
            label={t("common.url")}
            name={"url"}
            htmlFor={"url"}
            error={urlErrorMessage}
            inputErrorStyle={urlErrorMessage}
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setUrlErrorMessage(null);
            }}
          />
          <InputMessage
            label={t("common.note")}
            name={"note"}
            htmlFor={"note"}
            error={null}
            inputErrorStyle={null}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <div className="button-holder">
            <CancelButton onClick={closeModal} />
            <FormButton />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalHolder;
