import { IInput } from "../../types/interfaces/components";
import Flex from "../containers/Flex";

const Input = ({
  type,
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
          type={!type ? "text" : type}
          name={name}
          id={htmlFor}
          style={{
            borderColor: inputErrorStyle ? "#ff0000" : "",
            boxShadow: inputErrorStyle ? "0px 0px 0px 1px #ff0000 inset" : "",
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
