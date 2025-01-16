import { useRequests, useSelectors, useTranslations } from "../../../hooks";
import { useEffect, useState } from "react";
import {
  Card,
  FramerMotion,
  Grid,
  SubTitle,
  SummaryTable,
  Thumbnail,
  Title,
} from "../..";
import { Rating, TableBody, TableCell, TableRow } from "@mui/material";
import { colors } from "../../../assets/theme/colors";

const sx: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 600,
  textTransform: "none",
  borderBottom: `1px solid ${colors.primary.main}`,
};

const Acknowledgement = () => {
  const { t } = useTranslations();
  const { student, surveyPages } = useSelectors();
  const { fetchSurveyByToken } = useRequests();

  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (row: number) => {
    setHovered(row);
  };
  const handleMouseLeave = () => {
    setHovered(null);
  };

  useEffect(() => {
    fetchSurveyByToken();
  }, []);

  return (
    <FramerMotion>
      <Grid column gutters>
        <Title title={t("studentSurvey.thankYou")} marginBottom="16px" />

        <Card>
          <SubTitle
            title={t("studentSurvey.ratedInfo")}
            marginBottom="16px"
            center
          />

          <SummaryTable header={null}>
            <TableBody>
              {surveyPages?.map((page, i) => {
                return page.starsArray.map((obj) => {
                  if (obj.userNumber === student?.userNumber.toString()) {
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
                          {i + 1}. {page.title}
                        </TableCell>
                        <TableCell sx={sx}>
                          <Thumbnail
                            url={
                              page.isMobileView
                                ? page.mobileScreenshot
                                : page.isMobileView === false
                                ? page.mobileScreenshot
                                : page.isMobileView === null &&
                                  page.isOpenGraphView
                                ? page.openGraph.ogImage?.map(
                                    (img: { url: string }) => img.url
                                  )
                                : null
                            }
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            ...sx,
                            textAlign: "right",
                          }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-end",
                            }}>
                            <Rating value={obj.stars} readOnly size="large" />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  }
                });
              })}
            </TableBody>
          </SummaryTable>

          <SubTitle
            title={t("studentSurvey.savedInfo")}
            color={colors.typography.info}
            marginTop="16px"
            center
          />
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default Acknowledgement;
