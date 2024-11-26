import { ImCancelCircle } from "react-icons/im";
import {
  useSelectors,
  useDispatches,
  useBreakPoints,
  useTranslations,
} from "../../../../hooks";
import OpenGraphView from "../../../OpenGraphView";
import SubTitle from "../../../fonts/SubTitle";
import Flex from "../../../containers/Flex";
import SideBar from "../../../containers/SideBar";
import { Desktop, Generate, Mobile } from "../../../icons";
import EmptyData from "./EmptyData";
import Screenshot from "../../../ScreenShot";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  increaseFirstPage,
  increaseLastPage,
} from "../../../../hooks/redux/slices";

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
    <SideBar collapsed={sideBar} toggled={sideBar}>
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

        <div
          style={{ cursor: "pointer", paddingTop: "23px" }}
          onClick={() => dispatchSideBar(false)}>
          <ImCancelCircle fontSize="28px" />
        </div>
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
                    url={
                      page.openGraph.ogImage.map(
                        (img: { url: string }) => img.url
                      ) as unknown as string
                    }
                    ogDescription={page.openGraph?.ogDescription}
                    icon={<Generate />}
                    gap={"6px"}
                  />
                )}
              </Flex>
            );
          })}
      </>
    </SideBar>
  );
};

export default SideMenu;
