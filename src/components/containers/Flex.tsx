import { IFlex } from "../../types/interfaces/components";

const Flex = ({
  children,
  direction,
  gap,
  justify,
  align,
  width,
  style,
  height,
  onClick,
}: IFlex) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap: gap,
        justifyContent: justify,
        alignItems: align,
        width: width,
        height: height,
        ...style,
      }}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Flex;
