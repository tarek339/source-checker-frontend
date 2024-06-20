import { useNavigate } from "react-router-dom";
import { IHeader } from "../../types/interfaces/components";
import { Back, SignOut } from "../icons";
import { useSelectors } from "../../hooks";

const Header = ({ title }: IHeader) => {
  const navigate = useNavigate();
  const { survey, student } = useSelectors();
  return (
    <div
      style={{
        backgroundColor: "#2834c2",
        width: "100%",
        height: "65px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px 40px 40px 25px",
        boxShadow: "rgba(0, 0, 0, 0.239) 0px 3px 8px",
      }}>
      <h2
        style={{
          color: "#fbfcff",
          letterSpacing: "1px",
        }}>
        {title}
      </h2>
      {location.pathname === "/surveys-manager/choose-action" ||
      location.pathname === "/surveys-manager/choose-survey" ||
      location.pathname === "/surveys-manager/new-survey" ||
      location.pathname === `/register-student/${survey?._id}` ||
      location.pathname ===
        `/student-survey/${survey?._id}/student-id/${student?._id}` ||
      location.pathname === "/student-survey-authentication" ||
      location.pathname === `/survey-summary/${survey?._id}` ? null : (
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}>
          <div onClick={() => navigate("/surveys-manager/choose-action")}>
            <SignOut />
          </div>

          <div onClick={() => history.back()}>
            {location.pathname ===
              `/surveys-manager/save-survey/${survey?._id}` ||
            location.pathname === `/survey-summary/${survey?._id}` ? null : (
              <Back />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
