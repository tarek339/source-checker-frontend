import { ITextArea } from "../../types/interfaces/components";
import Flex from "../containers/Flex";

const InputMessage = ({
  label,
  name,
  htmlFor,
  error,
  hasError,
  value,
  disabled,
  onChange,
}: ITextArea) => {
  return (
    <Flex direction={"column"} gap={"3px"}>
      <label htmlFor={htmlFor}>{label}</label>
      <textarea
        rows={7}
        name={name}
        id={htmlFor}
        style={{
          borderColor: hasError ? "#ff0000" : "",
          boxShadow: hasError ? "0px 0px 0px 1px #ff0000 inset" : "",
        }}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      <>{error}</>
    </Flex>
  );
};

export default InputMessage;
