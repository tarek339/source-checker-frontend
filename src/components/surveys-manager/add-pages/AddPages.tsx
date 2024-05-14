import { useEffect } from "react";
import {
  useBreakPoints,
  useDispatches,
  useLocaleStorage,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import BackButton from "../../buttons/BackButton";
import ContinueButton from "../../buttons/ContinueButton";
import DividerHorizontal from "../../DividerHorizontal";
import ModalHolder from "./ModalHolder";
import NoPages from "./NoPages";
import PagesHolder from "./PagesHolder";

const AddPages = () => {
  const { openModal } = useDispatches();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey } = useSelectors();
  const { getSurvey } = useLocaleStorage();

  useEffect(() => {
    getSurvey();
  }, []);

  return (
    <>
      <ModalHolder />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "25px",
          maxWidth: "700px",
          margin: "0 auto",
        }}>
        <h3>{t("addPages.header")}</h3>

        {survey && survey?.pages && survey?.pages?.length > 0 ? (
          <PagesHolder />
        ) : (
          <NoPages />
        )}

        <div className="add-pages-holder">
          <h3>
            {windowWidth <= 375
              ? t("addPages.addPagesXs")
              : t("addPages.addPages")}
          </h3>
          <button className="add-page-button" onClick={openModal}>
            {t("addPages.button")}
          </button>
        </div>

        <DividerHorizontal />

        <div className="button-container">
          <BackButton page={3} />
          <ContinueButton page={4} />
        </div>
      </div>
    </>
  );
};

export default AddPages;
