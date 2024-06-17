import { ImCancelCircle } from "react-icons/im";
import {
  useSelectors,
  useDispatches,
  useBreakPoints,
  useTranslations,
} from "../../../../hooks";
import OpenGraphView from "../../../OpenGraphView";
import ScreenShot from "../../../ScreenShot";
import SubHeader from "../../../parents/SubHeader";
import Flex from "../../../parents/containers/Flex";
import SideBar from "../../../parents/containers/SideBar";

const SideMenu = () => {
  const { sideBar, survey, surveyPages, firstSideBarPages, lastSideBarPages } =
    useSelectors();
  const { dispatchSideBar } = useDispatches();
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();

  return (
    <SideBar collapsed={sideBar} toggled={sideBar}>
      <Flex
        direction={"row"}
        gap={"5px"}
        justify="space-between"
        align="center">
        <SubHeader title={t("addPages.sideBar.header")} />
        <div
          style={{ cursor: "pointer", paddingTop: "23px" }}
          onClick={() => dispatchSideBar(false)}>
          <ImCancelCircle fontSize="28px" />
        </div>
      </Flex>
      <>
        {surveyPages
          ?.slice(firstSideBarPages, lastSideBarPages)
          ?.map((page) => {
            return (
              <Flex
                key={page._id}
                direction={windowWidth >= 768 ? "row" : "column"}
                gap={"20px"}
                style={{
                  paddingTop: "20px",
                }}>
                <ScreenShot
                  title={"Mobile"}
                  width={
                    windowWidth >= 767 && windowWidth <= 1250
                      ? "200px"
                      : "250px"
                  }
                  id={survey?._id}
                  isMobileView={true}
                  pageID={page._id}
                  url={page.mobileScreenshot}
                />
                <ScreenShot
                  title={"Desktop"}
                  width={
                    windowWidth >= 767 && windowWidth <= 1250
                      ? "400px"
                      : "450px"
                  }
                  id={survey?._id}
                  isMobileView={false}
                  pageID={page._id}
                  url={page.desktopScreenshot}
                />
                <OpenGraphView
                  pageID={page._id}
                  openGraphView={true}
                  ogTitle={page.openGraph?.ogTitle}
                  url={page.openGraph?.ogImage.map(
                    (img: { url: string }) => img.url
                  )}
                  ogDescription={page.openGraph?.ogDescription}
                />
              </Flex>
            );
          })}
      </>
    </SideBar>
  );
};

export default SideMenu;
