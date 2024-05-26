import { useState } from "react";
import {
  useDispatches,
  useSelectors,
  useTranslations,
  useLocaleStorage,
  useInputErrors,
} from "../../../hooks";
import axios from "axios";
import InputErrorContainer from "../../parents/form/InputErrorContainer";
import PageForm from "./PageForm";
import PageModal from "./PageModal";

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

const AddPage = () => {
  const { survey, loading } = useSelectors();
  const { dispatchLoading } = useDispatches();
  const { t } = useTranslations();
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
      if (!loading) {
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
            url,
            note,
          },
        });
        fetchSurvey(res.data.survey);
        setTitle("");
        setUrl("");
        setNote("");
        dispatchLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageModal title={t("addPages.createPage")}>
      <PageForm
        onSubmit={handleSubmit}
        titleError={titleErrorMessage}
        urlError={urlErrorMessage ? urlErrorMessage : isUrl}
        inputValue={title}
        urlValue={url}
        textAreaValue={note}
        onChangeTitle={(e) => {
          setTitle(e.target.value);
          setTitleErrorMessage(null);
        }}
        onChangeUrl={(e) => {
          setUrl(e.target.value);
          setUrlErrorMessage(null);
          setIsUrl(null);
        }}
        onChangeTextArea={(e) => setNote(e.target.value)}
      />
    </PageModal>
  );
};

export default AddPage;
