import { useSelectors } from "../../../hooks";
import { IFormButton } from "../../../types/interfaces/components";

const FormButton = ({ title }: IFormButton) => {
  const { loading } = useSelectors();
  return (
    <button
      disabled={loading ? true : false}
      type="submit"
      className="form-button">
      {title}
    </button>
  );
};

export default FormButton;
