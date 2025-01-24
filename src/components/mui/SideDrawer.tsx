import { Drawer } from "@mui/material";
import { SideDrawerProps } from "../../types/interfaces/components";

const SideDrawer = ({
  open,
  toggleDrawer,
  children,
  anchor,
}: SideDrawerProps) => {
  return (
    <Drawer open={open} onClose={toggleDrawer} anchor={anchor}>
      <div
        style={{
          padding: "30px",
          width: "100%",
        }}>
        {children}
      </div>
    </Drawer>
  );
};

export default SideDrawer;
