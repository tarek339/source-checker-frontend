import { useTranslations } from "../../hooks";
import { ICancelButton } from "../../types/interfaces/components";

const CancelButton = ({ onClick }: ICancelButton) => {
  const { t } = useTranslations();

  return (
    <button type="button" className="back-button" onClick={onClick}>
      {t("common.cancel")}
    </button>
  );
};

export default CancelButton;
