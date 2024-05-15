import { useTranslations } from "../../hooks";
import { IChooseButton } from "../../types/interfaces/components";

const ChooseButton = ({ onClick }: IChooseButton) => {
  const { t } = useTranslations();

  return (
    <button className="continue-button" onClick={onClick}>
      {t("common.choose")}
    </button>
  );
};

export default ChooseButton;
