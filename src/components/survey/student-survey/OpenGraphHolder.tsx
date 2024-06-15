import { IOpenGraphHolder } from "../../../types/interfaces/components";
import SubHeader from "../../parents/SubHeader";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";

const OpenGraphHolder = ({
  ogTitle,
  ogImage,
  ogDescription,
}: IOpenGraphHolder) => {
  return (
    <SubCard>
      <Flex direction={"column"} gap={"10px"} justify="center">
        <SubHeader title={ogTitle} />
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src={ogImage}
          alt=""
        />
        <p>{ogDescription}</p>
      </Flex>
    </SubCard>
  );
};

export default OpenGraphHolder;
