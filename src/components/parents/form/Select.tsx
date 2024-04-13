import { ISelect } from "../../../types/interfaces/components";

const Select = ({
  label,
  name,
  htmlFor,
  error,
  inputErrorStyle,
  option,
}: ISelect) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <label style={{ fontSize: "14px" }} htmlFor="">
        {label}
      </label>
      <select
        style={{
          borderColor: inputErrorStyle ? "#f44336" : "",
          boxShadow: inputErrorStyle ? "0px 0px 0px 1px #f44336 inset" : "",
        }}
        name={name}
        id={htmlFor}>
        {option}
      </select>
      {error}
    </div>
  );
};

export default Select;
