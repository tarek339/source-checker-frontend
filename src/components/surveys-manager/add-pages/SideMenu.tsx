import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import { ImCancelCircle } from "react-icons/im";
import Flex from "../../parents/containers/Flex";
import SubHeader from "../../parents/SubHeader";
import SideBar from "../../parents/containers/SideBar";
import ScreenShot from "../../ScreenShot";
import OpenGraphView from "../../OpenGraphView";

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
                  width={"250px"}
                  id={survey?._id}
                  isMobileView={true}
                  pageID={page._id}
                  url={page.mobileScreenshot}
                />
                <ScreenShot
                  title={"Desktop"}
                  width={"450px"}
                  id={survey?._id}
                  isMobileView={false}
                  pageID={page._id}
                  url={page.desktopScreenshot}
                />
                <OpenGraphView
                  pageID={page._id}
                  openGraphView={true}
                  ogTitle={page.openGraph.ogTitle}
                  url={page.openGraph.ogImage?.map(
                    (img: { url: string }) => img.url
                  )}
                  ogDescription={page.openGraph.ogDescription}
                />
              </Flex>
            );
          })}
      </>
    </SideBar>
  );
};

export default SideMenu;
