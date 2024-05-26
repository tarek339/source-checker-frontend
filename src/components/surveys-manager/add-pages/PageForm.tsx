import Input from "../../parents/form/Input";
import { useDispatches, useSelectors, useTranslations } from "../../../hooks";
import CancelButton from "../../buttons/CancelButton";
import FormButton from "../../parents/form/FormButton";
import LoadingSpinner from "../../LoadingSpinner";
import InputMessage from "../../parents/form/InputMessage";
import { IPageForm } from "../../../types/interfaces/components";

const PageForm = ({
  onSubmit,
  titleError,
  urlError,
  inputValue,
  urlValue,
  textAreaValue,
  onChangeTitle,
  onChangeUrl,
  onChangeTextArea,
}: IPageForm) => {
  const { t } = useTranslations();
  const { loading } = useSelectors();
  const { closeModal, closeEditModal } = useDispatches();

  return (
    <form className="form-content" onSubmit={onSubmit}>
      <Input
        label={t("common.title")}
        name={"tile"}
        htmlFor={"tile"}
        error={titleError}
        inputErrorStyle={titleError}
        value={inputValue}
        onChange={onChangeTitle}
      />

      <Input
        label={t("common.url")}
        name={"url"}
        htmlFor={"url"}
        error={urlError}
        inputErrorStyle={urlError}
        value={urlValue}
        onChange={onChangeUrl}
      />

      <InputMessage
        label={t("common.note")}
        name={"note"}
        htmlFor={"note"}
        error={null}
        inputErrorStyle={null}
        value={textAreaValue}
        onChange={onChangeTextArea}
      />

      <div className="button-holder">
        <CancelButton
          onClick={() => {
            closeModal();
            closeEditModal();
          }}
        />
        <FormButton
          style={{
            width: "160px",
            backgroundColor: loading ? "#D5D5D5" : "",
            cursor: loading ? "default" : "pointer",
            transition: "background-color 0.3s",
          }}
          title={
            loading ? (
              <LoadingSpinner fontSize={"21px"} color={"#fff"} />
            ) : (
              t("common.add")
            )
          }
        />
      </div>
    </form>
  );
};

export default PageForm;
