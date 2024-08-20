import { ITextSmall } from "../../types/interfaces/components";

const TextSmall = ({ text, uppercase, bold }: ITextSmall) => {
  return (
    <p
      style={{
        fontSize: 14,
        textTransform: uppercase ? "uppercase" : undefined,
        fontWeight: bold ? "bold" : undefined,
      }}>
      {text}
    </p>
  );
};

export default TextSmall;
