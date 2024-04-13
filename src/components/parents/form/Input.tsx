import { IInput } from "../../../types/interfaces/components";

const Input = ({ label, name, htmlFor, error, inputErrorStyle }: IInput) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <label style={{ fontSize: "14px" }} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={htmlFor}
        style={{
          borderColor: inputErrorStyle ? "#f44336" : "",
          boxShadow: inputErrorStyle ? "0px 0px 0px 1px #f44336 inset" : "",
        }}
      />
      {error}
    </div>
  );
};

export default Input;
