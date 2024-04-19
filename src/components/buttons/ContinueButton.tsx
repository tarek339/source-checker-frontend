import { useLocaleStorage, useTranslations } from "../../hooks";
import { IBackContinueButton } from "../../types/interfaces/components";

const ContinueButton = ({ page }: IBackContinueButton) => {
  const { t } = useTranslations();
  const { setPage } = useLocaleStorage();

  return (
    <button className="continue-button" onClick={() => setPage(page)}>
      {t("common.continue")}
    </button>
  );
};

export default ContinueButton;
