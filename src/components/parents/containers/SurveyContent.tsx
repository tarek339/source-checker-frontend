import { ISurveyContent } from "../../../types/interfaces/components";

const SurveyContent = ({ children, style }: ISurveyContent) => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "1000px",
        ...style,
      }}>
      {children}
    </div>
  );
};

export default SurveyContent;
