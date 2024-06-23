import { IOpenGraphHolder } from "../../../types/interfaces/components";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";

const OpenGraphHolder = ({
  ogTitle,
  ogImage,
  ogDescription,
}: IOpenGraphHolder) => {
  return (
    <SubCard>
      <Flex direction={"column"} gap={"10px"} justify="center">
        <SubTitle title={ogTitle} />
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
