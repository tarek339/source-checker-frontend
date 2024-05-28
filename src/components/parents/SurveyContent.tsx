import { ISurveyContent } from "../../types/interfaces/components";

const SurveyContent = ({ children, style }: ISurveyContent) => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "1200px",
        marginTop: "5em",
        ...style,
      }}>
      {children}
    </div>
  );
};

export default SurveyContent;
