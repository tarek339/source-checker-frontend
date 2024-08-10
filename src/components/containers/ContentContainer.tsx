import { IContentContainer } from "../../types/interfaces/components";

const ContentContainer = ({
  children,
  style,
  maxWidth,
  marginTop,
}: IContentContainer) => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: !maxWidth ? "1000px" : `${maxWidth}px`,
        width: "100%",
        marginTop: !marginTop ? "3em" : `${marginTop}em`,
        marginBottom: "30px",
        ...style,
      }}>
      {children}
    </div>
  );
};

export default ContentContainer;
