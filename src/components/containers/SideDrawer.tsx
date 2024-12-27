import { Drawer } from "@mui/material";

export interface ISideDrawer {
  open: boolean;
  toggleDrawer:
    | ((event: object, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  children: JSX.Element | JSX.Element[];
  anchor: "left" | "top" | "right" | "bottom" | undefined;
}

const SideDrawer = ({ open, toggleDrawer, children, anchor }: ISideDrawer) => {
  return (
    <Drawer open={open} onClose={toggleDrawer} anchor={anchor}>
      <div
        style={{
          padding: "20px",
        }}>
        {children}
      </div>
    </Drawer>
  );
};

export default SideDrawer;
