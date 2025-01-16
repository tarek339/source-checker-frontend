import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { Delete } from "../../../../icons";
import { EnhancedTableToolbarProps } from "../../../../../types/interfaces/components";

const EnhancedTableToolbar = ({
  numSelected,
  onClick,
}: EnhancedTableToolbarProps) => {
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        // numSelected > 0 && {
        //   bgcolor: "rgba(0, 0, 0, 0.04)",
        // },
      ]}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="h6"
          component="div">
          {numSelected} ausgewählt
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div">
          Umfrageseiten
        </Typography>
      )}
      {numSelected > 0 && (
        <Tooltip title="Löschen">
          <IconButton
            onClick={onClick}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 0, 0, 0.1)",
              },
              "& .MuiTouchRipple-root": {
                color: "#ff0000",
              },
            }}>
            <Delete />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
