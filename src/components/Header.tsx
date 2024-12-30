import { useNavigate } from "react-router-dom";
import { useBreakPoints } from "../hooks";
import Title from "./fonts/Title";
import Flex from "./containers/Flex";
import { IHeader } from "../types/interfaces/components";
import { useState } from "react";
import { Home } from "./icons";

const Header = ({ title }: IHeader) => {
  const navigate = useNavigate();
  const { windowWidth } = useBreakPoints();
  const [onHover, setOnHover] = useState(false);

  return (
    <Flex
      direction={windowWidth >= 425 ? "row" : "column"}
      width="100%"
      justify={windowWidth >= 425 ? "space-between" : "center"}
      align={windowWidth >= 425 ? "center" : "flex-start"}
      height="75px"
      style={{
        padding: "10px 30px 15px 30px",
        backgroundColor: "#2834c2",
        boxShadow: "rgba(0, 0, 0, 0.239) 0px 3px 8px",
      }}>
      <Flex
        direction={"row"}
        justify="flex-start"
        align="center"
        style={{ cursor: "pointer" }}
        gap="5px">
        <Flex
          direction="row"
          gap="3px"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={() => {
            sessionStorage.removeItem("token");
            navigate("/");
          }}>
          <Home color={!onHover ? "#fbfcff" : "#31e981"} />
          <Title
            style={{
              color: !onHover ? "#fbfcff" : "#31e981",
              letterSpacing: "1px",
              padding: "0px",
              transition: "color 0.2s ease",
            }}
            title={title}
          />
        </Flex>
      </Flex>
      <Flex
        direction={"row-reverse"}
        gap={"15px"}
        align="center"
        justify="center"
        style={{ paddingTop: windowWidth >= 425 ? "10px" : "0px" }}>
        <></>
      </Flex>
    </Flex>
  );
};

export default Header;
