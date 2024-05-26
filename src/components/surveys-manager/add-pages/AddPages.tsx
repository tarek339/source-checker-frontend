import { useEffect, useState } from "react";
import {
  useBreakPoints,
  useDispatches,
  useLocaleStorage,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import BackButton from "../../buttons/BackButton";
import DividerHorizontal from "../../DividerHorizontal";
import NoPages from "./NoPages";
import PagesHolder from "./PagesHolder";
import { useNavigate } from "react-router-dom";
import AddPage from "./AddPage";

const AddPages = () => {
  const { openModal, dispatchSideBar, handlePage } = useDispatches();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey, surveyPages } = useSelectors();
  const { getSurvey } = useLocaleStorage();
  const navigate = useNavigate();
  const [viewsSelected, setViewsSelected] = useState(false);

  useEffect(() => {
    getSurvey();
  }, []);

  useEffect(() => {
    surveyPages?.find((element) => {
      if (element.isMobileView != null) {
        setViewsSelected(true);
      } else setViewsSelected(false);
    });
  }, [surveyPages]);

  useEffect(() => {
    if (survey && survey?.pages && survey?.pages?.length < 1) {
      setViewsSelected(false);
    }
  }, [viewsSelected, survey]);

  return (
    <>
      <AddPage />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "25px",
          maxWidth: "700px",
          margin: "0 auto",
          position: "relative",
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

        <div className="buttons">
          <BackButton page={3} />
          {!viewsSelected &&
          survey &&
          survey?.pages &&
          survey?.pages?.length > 0 ? (
            <button
              onClick={() => {
                survey && survey?.pages && survey?.pages?.length > 0
                  ? dispatchSideBar(true)
                  : null;
              }}
              className="continue-button">
              {t("common.chooseView")}
            </button>
          ) : viewsSelected ? (
            <div className="views-selected-buttons">
              <button
                onClick={() => {
                  navigate("/survey-summary");
                }}
                className="continue-button">
                {t("addPages.shareSurvey")}
              </button>
              <button onClick={() => handlePage(0)} className="back-button">
                {t("common.finish")}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AddPages;
