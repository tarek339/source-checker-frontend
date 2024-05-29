import { useTranslations } from "../hooks";
import { ILoadingBar } from "../types/interfaces/components";

const LoadingBar = ({ percent, marginTop, page }: ILoadingBar) => {
  const { t } = useTranslations();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "25px",
          alignItems: "center",
          marginTop: `${marginTop}em`,
          width: "100%",
          backgroundColor: "#d5d5d5",
          height: "20px",
          borderRadius: "45px",
        }}>
        <div
          id="loading-bar"
          style={{
            borderRadius: "45px",
            height: "20px",
            backgroundColor: "#2835c3",
            width: `${percent}%`,
            transition: percent === 0 ? "width 0.2s" : "width 0.4s",
          }}></div>
      </div>
      <h4
        style={{
          textTransform: "uppercase",
          paddingTop: "1em",
          paddingLeft: "20px",
        }}>
        {`${t("common.step")} ${page + 1}/5`}
      </h4>
    </>
  );
};

export default LoadingBar;
