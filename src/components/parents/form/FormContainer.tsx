import { IFormContainer } from "../../../types/interfaces/components";

const FormContainer = ({ onSubmit, children, gap, style }: IFormContainer) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: gap,
        ...style,
      }}>
      {children}
    </form>
  );
};

export default FormContainer;
