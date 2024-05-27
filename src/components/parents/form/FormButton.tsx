import { useSelectors } from "../../../hooks";
import { IFormButton } from "../../../types/interfaces/components";

const FormButton = ({ title, style }: IFormButton) => {
  const { loading } = useSelectors();
  return (
    <button
      disabled={loading ? true : false}
      type="submit"
      className="form-button"
      style={{
        ...style,
        boxShadow: loading
          ? ""
          : "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
      }}>
      {title}
    </button>
  );
};

export default FormButton;
