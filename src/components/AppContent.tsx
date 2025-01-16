import { useSelectors, useTranslations } from "../hooks";
import { AppContainerProps } from "../types/interfaces/components";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

const AppContent = ({ children }: AppContainerProps) => {
  const { t } = useTranslations();
  const { mainPage } = useSelectors();

  return (
    <div>
      <ScrollToTop />
      {!mainPage && <Header title={t("common.sourceChecker")} />}
      {children}
    </div>
  );
};

export default AppContent;
