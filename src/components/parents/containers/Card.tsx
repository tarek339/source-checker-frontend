import { ICard } from "../../../types/interfaces/components";

const Card = ({ children, style }: ICard) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        marginRight: "20px",
        backgroundColor: "#fff",
        marginTop: "5em",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        ...style,
      }}>
      {children}
    </div>
  );
};

export default Card;
