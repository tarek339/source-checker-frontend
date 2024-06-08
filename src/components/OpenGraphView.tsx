import axios from "axios";
import { useDispatches, useSelectors, useTranslations } from "../hooks";
import Flex from "./parents/containers/Flex";
import ContButton from "./buttons/ContButton";
import { IOpenGraphView } from "../types/interfaces/components";

const OpenGraphView = ({
  pageID,
  openGraphView,
  ogTitle,
  url,
  ogDescription,
}: IOpenGraphView) => {
  const { survey, surveyPages, lastSideBarPages } = useSelectors();
  const {
    dispatchSurvey,
    dispatchPages,
    incFirstSBPage,
    incLastSBPage,
    dispatchSideBar,
  } = useDispatches();
  const { t } = useTranslations();

  const chooseView = async () => {
    try {
      const res = await axios.put(`/survey/choose-page-view/${survey?._id}`, {
        pageID,
        openGraphView,
        isMobileView: null,
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
    <Flex direction={"column"} gap={"20px"}>
      <>
        <h4>Open Graph View</h4>
        <div>
          <h3>{ogTitle}</h3>
          <img style={{ maxWidth: "100%", height: "auto" }} src={url} alt="" />
          <p>{ogDescription}</p>
        </div>
      </>
      <ContButton onClick={chooseView} title={t("common.choose")} />
    </Flex>
  );
};

export default OpenGraphView;
