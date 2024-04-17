import { useTranslations } from "../hooks";
import useDispatches from "../hooks/useDispatches";
import { IBackContinueButton } from "../types/interfaces/components";

const BackButton = ({ page }: IBackContinueButton) => {
  const { t } = useTranslations();
  const { handlePage } = useDispatches();

  return (
    <button className="back-button" onClick={() => handlePage(page)}>
      {t("common.back")}
    </button>
  );
};

export default BackButton;
