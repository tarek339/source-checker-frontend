import { OpenGraphHolderProps } from "../../../types/interfaces/components";
import { useEffect, useState } from "react";
import Grid from "../../mui/Grid";
import SubTitle from "../../mui/SubTitle";
import Text from "../../mui/Text";
import { Card } from "../..";

const OpenGraphHolder = ({
  ogTitle,
  ogImage,
  ogDescription,
  url,
}: OpenGraphHolderProps) => {
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
    <Card>
      <Grid column center>
        <SubTitle title={ogTitle} />
        <Text text={`URL: ${newUrl.replace(newUrl, newUrl + "...")}`} />
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src={ogImage as string}
          alt=""
        />
        <Text text={ogDescription} />
      </Grid>
    </Card>
  );
};

export default OpenGraphHolder;
