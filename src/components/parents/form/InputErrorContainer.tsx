import { useTranslations } from "../../../hooks";

const InputErrorContainer = () => {
  const { t } = useTranslations();

  return <div className="input-error">{t("input.inputError")}</div>;
};

export default InputErrorContainer;
