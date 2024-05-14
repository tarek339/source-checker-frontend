import { useNavigate } from "react-router-dom";
import { Footer } from "../components";
import { useLocaleStorage, useTranslations } from "../hooks";
import { useEffect } from "react";
import imgSrc from "../assets/images/charisse-kenion-cJkVMAKDYl0-unsplash.jpg";

const Authentication = () => {
  const navigate = useNavigate();
  const { t } = useTranslations();
  const { resetStates } = useLocaleStorage();

  useEffect(() => {
    resetStates();
  }, []);

  return (
    <div className="authentication">
      <div className="authentication-container">
        <div className="auth-section-container">
          <div className="auth-section">
            <h1>{t("common.sourceChecker")}</h1>
            <h1 style={{ color: "#2834c2" }}>{t("auth.question")}</h1>

            <div className="auth-buttons">
              <button className="teacher-button">
                {t("auth.studentButton")}
              </button>
              <button
                className="student-button"
                onClick={() => navigate("/surveys-manager")}>
                {t("auth.teacherButton")}
              </button>
            </div>
            <p>{t("auth.mainText")}</p>
          </div>
        </div>

        <div className="authentication-image">
          <img src={imgSrc} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Authentication;
