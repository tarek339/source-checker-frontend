import axios from "axios";
import { useDispatches, useSelectors } from "../hooks";
import Flex from "./containers/Flex";
import { IOpenGraphView } from "../types/interfaces/components";
import { Button } from ".";

const OpenGraphView = ({
  pageID,
  openGraphView,
  ogTitle,
  url,
  ogDescription,
  gap,
  icon,
}: IOpenGraphView) => {
  const { survey, surveyPages, lastSideBarPages } = useSelectors();
  const {
    dispatchSurvey,
    dispatchPages,
    incFirstSBPage,
    incLastSBPage,
    dispatchSideBar,
  } = useDispatches();

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
    <Flex
      direction={"column"}
      gap={"15px"}
      style={{ height: "600px", maxWidth: "600px" }}>
      <Flex direction={"row"} gap={""} justify="flex-start">
        <Button
          gap={gap!}
          icon={icon}
          onClick={chooseView}
          title={"Open-Graph"}
        />
      </Flex>
      <div>
        <h3>{ogTitle}</h3>
        <img style={{ maxWidth: "100%", height: "auto" }} src={url} alt="" />
        <p>{ogDescription}</p>
      </div>
    </Flex>
  );
};

export default OpenGraphView;
