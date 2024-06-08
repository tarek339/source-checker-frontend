import axios from "axios";
import { useDispatches, useSelectors, useTranslations } from "../hooks";
import { IScreenShot } from "../types/interfaces/components";
import ContButton from "./buttons/ContButton";

const ScreenShot = ({
  title,
  width,
  id,
  isMobileView,
  pageID,
  url,
}: IScreenShot) => {
  const {
    dispatchSideBar,
    incFirstSBPage,
    incLastSBPage,
    dispatchSurvey,
    dispatchPages,
  } = useDispatches();
  const { lastSideBarPages } = useSelectors();
  const { surveyPages } = useSelectors();
  const { t } = useTranslations();

  const chooseView = async () => {
    try {
      const res = await axios.put(`/survey/choose-page-view/${id}`, {
        isMobileView,
        pageID,
        openGraphView: false,
      });
      if (res.data.survey) {
        dispatchSurvey(res.data.survey);
        dispatchPages(res.data.survey.pages);
      }
      if (surveyPages.length !== lastSideBarPages) {
        incFirstSBPage();
        incLastSBPage();
      } else {
        dispatchSideBar(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>{title}</h4>
      <div
        id="capture"
        style={{
          width: width,
          border: "1px solid transparent",
          marginBottom: "10px",
        }}>
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            border: "2px solid #d5d5d5",
            objectFit: "cover",
            objectPosition: "top",
          }}
          src={url}
        />
      </div>
      <ContButton onClick={chooseView} title={t("common.choose")} />
    </div>
  );
};

export default ScreenShot;
