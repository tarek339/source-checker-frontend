import { TableHead, TableRow, TableCell, Checkbox } from "@mui/material";
import { EnhancedTableHeadProps } from "../../../../../types/interfaces/components";

const headCells = [
  {
    id: "Titel",
    numeric: true,
    label: "Titel",
  },
  {
    id: "Ansicht",
    numeric: true,
    label: "Ansicht",
  },
  {
    id: "Bearbeiten",
    numeric: true,
    label: "Bearbeiten",
  },
];

const EnhancedTableHead = ({
  onSelectAllClick,
  numSelected,
  rowCount,
}: EnhancedTableHeadProps) => {
  return (
    <TableHead
      sx={{
        borderTop: "1px solid #e0e0e0",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            sx={{
              "&:hover": {
                backgroundColor: "rgb(40, 53, 195, 0.1)",
              },
              "&.Mui-checked": {
                color: "#2835c3",
              },
              "&.MuiCheckbox-indeterminate": {
                color: "#2835c3",
              },
              zIndex: 1,
            }}
          />
        </TableCell>
        {headCells.map((headCell, i) => (
          <TableCell
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
            key={i}
            padding={"normal"}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
