import { ChangeEvent, useState } from "react";
import axios from "axios";
import PageForm from "./PageForm";
import PageModal from "./PageModal";
import {
  useSelectors,
  useDispatches,
  useTranslations,
  useInputErrors,
} from "../../../../hooks";

const combinedUrlRegex = /^(https:\/\/|http:\/\/|www\.)[^\s/$.?#].[^\s]*$/;

const AddPage = () => {
  const { survey, loading } = useSelectors();
  const { dispatchLoading, dispatchPages, closeModal, dispatchSurvey } =
    useDispatches();
  const { t } = useTranslations();
  const { urlTypeError, emptyInput } = useInputErrors();

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

        // empty validation
        if (!url && !title) {
          setTitleErrorMessage(emptyInput);
          setUrlErrorMessage(emptyInput);
          return;
        }
        if (!title) {
          setTitleErrorMessage(emptyInput);
          return;
        }
        if (!url) {
          setUrlErrorMessage(emptyInput);
          return;
        }
        // url validation
        if (!url.match(combinedUrlRegex)) {
          setIsUrl(urlTypeError);
          return;
        }
        dispatchLoading(true);
        const res = await axios.put(`/survey/complete/${survey?.surveyId}`, {
          page: {
            title,
            url,
            note,
          },
        });
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
        titleError={titleErrorMessage}
        urlError={urlErrorMessage ? urlErrorMessage : isUrl}
        inputValue={title}
        urlValue={url}
        textAreaValue={note}
        onChangeTitle={(e: ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
          setTitleErrorMessage(null);
        }}
        onChangeUrl={(e: ChangeEvent<HTMLInputElement>) => {
          setUrl(e.target.value);
          setUrlErrorMessage(null);
          setIsUrl(null);
        }}
        onChangeTextArea={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setNote(e.target.value)
        }
        onClickTitleIcon={() => {
          setTitle("");
          setTitleErrorMessage(null);
        }}
        onClickUrlIcon={() => {
          setUrl("");
          setUrlErrorMessage(null);
          setIsUrl(null);
        }}
      />
    </PageModal>
  );
};

export default AddPage;
