import { IContentContainer } from "../../../types/interfaces/components";

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
        marginTop: !marginTop ? "3em" : `${marginTop}em`,
        ...style,
      }}>
      {children}
    </div>
  );
};

export default ContentContainer;
