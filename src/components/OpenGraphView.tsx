import axios from "axios";
import { useDispatches, useSelectors, useTranslations } from "../hooks";
import Flex from "./parents/containers/Flex";
import { IOpenGraphView } from "../types/interfaces/components";
import { ContButton } from ".";

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
    <Flex direction={"column"} gap={"20px"} style={{ height: "600px" }}>
      <>
        <h4>Open-Graph</h4>
        <div>
          <h3>{ogTitle}</h3>
          <img style={{ maxWidth: "100%", height: "auto" }} src={url} alt="" />
          <p>{ogDescription}</p>
        </div>
      </>
      <Flex direction={"row"} gap={""} justify="flex-start">
        <ContButton onClick={chooseView} title={t("button.choose")} />
      </Flex>
    </Flex>
  );
};

export default OpenGraphView;
