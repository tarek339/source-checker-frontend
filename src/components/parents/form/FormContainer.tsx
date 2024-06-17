import { IFormContainer } from "../../../types/interfaces/components";

const FormContainer = ({
  onSubmit,
  children,
  gap,
  style,
  maxWidth,
}: IFormContainer) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: gap,
        maxWidth: `${maxWidth}px`,
        margin: "0 auto",
        paddingTop: "2em",
        ...style,
      }}>
      {children}
    </form>
  );
};

export default FormContainer;
