import { useDispatch } from "react-redux";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../../hooks";
import SideDrawer from "../../../mui/SideDrawer";
import { useEffect } from "react";
import {
  increaseFirstPage,
  increaseLastPage,
} from "../../../../hooks/redux/slices";
import { IconButton } from "@mui/material";
import { Cancel, Mobile, Desktop, Generate } from "../../../icons";
import OpenGraphView from "../../../OpenGraphView";
import Screenshot from "../../../ScreenShot";
import EmptyData from "./EmptyData";
import Grid from "../../../mui/Grid";
import SubTitle from "../../../SubTitle";

const SideMenu = () => {
  const { sideBar, survey, surveyPages, firstSideBarPages, lastSideBarPages } =
    useSelectors();
  const { dispatchSideBar } = useDispatches();
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedIndex = surveyPages?.findIndex(
      (page) => !page.isSelectedView
    );
    dispatch(increaseFirstPage(selectedIndex));
    dispatch(increaseLastPage(selectedIndex + 1));
  }, [dispatch, surveyPages]);

  return (
    <SideDrawer
      anchor="right"
      open={sideBar}
      toggleDrawer={() => dispatchSideBar(false)}>
      <Grid alignCenter flexStart width={"100%"} nowrap maxedWidth>
        <Grid flexStart alignCenter width={"100%"} maxedWidth>
          <SubTitle title={t("addPages.sideBar.header")} />
          <>
            {surveyPages
              ?.slice(firstSideBarPages, lastSideBarPages)
              .map((page, i) => (
                <SubTitle key={i} title={page.title} />
              ))}
          </>
        </Grid>
        <IconButton onClick={() => dispatchSideBar(false)}>
          <Cancel />
        </IconButton>
      </Grid>

      <div style={{ marginTop: "32px" }}>
        {surveyPages
          ?.slice(firstSideBarPages, lastSideBarPages)
          ?.filter(
            (page) =>
              page.isMobileView === null || page.isOpenGraphView !== false
          )
          ?.map((page) => {
            return (
              <Grid column flexStart key={page._id} spacing={6}>
                {!page.mobileScreenshot ? (
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
                    pageID={page._id}
                    url={page.mobileScreenshot}
                    icon={<Mobile />}
                    gap="3px"
                  />
                )}

                {!page.desktopScreenshot ? (
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
                    pageID={page._id}
                    url={page.desktopScreenshot}
                    icon={<Desktop />}
                    gap="6px"
                  />
                )}

                {!page.openGraph?.ogTitle ||
                !page.openGraph?.ogDescription ||
                !page.openGraph?.ogImage ? (
                  <EmptyData
                    title={
                      "Opengraph-Ansicht konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
                    }
                    height={windowWidth < 500 ? "auto" : "580px"}
                    width={windowWidth < 500 ? "100%" : "450px"}
                  />
                ) : (
                  <OpenGraphView
                    pageID={page._id}
                    openGraphView={true}
                    ogTitle={page.openGraph?.ogTitle}
                    url={page.openGraph?.ogImage
                      ?.map((img: { url: string }) => img.url)
                      .toString()}
                    ogDescription={page.openGraph?.ogDescription}
                    icon={<Generate />}
                    gap={"6px"}
                  />
                )}
              </Grid>
            );
          })}
      </div>
    </SideDrawer>
  );
};

export default SideMenu;
