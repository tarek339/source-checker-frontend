import { ISurveyContent } from "../../../types/interfaces/components";

const AppContent = ({ children, style }: ISurveyContent) => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "1000px",
        marginTop: "4em",
        ...style,
      }}>
      {children}
    </div>
  );
};

export default AppContent;
