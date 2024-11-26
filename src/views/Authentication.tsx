import { useNavigate } from "react-router-dom";
import { FramerMotion } from "../components";
import { useDispatches, useTranslations } from "../hooks";
import imgSrc from "../assets/images/title-img.jpg";
import { useEffect } from "react";

const Authentication = () => {
  const navigate = useNavigate();
  const { t } = useTranslations();
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(true);
  }, [setMainPage]);

  return (
    <FramerMotion>
      <div className="authentication">
        <div className="authentication-container">
          <div className="auth-section-container">
            <div className="auth-section">
              <h1>{t("common.sourceChecker")}</h1>
              <h1 style={{ color: "#2834c2" }}>{t("auth.question")}</h1>

              <div className="auth-buttons">
                <button
                  className="student-button"
                  onClick={() => navigate("/student-survey-authentication")}>
                  {t("auth.studentButton")}
                </button>
                <button
                  className="teacher-button"
                  onClick={() => navigate("/surveys-manager/choose-action")}>
                  {t("auth.teacherButton")}
                </button>
              </div>
              <p style={{ fontSize: "21px", fontWeight: 400 }}>
                {t("auth.mainText")}
              </p>
            </div>
          </div>

          <div className="authentication-image">
            <img src={imgSrc} alt="main image" />
          </div>
        </div>
      </div>
    </FramerMotion>
  );
};

export default Authentication;
