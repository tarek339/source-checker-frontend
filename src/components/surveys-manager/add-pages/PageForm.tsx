import Input from "../../parents/form/Input";
import { useDispatches, useSelectors, useTranslations } from "../../../hooks";
import CancelButton from "../../buttons/CancelButton";
import FormButton from "../../parents/form/FormButton";
import LoadingSpinner from "../../LoadingSpinner";
import InputMessage from "../../parents/form/InputMessage";
import { IPageForm } from "../../../types/interfaces/components";
import FormContainer from "../../parents/form/FormContainer";
import ButtonContainer from "../../parents/containers/ButtonContainer";

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
    <FormContainer onSubmit={onSubmit} gap={"15px"}>
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

      <ButtonContainer style={{ justifyContent: "flex-end" }}>
        <CancelButton
          onClick={() => {
            closeModal();
            closeEditModal();
          }}
          title={t("common.back")}
        />
        <FormButton
          style={{
            width: loading ? "160px" : "",
          }}
          title={
            loading ? (
              <LoadingSpinner fontSize={"21px"} color={"#fff"} />
            ) : (
              t("common.add")
            )
          }
        />
      </ButtonContainer>
    </FormContainer>
  );
};

export default PageForm;
