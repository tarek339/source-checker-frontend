import { useSelectors, useTranslations } from "../../../hooks";

const FormButton = () => {
  const { t } = useTranslations();
  const { loading } = useSelectors();
  return (
    <button
      disabled={loading ? true : false}
      type="submit"
      className="form-button">
      {t("input.button")}
    </button>
  );
};

export default FormButton;
