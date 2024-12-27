import { useSelectors, useTranslations } from "../hooks";
import { IAppContainer } from "../types/interfaces/components";
import Header from "./Header";

const AppContent = ({ children }: IAppContainer) => {
  const { t } = useTranslations();
  const { mainPage } = useSelectors();

  return (
    <div
      style={{
        marginBottom: "30px",
      }}>
      {!mainPage && <Header title={t("common.sourceChecker")} />}
      {children}
    </div>
  );
};

export default AppContent;
