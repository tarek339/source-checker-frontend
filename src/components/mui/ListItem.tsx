import { ListItem } from "@mui/material";
import Text from "./Text";
import Grid from "./Grid";
import { ListItemProps } from "../../types/interfaces/components";

const UlListItem = ({ children }: ListItemProps) => {
  return (
    <ListItem>
      <Grid spacing={1} noMargin nowrap alignStart>
        <Text text="•" />
        <Text text={children} />
      </Grid>
    </ListItem>
  );
};

export default UlListItem;
