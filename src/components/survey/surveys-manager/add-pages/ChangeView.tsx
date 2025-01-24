import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelectors, useDispatches, useBreakPoints } from "../../../../hooks";
import { PagesProps } from "../../../../types/interfaces/interfaces";
import { Cancel, Mobile, Desktop, Generate } from "../../../icons";
import OpenGraphView from "../../../OpenGraphView";
import Screenshot from "../../../ScreenShot";
import EmptyData from "./EmptyData";
import Grid from "../../../mui/Grid";
import { ViewsModalProps } from "../../../../types/interfaces/components";
import SubTitle from "../../../SubTitle";
import SideDrawer from "../../../mui/SideDrawer";

const ChangeView = ({ pageId }: ViewsModalProps) => {
  const { changeView, survey, surveyPages } = useSelectors();
  const { dispatchChangeView } = useDispatches();
  const { windowWidth } = useBreakPoints();

  const [filteredPage, setFilteredPage] = useState<PagesProps>();

  useEffect(() => {
    const pageFound = surveyPages?.find(
      (page: PagesProps) => page._id === pageId
    );
    if (pageFound) {
      setFilteredPage(pageFound);
    }
  }, [pageId, surveyPages]);

  return (
    <SideDrawer
      anchor="right"
      open={changeView}
      toggleDrawer={() => dispatchChangeView(false)}>
      <Grid alignCenter flexStart width={"100%"} nowrap maxedWidth>
        <Grid between alignCenter width={"100%"}>
          <SubTitle title={"Neue Ansicht"} />
          <IconButton onClick={() => dispatchChangeView(false)}>
            <Cancel />
          </IconButton>
        </Grid>
      </Grid>

      <div style={{ marginTop: "32px" }}>
        <Grid key={filteredPage?._id} column flexStart spacing={4}>
          {filteredPage?.mobileScreenshot === "" ? (
            <EmptyData
              title="Screenshot konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
              height="580px"
              width="250px"
            />
          ) : (
            <Screenshot
              title="Mobile"
              height="580px"
              width="250px"
              id={survey?._id}
              isMobileView={true}
              pageID={filteredPage?._id ?? ""}
              url={filteredPage?.mobileScreenshot ?? ""}
              icon={<Mobile />}
              gap="3px"
            />
          )}

          {filteredPage?.desktopScreenshot === "" ? (
            <EmptyData
              title="Screenshot konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
              height={windowWidth < 500 ? "auto" : "580px"}
              width={windowWidth < 500 ? "100%" : "450px"}
            />
          ) : (
            <Screenshot
              title="Desktop"
              height={windowWidth < 500 ? "auto" : "580px"}
              width={windowWidth < 500 ? "100%" : "450px"}
              id={survey?._id}
              isMobileView={false}
              pageID={filteredPage?._id ?? ""}
              url={filteredPage?.desktopScreenshot ?? ""}
              icon={<Desktop />}
              gap="6px"
            />
          )}

          {filteredPage?.openGraph?.ogTitle === "" ||
          filteredPage?.openGraph?.ogDescription === "" ? (
            <EmptyData
              title={
                "Opengraph-Ansicht konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
              }
              width={""}
              height={""}
            />
          ) : (
            <OpenGraphView
              pageID={filteredPage?._id ?? ""}
              openGraphView={true}
              ogTitle={filteredPage?.openGraph?.ogTitle ?? ""}
              url={
                filteredPage?.openGraph?.ogImage
                  ?.map((img: { url: string }) => img.url)
                  .toString() ?? ""
              }
              ogDescription={filteredPage?.openGraph?.ogDescription ?? ""}
              icon={<Generate />}
              gap={"6px"}
            />
          )}
        </Grid>
      </div>
    </SideDrawer>
  );
};

export default ChangeView;
