import { useNavigate } from "react-router-dom";
import { FramerMotion, StudentButton, Text, Title } from "../components";
import { useDispatches, useTranslations } from "../hooks";
import imgSrc from "../assets/images/title-img.jpg";
import { useEffect } from "react";
import withUnAuthPages from "../hoc/withUnAuthPages";
import TeacherButton from "../components/buttons/TeacherButton";
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
              <Title variant="h1" title={t("common.sourceChecker")} />
              <Title
                variant="h1"
                title={t("auth.question")}
                color={colors.primary.main}
              />

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
              <Text body2 text={t("auth.mainText")} />
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
