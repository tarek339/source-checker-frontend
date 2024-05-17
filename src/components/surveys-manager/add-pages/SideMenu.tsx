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
  const { sideBar } = useSelectors();
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

      <div
        style={{
          paddingTop: "20px",
          display: "flex",
          flexDirection: windowWidth >= 768 ? "row" : "column",
          // justifyContent: "space-between",
          gap: windowWidth <= 768 ? "20px" : "20px",
        }}>
        <ScreenShot
          title={"Mobile"}
          image={""}
          onClick={undefined}
          width={"212.5px"}
        />
        <ScreenShot
          title={"Desktop"}
          image={""}
          onClick={undefined}
          width={"450px"}
        />
      </div>
    </SideBar>
  );
};

export default SideMenu;
