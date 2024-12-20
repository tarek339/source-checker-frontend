import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { BasicTableProps } from "../../../types/interfaces/components";

const sx: React.CSSProperties = {
  fontSize: "12px",
  textTransform: "none",
  border: "1px solid darkgray",
};

const BasicTable = ({ header, minWidth, children }: BasicTableProps) => {
  return (
    <TableContainer
      sx={{
        boxShadow: "none",
        borderRadius: "0px",
      }}
      component={Paper}>
      <Table
        size="small"
        sx={{ minWidth: minWidth, borderRadius: "0px" }}
        aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((head) => (
              <TableCell sx={sx}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {children}
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
