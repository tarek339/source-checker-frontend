import { ListItem } from "@mui/material";
import Grid from "./Grid";
import { ListItemProps } from "../../types/interfaces/components";
import Text from "../Text";

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
