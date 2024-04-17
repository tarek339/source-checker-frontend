import { useTranslations } from "../hooks";
import useDispatches from "../hooks/useDispatches";
import { IBackContinueButton } from "../types/interfaces/components";

const ContinueButton = ({ page }: IBackContinueButton) => {
  const { t } = useTranslations();
  const { handlePage } = useDispatches();

  return (
    <button className="continue-button" onClick={() => handlePage(page)}>
      {t("common.continue")}
    </button>
  );
};

export default ContinueButton;
