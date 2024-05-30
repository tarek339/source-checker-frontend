import { useTranslations } from "./useTranslations";

const style = {
  fontSize: "14px",
  color: "#ff0000",
  paddingLeft: "5px",
};

const useInputErrors = () => {
  const { t } = useTranslations();

  const emptyInput = <div style={style}>{t("input.inputError")}</div>;
  const incorrectType = <div style={style}>{t("input.incorrectType")}</div>;
  const fetchError = <div style={style}>{t("input.fetchError")}</div>;
  const urlTyoeError = <div style={style}>{t("input.urlTypeError")}</div>;

  return {
    emptyInput,
    incorrectType,
    fetchError,
    urlTyoeError,
  };
};

export default useInputErrors;
