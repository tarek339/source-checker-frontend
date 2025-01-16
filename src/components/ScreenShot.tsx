import axios from "axios";
import { useDispatches, useSelectors } from "../hooks";
import { ScreenShotProps } from "../types/interfaces/components";
import { Button, Grid } from ".";
import { colors } from "../assets/theme/colors";

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
}: ScreenShotProps) => {
  const { dispatchSideBar, dispatchChangeView, dispatchSurvey, dispatchPages } =
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
    <Grid column width={"100%"}>
      <Grid flexStart width={"100%"}>
        <Button
          gap={gap!}
          startIcon={icon}
          onClick={chooseView}
          title={title}
        />
      </Grid>
      <div
        id="capture"
        style={{
          width: width,
          height: height,
          border: "none",
          marginBottom: "10px",
        }}>
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            border: `1.5px solid ${colors.border.secondary}`,
            objectFit: "cover",
            objectPosition: "top",
          }}
          src={url}
        />
      </div>
    </Grid>
  );
};

export default Screenshot;
