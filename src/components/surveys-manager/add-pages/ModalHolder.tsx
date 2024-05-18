import { useState } from "react";
import {
  useDispatches,
  useSelectors,
  useTranslations,
  useBreakPoints,
  useLocaleStorage,
  useInputErrors,
} from "../../../hooks";
import Modal from "../../parents/containers/Modal";
import FormButton from "../../parents/form/FormButton";
import Input from "../../parents/form/Input";
import InputMessage from "../../parents/form/InputMessage";
import axios from "axios";
import InputErrorContainer from "../../parents/form/InputErrorContainer";
import CancelButton from "../../buttons/CancelButton";

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

const ModalHolder = () => {
  const { modal, survey } = useSelectors();
  const { closeModal, dispatchLoading } = useDispatches();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { fetchSurvey } = useLocaleStorage();
  const { urlTyoeError } = useInputErrors();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [note, setNote] = useState("");
  const [titleErrorMessage, setTitleErrorMessage] =
    useState<JSX.Element | null>(null);
  const [urlErrorMessage, setUrlErrorMessage] = useState<JSX.Element | null>(
    null
  );
  const [isUrl, setIsUrl] = useState<JSX.Element | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      !title ? setTitleErrorMessage(<InputErrorContainer />) : null;
      !url ? setUrlErrorMessage(<InputErrorContainer />) : null;
      if (!url.match(urlRegex)) {
        setIsUrl(urlTyoeError);
      }
      if (!title || !url || !url.match(urlRegex)) return;
      dispatchLoading(true);
      const res = await axios.put(`/survey/complete/${survey?.surveyId}`, {
        page: {
          title,
          // url: `https://12ft.io/${url}`,
          url,
          note,
        },
      });
      fetchSurvey(res.data.survey);

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
            error={urlErrorMessage ? urlErrorMessage : isUrl}
            inputErrorStyle={urlErrorMessage ? urlErrorMessage : isUrl}
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setUrlErrorMessage(null);
              setIsUrl(null);
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
            <FormButton title={t("common.add")} />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalHolder;
