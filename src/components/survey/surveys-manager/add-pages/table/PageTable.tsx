import {
  TableRow,
  TableCell,
  Checkbox,
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TablePagination,
  Chip,
} from "@mui/material";
import { useEffect, useState } from "react";
import EnhancedTableHead from "./TableHead";
import EnhancedTableToolbar from "./TableToolbar";
import { useDispatches, useRequests, useSelectors } from "../../../../../hooks";
import axios from "axios";
import { IPages } from "../../../../../types/interfaces/interfaces";
import ViewsModal from "../ViewsModal";
import "/public/table.css";

const PageTable = () => {
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [dense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [surveyIds, setSurveyIds] = useState<string[]>([]);
  const [pageId, setPageId] = useState("");
  const [rowsInPage, setRowsInPage] = useState(0);
  const { fetchSurvey } = useRequests();
  const { survey, surveyPages } = useSelectors();
  const { openViewsModal } = useDispatches();

  useEffect(() => {
    // Calculate the starting index of the current page
    const startIndex = page * rowsPerPage;
    // Calculate the ending index for the current page
    const endIndex = startIndex + rowsPerPage;
    // Get the actual rows that should be displayed for the current page
    const currentRows = surveyPages?.slice(startIndex, endIndex);
    // If you want to set the number of rows in the current page
    setRowsInPage(currentRows?.length);
  }, [page, rowsPerPage, surveyPages]);

  useEffect(() => {
    if (page !== 0 && rowsInPage === 0) {
      setPage((prev) => prev - 1);
    }
  }, [page, rowsInPage]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = surveyPages.map((_page, i) => i + 1);
      setSelected(newSelected);
      const newSurveyId = surveyPages.map((page) => page._id);
      setSurveyIds(newSurveyId);
      return;
    }
    if (!event.target.checked) {
      setSurveyIds([]);
    }
    setSelected([]);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, number: number) => {
    const selectedIndex = selected.indexOf(number);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, number);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onDelete = async () => {
    await axios.post(`/survey/delete-survey-page/${survey?._id}`, {
      surveyIds,
    });
    setSurveyIds([]);
    setSelected([]);
    fetchSurvey();
  };

  const selectPage = async (pageId: string) => {
    try {
      surveyPages.filter((page: IPages) => {
        if (page._id === pageId) {
          setPageId(page._id);
        }
      });
      openViewsModal();
    } catch (error) {
      console.log(error);
    }
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - surveyPages?.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <ViewsModal pageId={pageId} />
      <Paper
        sx={{
          width: "100%",
          boxShadow:
            "0 3px 7px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.11)",
          border: "1px solid #f5f5f5",
          borderRadius: "16px",
        }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          onClick={() => onDelete()}
        />
        <TableContainer>
          <Table
            sx={{
              minWidth: 600,
              borderRadius: 0,
            }}
            aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={surveyPages?.length}
            />

            <TableBody>
              {surveyPages
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row, index) => {
                  const isItemSelected =
                    row.number &&
                    row.number !== undefined &&
                    selected?.includes(row.number)
                      ? true
                      : false;
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                      sx={{
                        "&.Mui-selected": {
                          backgroundColor: "rgb(40, 53, 195, 0.1)",
                        },
                        "&.Mui-selected:hover": {
                          backgroundColor: "rgb(40, 53, 195, 0.1)",
                        },
                      }}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => {
                            handleClick(event, row.number);
                            if (!isItemSelected) {
                              setSurveyIds([...surveyIds, row._id]);
                            } else {
                              const newSurveyId = surveyIds.filter(
                                (id) => id !== row._id
                              );
                              setSurveyIds(newSurveyId);
                            }
                          }}
                          checked={isItemSelected}
                          sx={{
                            "&:hover": {
                              backgroundColor: "rgb(40, 53, 195, 0.1)",
                            },
                            "&.Mui-checked": {
                              color: "#2835c3",
                            },
                          }}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>

                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{
                          textTransform: "capitalize",
                          paddingLeft: "16px",
                        }}>
                        {row.title}
                      </TableCell>

                      <TableCell sx={{ textTransform: "none" }}>
                        {row?.isMobileView
                          ? "Mobile"
                          : row?.isMobileView === false
                          ? "Desktop"
                          : row?.isOpenGraphView
                          ? "Open Graph"
                          : "Auswählen"}
                      </TableCell>

                      <TableCell>
                        {row?.isMobileView ||
                        row?.isMobileView === false ||
                        row?.isOpenGraphView ? (
                          <Chip
                            onClick={() => selectPage(row._id)}
                            label="Ansicht ändern"
                            variant="outlined"
                            size="small"
                            sx={{
                              cursor: "pointer",
                              fontSize: "12px",
                              padding: "0px",
                              "& .MuiChip-label": {
                                fontSize: "12px",
                              },
                            }}
                          />
                        ) : null}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 ? (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}>
                  <TableCell colSpan={6} />
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Zeile pro Seite"
          component="div"
          count={!surveyPages?.length ? 1 : surveyPages?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelDisplayedRows={({ from, to, count }) =>
            `${from} - ${to} von ${count}`
          }
        />
      </Paper>
    </Box>
  );
};

export default PageTable;
