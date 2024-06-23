import { IScreenShotHolder } from "../../../types/interfaces/components";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";

const ScreenShotHolder = ({ src }: IScreenShotHolder) => {
  return (
    <Flex direction={"column"} gap={"20px"}>
      <SubCard
        style={{
          height: "80vh",
          overflowY: "scroll",
        }}>
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src={src}
          alt=""
        />
      </SubCard>
    </Flex>
  );
};

export default ScreenShotHolder;
