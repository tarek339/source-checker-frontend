import { useEffect } from "react";
import { useDispatches } from "../../hooks";
import { FramerMotion, ContentContainer, Title, Flex } from "../../components";
import GeneralInfo from "./GeneralInfo";
import MIT from "./MIT";
import Apache from "./Apache";
import ApacheTwo from "./ApacheTwo";
import ISC from "./ISC";
import "./table.css";

const LicenseNotes = () => {
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, []);

  return (
    <FramerMotion>
      <ContentContainer maxWidth={1200}>
        <Title
          title={
            "License Information for this website and used icons on this website"
          }
        />
        <Flex style={{ paddingLeft: "20px" }} direction={"column"} gap={"30px"}>
          <GeneralInfo />
          <MIT />
          <Apache />
          <ApacheTwo />
          <ISC />
        </Flex>
      </ContentContainer>
    </FramerMotion>
  );
};

export default LicenseNotes;
