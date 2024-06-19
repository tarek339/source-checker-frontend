import {
  useTranslations,
  useSelectors,
  useDispatches,
} from "../../../../hooks";
import { IPageForm } from "../../../../types/interfaces/components";
import LoadingPulse from "../../../LoadingPulse";
import CancelButton from "../../../buttons/CancelButton";
import ButtonContainer from "../../../parents/containers/ButtonContainer";
import FormButton from "../../../parents/form/FormButton";
import FormContainer from "../../../parents/form/FormContainer";
import Input from "../../../parents/form/Input";
import InputMessage from "../../../parents/form/InputMessage";

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
  const { closeModal } = useDispatches();

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
          }}
          title={t("button.back")}
        />
        <FormButton
          style={{
            width: loading ? "160px" : "",
            height: loading ? "37px" : "",
          }}
          title={
            loading ? (
              <LoadingPulse color={"#fff"} size={10} />
            ) : (
              t("button.add")
            )
          }
        />
      </ButtonContainer>
    </FormContainer>
  );
};

export default PageForm;
