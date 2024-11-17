import axios from "axios";
import { useDispatches, useSelectors } from "../hooks";
import { IScreenShot } from "../types/interfaces/components";
import Flex from "./containers/Flex";
import { Button } from ".";

const Screenshot = ({
  title,
  width,
  id,
  isMobileView,
  pageID,
  url,
  height,
  icon,
  gap,
}: IScreenShot) => {
  const { dispatchSideBar, dispatchSurvey, dispatchPages, closeViewsModal } =
    useDispatches();
  const { lastSideBarPages } = useSelectors();
  const { surveyPages } = useSelectors();

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
        closeViewsModal();
      }
      if (surveyPages.length === lastSideBarPages) {
        dispatchSideBar(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex direction={"column"} gap={"20px"}>
      <Flex direction={"row"} justify="flex-start">
        <Button gap={gap!} icon={icon} onClick={chooseView} title={title} />
      </Flex>
      <div
        id="capture"
        style={{
          width: width,
          height: height,
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
    </Flex>
  );
};

export default Screenshot;
