import SideBar from "../../parents/containers/SideBar";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import { ImCancelCircle } from "react-icons/im";
import ScreenShot from "./ScreenShot";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
        }}>
        <h3>{t("addPages.sideBar.header")}</h3>
        <div
          style={{ cursor: "pointer", marginTop: "2px" }}
          onClick={() => dispatchSideBar(false)}>
          <ImCancelCircle fontSize="24px" />
        </div>
      </div>
      <>
        {surveyPages
          ?.slice(firstSideBarPages, lastSideBarPages)
          ?.map((page, i) => {
            return (
              <div
                key={i}
                style={{
                  paddingTop: "20px",
                  display: "flex",
                  flexDirection: windowWidth >= 768 ? "row" : "column",
                  gap: windowWidth <= 768 ? "20px" : "20px",
                }}>
                <p>{page.title}</p>

                <ScreenShot
                  title={"Mobile"}
                  width={"300.5px"}
                  id={survey?._id}
                  isMobileView={true}
                  pageID={page._id}
                  url={page.url}
                />
                <ScreenShot
                  title={"Desktop"}
                  width={"600px"}
                  id={survey?._id}
                  isMobileView={false}
                  pageID={page._id}
                  url={page.url}
                />
              </div>
            );
          })}
      </>
    </SideBar>
  );
};

export default SideMenu;
