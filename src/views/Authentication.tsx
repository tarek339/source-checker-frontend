import { useNavigate } from "react-router-dom";
import { FramerMotion, StudentButton, TeacherButton } from "../components";
import { useDispatches, useTranslations } from "../hooks";
import imgSrc from "../assets/images/title-img.jpg";
import { useEffect } from "react";
import withUnAuthPages from "../hoc/withUnAuthPages";

import { colors } from "../assets/theme/colors";

const Authentication = () => {
  const navigate = useNavigate();
  const { t } = useTranslations();
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(true);
  }, []);

  return (
    <FramerMotion>
      <div className="authentication">
        <div className="authentication-container">
          <div className="auth-section-container">
            <div className="auth-section">
              <h1>{t("common.sourceChecker")}</h1>
              <h1 style={{ color: colors.primary.main }}>
                {t("auth.question")}
              </h1>
              <div className="auth-buttons">
                <StudentButton
                  title={t("auth.studentButton")}
                  onClick={() => {
                    setMainPage(false);
                    navigate("/student-survey-authentication");
                  }}
                />
                <TeacherButton
                  title={t("auth.teacherButton")}
                  onClick={() => {
                    setMainPage(false);
                    navigate("/surveys-manager/authentication");
                  }}
                />
              </div>
              <p style={{ fontSize: "1.25rem" }}>{t("auth.mainText")}</p>

              <a
                className="lernportal-link"
                href="https://portal.hoou.de/"
                target="_blank"
                rel="noreferrer">
                Lernportal
              </a>
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

export default withUnAuthPages(Authentication);
