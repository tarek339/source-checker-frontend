import { useSelectors } from "../../../hooks";
import { IFormButton } from "../../../types/interfaces/components";

const FormButton = ({ title, style }: IFormButton) => {
  const { loading } = useSelectors();
  return (
    <button
      disabled={loading ? true : false}
      type="submit"
      className="form-button"
      style={style}>
      {title}
    </button>
  );
};

export default FormButton;
