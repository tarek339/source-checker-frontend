import { IScreenShotHolder } from "../../../types/interfaces/components";
import Flex from "../../containers/Flex";

const ScreenShotHolder = ({ src }: IScreenShotHolder) => {
  return (
    <Flex direction={"column"} gap={"20px"}>
      <div
        style={{
          height: "80vh",
          overflowY: "scroll",
          zIndex: 1,
          backgroundColor: "#fff",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}>
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src={src}
          alt=""
        />
      </div>
    </Flex>
  );
};

export default ScreenShotHolder;
