import { IHeader } from "../../types/interfaces/components";

const Header = ({ title }: IHeader) => {
  return (
    <div
      style={{
        backgroundColor: "#2834c2",
        width: "100%",
        height: "65px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px",
        boxShadow: "rgba(0, 0, 0, 0.239) 0px 3px 8px",
      }}>
      <h2
        style={{
          color: "#fbfcff",
          letterSpacing: "1px",
        }}>
        {title}
      </h2>
    </div>
  );
};

export default Header;
