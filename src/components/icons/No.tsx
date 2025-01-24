import { useTranslations } from "../../hooks";

const No = () => {
  const { t } = useTranslations();
  return (
    <div
      style={{
        fontFamily: "Work Sans, Helvetica, Arial, Lucida Grande, sans-serif",
        backgroundColor: "#ff0000",
        color: "#FBFCFF",
        borderRadius: "4px",
        fontSize: "20px",
        fontWeight: "bold",
        textTransform: "uppercase",
        width: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {t("common.no")}
    </div>
  );
};

export default No;
