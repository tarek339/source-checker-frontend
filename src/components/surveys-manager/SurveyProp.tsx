import { ISurveyProp } from "../../types/interfaces/interfaces";

const SurveyProp = ({ header, child, secondChild }: ISurveyProp) => {
  return (
    <div className="survey-props">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",

          gap: "5px",
        }}>
        <h4>{header}</h4>
        <div style={{ paddingTop: "3px" }}>{secondChild}</div>
      </div>
      <div>{child}</div>
    </div>
  );
};

export default SurveyProp;
