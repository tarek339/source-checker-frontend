import Flex from "../../parents/containers/Flex";
import FramerMotion from "../../parents/containers/FramerMotion";
import SubCard from "../../parents/containers/SubCard";

const Acknowledgement = () => {
  return (
    <FramerMotion>
      <Flex direction={"column"} gap={"20px"} align="center" justify="center">
        <SubCard
          style={{ marginTop: "1em", marginLeft: "20px", marginRight: "20px" }}>
          <>HIHIHIHIHHIHI</>
        </SubCard>
      </Flex>
    </FramerMotion>
  );
};

export default Acknowledgement;
