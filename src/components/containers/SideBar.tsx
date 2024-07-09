import { Menu, Sidebar } from "react-pro-sidebar";
import { useBreakPoints } from "../../hooks";
import { ISideBar } from "../../types/interfaces/components";

const SideB = ({ children, collapsed, toggled }: ISideBar) => {
  const { windowWidth } = useBreakPoints();

  return (
    <Sidebar
      width="0px"
      collapsedWidth={
        windowWidth >= 1000 && windowWidth <= 1200
          ? "50%"
          : windowWidth >= 700 && windowWidth <= 999
          ? "70%"
          : windowWidth <= 600
          ? "100%"
          : "80%"
      }
      backgroundColor="#fff"
      collapsed={collapsed}
      toggled={toggled}
      transitionDuration={300}
      rootStyles={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: collapsed ? 3 : -1,
        overflow: "hidden",
        height: "100%",
      }}>
      <Menu
        rootStyles={{
          padding: "0px 15px 30px 15px",
        }}>
        {children}
      </Menu>
    </Sidebar>
  );
};

export default SideB;
