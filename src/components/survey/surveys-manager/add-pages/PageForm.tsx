import { CancelButton } from "../../..";
import {
  useTranslations,
  useSelectors,
  useDispatches,
} from "../../../../hooks";
import { IPageForm } from "../../../../types/interfaces/components";
import LoadingPulse from "../../../LoadingPulse";
import ButtonContainer from "../../../containers/ButtonContainer";
import FormButton from "../../../form/FormButton";
import FormContainer from "../../../form/FormContainer";
import Input from "../../../form/Input";
import InputMessage from "../../../form/InputMessage";

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

      <ButtonContainer>
        <CancelButton
          onClick={() => {
            closeModal();
          }}
          title={t("button.back")}
        />
        <FormButton
          style={{
            width: "160px",
            height: "37px",
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
