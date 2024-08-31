import { Button } from "../../..";
import {
  useTranslations,
  useSelectors,
  useDispatches,
} from "../../../../hooks";
import { IPageForm } from "../../../../types/interfaces/components";
import LoadingPulse from "../../../LoadingPulse";
import ButtonContainer from "../../../containers/ButtonContainer";
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
        label={t("common.pageTitle")}
        placeHolder="Titel..."
        name={"title"}
        htmlFor={"title"}
        error={titleError}
        inputErrorStyle={titleError}
        value={inputValue}
        onChange={onChangeTitle}
      />

      <Input
        label={t("common.pageUrl")}
        placeHolder="https://www.beispielwebseite.de/123456..."
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
        <Button
          error
          onClick={() => {
            closeModal();
          }}
          title={t("button.back")}
        />

        <Button
          type="submit"
          disabled={loading ? true : false}
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
