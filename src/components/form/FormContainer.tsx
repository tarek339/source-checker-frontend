import { IFormContainer } from "../../types/interfaces/components";

const FormContainer = ({
  onSubmit,
  children,
  gap,
  style,
  maxWidth,
  margin,
  paddingTop,
}: IFormContainer) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: gap,
        maxWidth: `${maxWidth}px`,
        margin: margin,
        paddingTop: paddingTop,
        ...style,
      }}>
      {children}
    </form>
  );
};

export default FormContainer;
