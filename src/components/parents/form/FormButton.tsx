import { useTranslations } from "../../../hooks";

const FormButton = () => {
  const { t } = useTranslations();
  return (
    <button type="submit" className="form-button">
      {t("input.button")}
    </button>
  );
};

export default FormButton;
