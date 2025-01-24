interface StatusProps {
  children: JSX.Element;
  backgroundColor?: string;
  color?: string;
}

const Status = ({ children, backgroundColor, color }: StatusProps) => {
  return (
    <div
      style={{
        fontFamily: "Work Sans, Helvetica, Arial, Lucida Grande, sans-serif",
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: "4px",
        fontSize: "18px",
        fontWeight: "bold",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        transition: "background-color 0.3s, color 0.5s",
      }}>
      {children}
    </div>
  );
};

export default Status;
