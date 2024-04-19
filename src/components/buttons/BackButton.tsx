import { useLocaleStorage, useTranslations } from "../../hooks";
import { IBackContinueButton } from "../../types/interfaces/components";

const BackButton = ({ page }: IBackContinueButton) => {
  const { t } = useTranslations();
  const { setPage } = useLocaleStorage();

  return (
    <button className="back-button" onClick={() => setPage(page)}>
      {t("common.back")}
    </button>
  );
};

export default BackButton;
