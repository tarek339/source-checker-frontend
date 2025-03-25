import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import { SummaryTableProps } from "../../../types/interfaces/components";

const sx: React.CSSProperties = {
  fontSize: "18px",
  textTransform: "none",
  borderBottom: "1px solid darkgray",
  fontWeight: 600,
};

const SummaryTable = ({
  header,
  children,
  flexEnd,
  size,
  right,
}: SummaryTableProps) => {
  return (
    <TableContainer
      sx={{
        boxShadow: "none",
        borderRadius: "0px",
        display: "flex",
        justifyContent: !flexEnd ? "center" : "flex-end",
        width: "100%",
        scrollbarWidth: "thin",
      }}
      component={Paper}>
      <Table
        size={!size ? "small" : size}
        sx={{
          minWidth: 500,
          maxWidth: 550,
          borderRadius: "0px",
        }}
        aria-label="simple table">
        <TableHead>
          <TableRow>
            {header?.map((head, i) => (
              <TableCell
                sx={{
                  ...sx,
                  textAlign:
                    right && i === header.length - 1 ? "right" : "left",
                }}>
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {children}
      </Table>
    </TableContainer>
  );
};

export default SummaryTable;
