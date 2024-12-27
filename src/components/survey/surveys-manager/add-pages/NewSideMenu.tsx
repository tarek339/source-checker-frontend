import { useDispatch } from "react-redux";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../../hooks";
import SideDrawer from "../../../containers/SideDrawer";
import { useEffect } from "react";
import {
  increaseFirstPage,
  increaseLastPage,
} from "../../../../hooks/redux/slices";
import { IconButton } from "@mui/material";
import Flex from "../../../containers/Flex";
import SubTitle from "../../../fonts/SubTitle";
import { Cancel, Mobile, Desktop, Generate } from "../../../icons";
import OpenGraphView from "../../../OpenGraphView";
import Screenshot from "../../../ScreenShot";
import EmptyData from "./EmptyData";

const NewSideMenu = () => {
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
      <Flex
        direction={"row"}
        gap={"5px"}
        justify="space-between"
        align="center">
        <Flex direction={"row"} gap={"10px"} align="center">
          <SubTitle title={t("addPages.sideBar.header")} />
          <SubTitle
            title={`${lastSideBarPages.toString()}/${surveyPages?.length}`}
          />
        </Flex>
        <IconButton>
          <Cancel onClick={() => dispatchSideBar(false)} />
        </IconButton>
      </Flex>
      <>
        {surveyPages
          ?.slice(firstSideBarPages, lastSideBarPages)
          ?.filter(
            (page) =>
              page.isMobileView === null || page.isOpenGraphView !== false
          )
          ?.map((page) => {
            return (
              <Flex
                key={page._id}
                direction={windowWidth > 1200 ? "row" : "column"}
                gap={"20px"}
                style={{
                  paddingTop: "20px",
                }}>
                {page.mobileScreenshot === "" ? (
                  <EmptyData
                    title={
                      "Screenshot konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
                    }
                    width={
                      windowWidth >= 768 && windowWidth <= 1250
                        ? "200px"
                        : "250px"
                    }
                    height={"580px"}
                  />
                ) : (
                  <Screenshot
                    title={"Mobile"}
                    height={"580px"}
                    width={
                      windowWidth >= 768 && windowWidth <= 1250
                        ? "200px"
                        : "250px"
                    }
                    id={survey?._id}
                    isMobileView={true}
                    pageID={page._id}
                    url={page.mobileScreenshot}
                    icon={<Mobile />}
                    gap="3px"
                  />
                )}

                {page.desktopScreenshot === "" ? (
                  <EmptyData
                    title={
                      "Screenshot konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
                    }
                    width={
                      windowWidth >= 768 && windowWidth <= 1250
                        ? "400px"
                        : windowWidth < 500
                        ? "100%"
                        : "450px"
                    }
                    height={windowWidth < 500 ? "auto" : "580px"}
                  />
                ) : (
                  <Screenshot
                    title={"Desktop"}
                    height={windowWidth < 500 ? "auto" : "580px"}
                    width={
                      windowWidth >= 768 && windowWidth <= 1250
                        ? "400px"
                        : windowWidth < 500
                        ? "100%"
                        : "450px"
                    }
                    id={survey?._id}
                    isMobileView={false}
                    pageID={page._id}
                    url={page.desktopScreenshot}
                    icon={<Desktop />}
                    gap="6px"
                  />
                )}

                {page.openGraph?.ogTitle === "" ||
                page.openGraph?.ogDescription === "" ? (
                  <EmptyData
                    title={
                      "Opengraph-Ansicht konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
                    }
                    width={""}
                    height={""}
                  />
                ) : (
                  <OpenGraphView
                    pageID={page._id}
                    openGraphView={true}
                    ogTitle={page.openGraph?.ogTitle}
                    url={page.openGraph.ogImage
                      ?.map((img: { url: string }) => img.url)
                      .toString()}
                    ogDescription={page.openGraph?.ogDescription}
                    icon={<Generate />}
                    gap={"6px"}
                  />
                )}
              </Flex>
            );
          })}
      </>
    </SideDrawer>
  );
};

export default NewSideMenu;
