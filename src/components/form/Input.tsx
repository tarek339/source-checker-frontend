import { IconButton } from "@mui/material";
import { IInput } from "../../types/interfaces/components";
import Flex from "../containers/Flex";
import { Close } from "../icons";

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
  onClear,
}: IInput) => {
  return (
    <Flex direction={"column"} gap={"3px"}>
      <label style={{ color: hasError ? "#ff0000" : "" }} htmlFor={htmlFor}>
        {label}
      </label>
      <Flex direction="row" style={{ position: "relative" }}>
        <>
          {value && (
            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: "-2.5px",
              }}>
              <IconButton onClick={onClear}>
                <Close size={28} color="" />
              </IconButton>
            </div>
          )}
        </>
        <input
          className={hasError ? "input-error" : ""}
          type={!type ? "text" : type}
          name={name}
          placeholder={placeHolder}
          id={htmlFor}
          style={{
            borderColor: hasError ? "#ff0000" : "",
            boxShadow: hasError ? "0px 0px 0px 1px #ff0000 inset" : "",
            width: "100%",
            paddingRight: "40px",
          }}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </Flex>
      <>{error}</>
    </Flex>
  );
};

export default Input;
