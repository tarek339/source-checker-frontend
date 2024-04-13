import { useTranslations } from "../hooks";
import { IBackButton } from "../types/interfaces/components";

const BackButton = ({ onClick }: IBackButton) => {
  const { t } = useTranslations();

  return (
    <button className="back-button" onClick={onClick}>
      {t("common.back")}
    </button>
  );
};

export default BackButton;
