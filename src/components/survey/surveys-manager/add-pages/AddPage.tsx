import { ChangeEvent, useState } from "react";
import axios from "axios";
import PageForm from "./PageForm";
import PageModal from "./PageModal";
import {
  useSelectors,
  useDispatches,
  useTranslations,
} from "../../../../hooks";

const combinedUrlRegex = /^(https:\/\/|http:\/\/|www\.)[^\s/$.?#].[^\s]*$/;

const AddPage = () => {
  const { survey, loading } = useSelectors();
  const { dispatchLoading, dispatchPages, closeModal, dispatchSurvey } =
    useDispatches();
  const { t } = useTranslations();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [note, setNote] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [urlErrorMessage, setUrlErrorMessage] = useState("");
  const [isUrl, setIsUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      if (!loading) {
        e.preventDefault();
        if (!title) {
          setTitleError(true);
          setTitleErrorMessage("Pflichtfeld");
        }
        if (!url) {
          setUrlError(true);
          setUrlErrorMessage("Pflichtfeld");
        }
        if (!url.match(combinedUrlRegex)) {
          setUrlError(true);
          setIsUrl("Ungültige URL");
          return;
        }
        if (!url && !title) return;
        if (!url || !title) return;

        dispatchLoading(true);
        const res = await axios.put(
          `/survey/add-page-to-survey/${survey?.surveyId}`,
          {
            page: {
              title,
              url,
              note,
            },
          }
        );
        dispatchPages(res.data.survey.pages);
        dispatchSurvey(res.data.survey);
        setTitle("");
        setUrl("");
        setNote("");
        closeModal();
        dispatchLoading(false);
      }
    } catch (error) {
      console.log(error);
      dispatchLoading(false);
      setTitle("");
      setUrl("");
      setNote("");
    }
  };

  return (
    <PageModal title={t("addPages.createPage")}>
      <PageForm
        onSubmit={handleSubmit}
        titleErrorMessage={titleErrorMessage}
        titleError={titleError}
        urlErrorMessage={urlErrorMessage ? urlErrorMessage : isUrl}
        urlError={urlError}
        inputValue={title}
        urlValue={url}
        textAreaValue={note}
        onChangeTitle={(e: ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
          setTitleError(false);
          setTitleErrorMessage("");
        }}
        onChangeUrl={(e: ChangeEvent<HTMLInputElement>) => {
          setUrl(e.target.value);
          setUrlError(false);
          setUrlErrorMessage("");
          setIsUrl("");
        }}
        onChangeTextArea={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setNote(e.target.value)
        }
        onClickTitleIcon={() => {
          setTitle("");
          setTitleError(false);
          setTitleErrorMessage("");
        }}
        onClickUrlIcon={() => {
          setUrl("");
          setUrlError(false);
          setUrlErrorMessage("");
          setIsUrl("");
        }}
      />
    </PageModal>
  );
};

export default AddPage;
