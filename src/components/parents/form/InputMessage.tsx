import { ITextArea } from "../../../types/interfaces/components";
import Flex from "../containers/Flex";

const InputMessage = ({
  label,
  name,
  htmlFor,
  error,
  inputErrorStyle,
  value,
  onChange,
}: ITextArea) => {
  return (
    <Flex direction={"column"} gap={"3px"}>
      <>
        <label htmlFor={htmlFor}>{label}</label>
        <textarea
          rows={7}
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

export default InputMessage;
