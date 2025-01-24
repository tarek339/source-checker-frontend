import axios from "axios";
import { useDispatches, useSelectors } from "../hooks";
import { OpenGraphViewProps } from "../types/interfaces/components";
import { Button, Grid, SubTitle, Text } from ".";

const OpenGraphView = ({
  pageID,
  openGraphView,
  ogTitle,
  url,
  ogDescription,
  gap,
  icon,
}: OpenGraphViewProps) => {
  const { survey, surveyPages, lastSideBarPages } = useSelectors();
  const { dispatchSurvey, dispatchChangeView, dispatchPages, dispatchSideBar } =
    useDispatches();

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
        dispatchChangeView(false);
      }
      if (surveyPages.length === lastSideBarPages) {
        dispatchSideBar(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid column maxHeight={600} maxWidth={600} nowrap>
      <Grid flexStart width={"100%"}>
        <Button
          gap={gap!}
          startIcon={icon}
          onClick={chooseView}
          title={"Open-Graph"}
        />
      </Grid>
      <div>
        <SubTitle title={ogTitle} />
        <img style={{ maxWidth: "100%", height: "auto" }} src={url} alt="" />
        <Text text={ogDescription} />
      </div>
    </Grid>
  );
};

export default OpenGraphView;
