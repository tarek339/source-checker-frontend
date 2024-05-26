import { useEffect, useState } from "react";
import {
  useBreakPoints,
  useDispatches,
  useInputErrors,
  useLocaleStorage,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import PageForm from "./PageForm";
import InputErrorContainer from "../../parents/form/InputErrorContainer";
import axios from "axios";
import Modal from "../../parents/containers/Modal";

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

const EditPage = () => {
  const { survey, loading, singlePage, editModal } = useSelectors();
  const { dispatchLoading, closeEditModal } = useDispatches();
  const { t } = useTranslations();
  const { fetchSurvey } = useLocaleStorage();
  const { urlTyoeError } = useInputErrors();
  const { windowWidth } = useBreakPoints();

  const [title, setTitle] = useState<string>(singlePage?.title!);
  const [url, setUrl] = useState(singlePage?.url!);
  const [note, setNote] = useState(singlePage?.note!);

  const [titleErrorMessage, setTitleErrorMessage] =
    useState<JSX.Element | null>(null);
  const [urlErrorMessage, setUrlErrorMessage] = useState<JSX.Element | null>(
    null
  );
  const [isUrl, setIsUrl] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setTitle(singlePage?.title!);
    setUrl(singlePage?.url!);
    setNote(singlePage?.note!);
  }, [singlePage]);

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
        const res = await axios.put(`/survey/edit-single-page/${survey?._id}`, {
          pageID: singlePage?._id,
          title,
          url,
          note,
        });
        fetchSurvey(res.data.survey);
        dispatchLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isVisible={editModal}
      setIsVisible={closeEditModal}
      style={{ width: windowWidth <= 500 ? "80%" : "500px" }}>
      <div className="modal-content">
        <h3>{t("addPages.editPage")}</h3>
        <PageForm
          onSubmit={handleSubmit}
          titleError={titleErrorMessage}
          urlError={urlErrorMessage ? urlErrorMessage : isUrl}
          inputValue={title ? title : ""}
          textAreaValue={note ? note : ""}
          urlValue={url ? url : ""}
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
      </div>
    </Modal>
  );
};

export default EditPage;
