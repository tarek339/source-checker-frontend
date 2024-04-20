import { useTranslations } from "./useTranslations";

const useInputErrors = () => {
  const { t } = useTranslations();

  const emptyInput = <div className="input-error">{t("input.inputError")}</div>;
  const incorrectType = <div className="input-error">incorrect type</div>;
  const fetchError = (
    <div className="input-error">Falsche ID oder falscher PIN</div>
  );

  return {
    emptyInput,
    incorrectType,
    fetchError,
  };
};

export default useInputErrors;
