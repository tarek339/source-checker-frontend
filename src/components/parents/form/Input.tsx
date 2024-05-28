import { IInput } from "../../../types/interfaces/components";
import Flex from "../containers/Flex";

const Input = ({
  label,
  name,
  htmlFor,
  error,
  inputErrorStyle,
  value,
  onChange,
}: IInput) => {
  return (
    <Flex direction={"column"} gap={"3px"}>
      <>
        <label htmlFor={htmlFor}>{label}</label>
        <input
          type="text"
          name={name}
          id={htmlFor}
          style={{
            borderColor: inputErrorStyle ? "#f44336" : "",
            boxShadow: inputErrorStyle ? "0px 0px 0px 1px #f44336 inset" : "",
          }}
          value={value}
          onChange={onChange}
        />
        {error}
      </>
    </Flex>
  );
};

export default Input;
