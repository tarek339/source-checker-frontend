import { IFlex } from "../../../types/interfaces/components";

const Flex = ({
  children,
  direction,
  gap,
  justify,
  align,
  width,
  style,
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
        ...style,
      }}>
      {children}
    </div>
  );
};

export default Flex;
