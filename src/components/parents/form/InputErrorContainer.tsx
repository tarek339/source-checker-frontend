import { useTranslations } from "../../../hooks";

const InputErrorContainer = () => {
  const { t } = useTranslations();

  return (
    <div
      style={{
        fontSize: "14px",
        color: "#ff0000",
        paddingLeft: "5px",
      }}>
      {t("input.inputError")}
    </div>
  );
};

export default InputErrorContainer;
