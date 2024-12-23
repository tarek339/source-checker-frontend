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
  titleIcon,
  urlIcon,
  onChangeTitle,
  onChangeUrl,
  onChangeTextArea,
  onClickTitleIcon,
  onClickUrlIcon,
}: IPageForm) => {
  const { t } = useTranslations();
  const { loading } = useSelectors();
  const { closeModal } = useDispatches();

  return (
    <FormContainer onSubmit={onSubmit} gap={"15px"}>
      <Input
        label={`${t("common.pageTitle")}*`}
        placeHolder="Titel..."
        name={"title"}
        htmlFor={"title"}
        error={titleError}
        hasError={titleError}
        value={inputValue}
        disabled={loading ? true : false}
        icon={titleIcon}
        onChange={onChangeTitle}
        onClickIcon={onClickTitleIcon}
      />

      <Input
        label={`${t("common.pageUrl")}*`}
        placeHolder="https://www.beispielwebseite.de/123456..."
        name={"url"}
        htmlFor={"url"}
        error={urlError}
        hasError={urlError}
        value={urlValue}
        disabled={loading ? true : false}
        icon={urlIcon}
        onChange={onChangeUrl}
        onClickIcon={onClickUrlIcon}
      />

      <InputMessage
        label={t("common.note")}
        name={"note"}
        htmlFor={"note"}
        error={null}
        hasError={null}
        value={textAreaValue}
        disabled={loading ? true : false}
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
