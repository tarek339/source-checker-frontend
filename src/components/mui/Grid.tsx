import { Grid2 } from "@mui/material";
import { GridPorps } from "../../types/interfaces/components";

const Grid = ({
  direction,
  children,
  spacing,
  style,
  maxWidth,
  maxedWidth,
  noMargin,
  justifyContent,
  flexStart,
  center,
  flexEnd,
  between,
  column,
  columnReverse,
  rowReverse,
  width,
  height,
  maxHeight,
  minHeight,
  alignItems,
  alignStart,
  alignCenter,
  alignEnd,
  alignStretch,
  wrap,
  nowrap,
  padding,
  gutters,
  justifyItems,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: GridPorps) => {
  return (
    <Grid2
      container
      spacing={!spacing ? 2 : spacing}
      direction={
        column
          ? "column"
          : columnReverse
          ? "column-reverse"
          : rowReverse
          ? "row-reverse"
          : !direction && !column && !columnReverse && !rowReverse
          ? "row"
          : direction
      }
      justifyContent={
        center
          ? "center"
          : flexEnd
          ? "flex-end"
          : between
          ? "space-between"
          : flexStart
          ? "flex-start"
          : justifyContent
      }
      alignItems={
        alignCenter
          ? "center"
          : alignEnd
          ? "flex-end"
          : alignStart
          ? "flex-start"
          : alignStretch
          ? "stretch"
          : alignItems
      }
      justifyItems={justifyItems}
      wrap={nowrap ? "nowrap" : wrap}
      width={width}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      sx={{
        ...style,
        margin: !noMargin ? "0 auto" : "0",
        padding: gutters ? "0px 20px 0px 20px" : padding ? "20px" : "0",
        maxWidth:
          !maxWidth && !maxedWidth
            ? "1000px"
            : maxedWidth
            ? "100%"
            : `${maxWidth}px`,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {children}
    </Grid2>
  );
};

export default Grid;
