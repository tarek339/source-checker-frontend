import { ISideBar } from "../../../types/interfaces/components";

const SideBar = ({ children, style, isOpen }: ISideBar) => {
  return (
    <div
      id="sideBar"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        height: isOpen ? "100%" : "0%",
        width: isOpen ? "100%" : "0%",
        position: "fixed",
        overflow: "hidden",
        background: "rgb(169, 169, 169, 0.25)",
        backdropFilter: "blur(2px)",
        zIndex: 3,
        display: isOpen ? "flex" : "",
        justifyContent: "flex-end",
        top: 0,
        left: 0,
      }}>
      <div
        style={{
          backgroundColor: "#fff",
          height: "100%",
          transition: "width 0.2s ease-in-out",
          zIndex: 2,
          padding: "20px",
          top: 0,
          right: 0,
          ...style,
        }}>
        {children}
      </div>
    </div>
  );
};

export default SideBar;
