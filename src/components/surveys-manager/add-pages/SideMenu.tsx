import SideBar from "../../parents/containers/SideBar";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import { ImCancelCircle } from "react-icons/im";
import ScreenShot from "./ScreenShot";
import Flex from "../../parents/containers/Flex";
import SubHeader from "../../parents/SubHeader";

const SideMenu = () => {
  const { sideBar, survey, surveyPages, firstSideBarPages, lastSideBarPages } =
    useSelectors();
  const { dispatchSideBar } = useDispatches();
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();

  return (
    <SideBar
      isOpen={sideBar}
      style={{
        width:
          sideBar && windowWidth >= 768
            ? "60%"
            : sideBar && windowWidth <= 768
            ? "100%"
            : "0%",
      }}>
      <Flex direction={"row"} gap={"5px"} justify="space-between">
        <SubHeader title={t("addPages.sideBar.header")} />
        <div
          style={{ cursor: "pointer", marginTop: "2px" }}
          onClick={() => dispatchSideBar(false)}>
          <ImCancelCircle fontSize="24px" />
        </div>
      </Flex>
      <>
        {surveyPages
          ?.slice(firstSideBarPages, lastSideBarPages)
          ?.map((page, i) => {
            return (
              <Flex
                key={i}
                direction={windowWidth >= 768 ? "row" : "column"}
                gap={"20px"}
                style={{
                  paddingTop: "20px",
                }}>
                <ScreenShot
                  title={"Mobile"}
                  width={"300.5px"}
                  id={survey?._id}
                  isMobileView={true}
                  pageID={page._id}
                  url={page.mobileScreenshot}
                />
                <ScreenShot
                  title={"Desktop"}
                  width={"600px"}
                  id={survey?._id}
                  isMobileView={false}
                  pageID={page._id}
                  url={page.desktopScreenshot}
                />
              </Flex>
            );
          })}
      </>
    </SideBar>
  );
};

export default SideMenu;
