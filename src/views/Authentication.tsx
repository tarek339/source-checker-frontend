import { useNavigate } from "react-router-dom";
import { Footer } from "../components";
import { useTranslations } from "../hooks";

const Authentication = () => {
  const navigate = useNavigate();
  const { t } = useTranslations();

  return (
    <div className="authentication">
      <div className="auth-section">
        <h1>{t("common.sourceChecker")}</h1>
        <h1 style={{ color: "#16a34a" }}>{t("auth.question")}</h1>

        <div className="auth-buttons">
          <button className="teacher-button">{t("auth.studentButton")}</button>
          <button
            className="student-button"
            onClick={() => navigate("/surveys-manager")}>
            {t("auth.teacherButton")}
          </button>
        </div>
        <p>{t("auth.mainText")}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;
