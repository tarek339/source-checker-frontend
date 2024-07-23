import { ISubButton } from "../../types/interfaces/components";
import Flex from "../containers/Flex";

const SubButton = ({ onClick, title, type, width, icon, gap }: ISubButton) => {
  return (
    <button
      style={{
        backgroundColor: "#2835c3",
        color: "#fff",
        borderColor: "transparent",
        borderRadius: "45px",
        padding: "6px 20px",
        cursor: "pointer",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
        fontSize: "18px",
        textTransform: "uppercase",
        fontWeight: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "3px",
        width: width,
      }}
      type={type}
      onClick={onClick}>
      <Flex direction={"row"} gap={gap!} align="center">
        <>
          {icon}
          {title}
        </>
      </Flex>
    </button>
  );
};

export default SubButton;
