import { Grid2 } from "@mui/material";
import { GridItemProps } from "../../types/interfaces/components";

const GridItem = ({ children, size }: GridItemProps) => {
  return (
    <Grid2 container size={size}>
      {children}
    </Grid2>
  );
};

export default GridItem;
