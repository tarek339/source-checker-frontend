import { Rating, TableBody, TableCell, TableRow } from "@mui/material";
import { useSelectors } from "../../../hooks";
import { SectionHolderProps } from "../../../types/interfaces/components";
import SummaryTable from "./SummaryTable";
import { useState } from "react";
import { colors } from "../../../assets/theme/colors";

const SectionHolder = ({ page }: SectionHolderProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { survey } = useSelectors();

  const handleMouseEnter = (row: number) => {
    setHovered(row);
  };
  const handleMouseLeave = () => {
    setHovered(null);
  };

  const sx: React.CSSProperties = {
    fontSize: "22px",
    fontWeight: 600,
    textTransform: "none",
    border: "none",
  };

  return (
    <SummaryTable header={["User", "Rating"]} size="medium">
      <TableBody>
        {page?.starsArray
          ?.slice()
          .sort((a, b) => b.stars - a.stars)
          .map((obj, i) => {
            return (
              <TableRow
                key={i}
                sx={{
                  borderBottom: `2px solid ${colors.primary.main}`,
                  backgroundColor:
                    hovered === i ? colors.table.tableRow.hover : "",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}>
                <TableCell sx={sx}>
                  {i + 1}.{" "}
                  {survey?.freeUserNames && !survey?.anonymousResults
                    ? obj.userName
                    : obj.userNumber}
                </TableCell>
                <TableCell sx={sx}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Rating value={obj.stars} readOnly size="large" />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </SummaryTable>
  );
};

export default SectionHolder;
