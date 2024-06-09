import { ISurveyContent } from "../../../types/interfaces/components";

const SurveyContent = ({ children, style, maxWidth }: ISurveyContent) => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: !maxWidth ? "1000px" : `${maxWidth}px`,
        marginTop: "5em",
        ...style,
      }}>
      {children}
    </div>
  );
};

export default SurveyContent;
