import { IInput } from "../../types/interfaces/components";
import Flex from "../containers/Flex";

const Input = ({
  type,
  label,
  name,
  htmlFor,
  error,
  hasError,
  value,
  placeHolder,
  disabled,
  onChange,
}: IInput) => {
  return (
    <Flex direction={"column"} gap={"3px"}>
      <label style={{ color: hasError ? "#ff0000" : "" }} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={hasError ? "input-error" : ""}
        type={!type ? "text" : type}
        name={name}
        placeholder={placeHolder}
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

export default Input;
