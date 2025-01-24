import { useTranslations } from "../../hooks";

const Yes = () => {
  const { t } = useTranslations();
  return (
    <div
      style={{
        fontFamily: "Work Sans, Helvetica, Arial, Lucida Grande, sans-serif",
        backgroundColor: "#2834c2",
        color: "#31e981",
        borderRadius: "4px",
        fontSize: "20px",
        fontWeight: "bold",
        textTransform: "uppercase",
        width: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {t("common.yes")}
    </div>
  );
};

export default Yes;
