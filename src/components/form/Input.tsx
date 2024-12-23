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
  icon,
  onChange,
  onClickIcon,
}: IInput) => {
  return (
    <Flex direction={"column"} gap={"3px"} style={{ position: "relative" }}>
      <>
        {icon && (
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: -1,
            }}>
            <IconButton onClick={onClickIcon}>
              <Close size={24} color="" />
            </IconButton>
          </div>
        )}
      </>

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
          paddingRight: icon ? "40px" : "",
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
