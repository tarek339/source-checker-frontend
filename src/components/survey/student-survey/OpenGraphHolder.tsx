import { IOpenGraphHolder } from "../../../types/interfaces/components";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";
import Span from "../../fonts/Span";
import { useEffect, useState } from "react";

const OpenGraphHolder = ({
  ogTitle,
  ogImage,
  ogDescription,
  url,
}: IOpenGraphHolder) => {
  const [newUrl, setNewUrl] = useState(url);

  function getFirstHalfOfString(url: string) {
    // Get the length of the string
    const length = url.length;
    // Calculate the midpoint
    const midpoint = Math.floor(length / 2);
    // Return the first half of the string
    return url.substring(0, midpoint);
  }

  useEffect(() => {
    const firstHalf = getFirstHalfOfString(url);
    setNewUrl(firstHalf);
  }, [url]);

  return (
    <SubCard>
      <Flex direction={"column"} gap={"10px"} justify="center">
        <SubTitle title={ogTitle} />
        <span>URL: {newUrl.replace(newUrl, newUrl + "...")}</span>
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
