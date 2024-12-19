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
  flexWrap,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: IFlex) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: flexWrap,
        flexDirection: direction,
        gap: gap,
        justifyContent: justify,
        alignItems: align,
        width: width,
        height: height,
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Flex;
