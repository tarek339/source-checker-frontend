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
  const fetchIDError = <div style={style}>{t("input.fetchIDError")}</div>;
  const urlTypeError = <div style={style}>{t("input.urlTypeError")}</div>;
  const studentExists = <div style={style}>{t("input.existingStudent")}</div>;

  return {
    emptyInput,
    incorrectType,
    fetchError,
    urlTypeError,
    fetchIDError,
    studentExists,
  };
};

export default useInputErrors;
