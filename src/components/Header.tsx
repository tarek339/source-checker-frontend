import { useNavigate } from "react-router-dom";
import { Back, SignOut } from "./icons";
import { useBreakPoints, useSelectors } from "../hooks";
import Title from "./fonts/Title";
import Flex from "./containers/Flex";
import { IHeader } from "../types/interfaces/components";
import { useState } from "react";

const Header = ({ title }: IHeader) => {
  const navigate = useNavigate();
  const { survey, student } = useSelectors();
  const { windowWidth } = useBreakPoints();
  const [onHover, setOnHover] = useState(false);

  return (
    <Flex
      direction={windowWidth >= 425 ? "row" : "column"}
      gap={"0px"}
      width="100%"
      justify={windowWidth >= 425 ? "space-between" : "center"}
      align={windowWidth >= 425 ? "center" : "flex-start"}
      height="75px"
      style={{
        padding: "10px 30px 15px 30px",
        backgroundColor: "#2834c2",
        boxShadow: "rgba(0, 0, 0, 0.239) 0px 3px 8px",
      }}>
      <div
        style={{ cursor: "pointer" }}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onClick={() => navigate("/")}>
        <Title
          style={{
            color: !onHover ? "#fbfcff" : "#31e981",
            letterSpacing: "1px",
            padding: "0px",
            transition: "color 0.2s ease",
          }}
          title={title}
        />
      </div>
      <Flex
        direction={"row-reverse"}
        gap={"15px"}
        align="center"
        justify="center"
        style={{ paddingTop: windowWidth >= 425 ? "10px" : "0px" }}>
        <>
          {location.pathname === "/surveys-manager/choose-action" ||
          location.pathname === "/surveys-manager/choose-survey" ||
          location.pathname === "/surveys-manager/new-survey" ||
          location.pathname === `/register-student/${survey?._id}` ||
          location.pathname ===
            `/student-survey/${survey?._id}/student-id/${student?._id}` ||
          location.pathname === "/student-survey-authentication" ||
          location.pathname === `/survey-ranking/${survey?._id}` ||
          location.pathname === `/survey-summary/${survey?._id}` ||
          location.pathname === `/privacy-policy` ? null : (
            <>
              <div onClick={() => navigate("/surveys-manager/choose-action")}>
                <SignOut />
              </div>

              <div onClick={() => navigate(-1)}>
                {location.pathname ===
                `/surveys-manager/save-survey/${survey?._id}` ? null : (
                  <Back />
                )}
              </div>
            </>
          )}
          {location.pathname === `/survey-summary/${survey?._id}` ||
          location.pathname === `/privacy-policy` ? (
            <div onClick={() => navigate(-1)}>
              <Back />
            </div>
          ) : null}
        </>
      </Flex>
    </Flex>
  );
};

export default Header;
