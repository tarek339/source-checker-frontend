import { FormProps } from "../../types/interfaces/components";
import Grid from "../mui/Grid";

const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid column>{children}</Grid>
    </form>
  );
};

export default Form;
