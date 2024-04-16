import { ISurveyProp } from "../../types/interfaces/interfaces";

const SurveyProp = ({ header, child }: ISurveyProp) => {
  return (
    <div className="survey-props">
      <h4>{header}</h4>
      <p>{child}</p>
    </div>
  );
};

export default SurveyProp;
