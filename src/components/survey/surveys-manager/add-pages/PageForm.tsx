import { Button, Form, Grid, Input } from "../../..";
import { colors } from "../../../../assets/theme/colors";
import {
  useTranslations,
  useSelectors,
  useDispatches,
  useBreakPoints,
} from "../../../../hooks";
import { PageFormProps } from "../../../../types/interfaces/components";
import LoadingPulse from "../../../LoadingPulse";
import TextArea from "../../../form/TextArea";

const PageForm = ({
  onSubmit,
  titleError,
  titleErrorMessage,
  urlError,
  urlErrorMessage,
  inputValue,
  urlValue,
  textAreaValue,
  onChangeTitle,
  onChangeUrl,
  onChangeTextArea,
  onClickTitleIcon,
  onClickUrlIcon,
}: PageFormProps) => {
  const { t } = useTranslations();
  const { loading } = useSelectors();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();

  return (
    <Form onSubmit={onSubmit}>
      <Input
        htmlFor={"title"}
        label={`${t("common.pageTitle")}*`}
        palceholder="Titel"
        error={titleError}
        value={inputValue}
        onChange={onChangeTitle}
        onClear={onClickTitleIcon}
        errorMessage={titleErrorMessage}
      />

      <Input
        htmlFor={"url"}
        label={`${t("common.pageUrl")}*`}
        palceholder="https://wwww.example.com"
        error={urlError}
        value={urlValue}
        disabled={loading ? true : false}
        onChange={onChangeUrl}
        onClear={onClickUrlIcon}
        errorMessage={urlErrorMessage}
      />

      <TextArea
        label={"Notizen"}
        htmlFor={"note"}
        value={textAreaValue}
        disabled={loading ? true : false}
        onChange={onChangeTextArea}
      />

      <Grid
        spacing={1}
        width={"100%"}
        between
        direction={windowWidth <= 500 ? "column-reverse" : "row"}>
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
              <LoadingPulse color={colors.button.main} size={10} />
            ) : (
              t("button.add")
            )
          }
          style={{
            backgroundColor: loading
              ? colors.button.disabled
              : colors.primary.main,
            color: loading ? colors.button.secondary : colors.button.main,
            boxShadow: loading ? "none" : "",
          }}
        />
      </Grid>
    </Form>
  );
};

export default PageForm;
