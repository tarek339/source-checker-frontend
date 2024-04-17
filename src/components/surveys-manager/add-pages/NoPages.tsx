import { useTranslations } from "../../../hooks";

const NoPages = () => {
  const { t } = useTranslations();

  return (
    <div className="no-pages">
      <h3>{t("addPages.notiHeader")}</h3>
      <p>{t("addPages.notiText")}</p>
    </div>
  );
};

export default NoPages;
