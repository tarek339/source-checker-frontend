import { IInput } from "../../../types/interfaces/components";

const Input = ({ label, name, htmlFor, error, inputErrorStyle }: IInput) => {
  return (
    <div className="input-holder">
      <label htmlFor={htmlFor}>{label}</label>
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
