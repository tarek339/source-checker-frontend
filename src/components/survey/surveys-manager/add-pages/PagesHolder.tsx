import { useState } from "react";
import axios from "axios";
import {
  useSelectors,
  useTranslations,
  useDispatches,
  useRequests,
  useBreakPoints,
} from "../../../../hooks";
import Table from "../../../Table";

const PagesHolder = () => {
  const { surveyPages, survey } = useSelectors();
  const { t } = useTranslations();
  const { dispatchSurvey } = useDispatches();
  const { fetchSurvey } = useRequests();
  const { windowWidth } = useBreakPoints();

  const screenXS = windowWidth < 445;

  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(5);

  const handleMouseEnter = (row: number) => {
    setHoveredRow(row);
  };
  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const onDelete = async (_id: string) => {
    await axios.post(`/survey/delete-page/${_id}`);
    const res = await axios.get(`/survey/get-profile/${survey?._id}`);
    fetchSurvey();
    dispatchSurvey(res.data.survey);
    if (
      res.data.survey.pages.length % 5 === 0 &&
      res.data.survey.pages.length > 0
    ) {
      setFirst((prevNum) => prevNum - 5);
      setLast((prevNum) => prevNum - 5);
    }
  };

  return (
    <>
      <Table
        headers={
          screenXS
            ? ["Titel", t("common.action")]
            : ["Titel", t("common.view"), t("common.action")]
        }
        propsChildren={surveyPages?.slice(first, last).map((page, i) => {
          return (
            <tr
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              style={{
                backgroundColor:
                  hoveredRow === i ? "#ddd" : i % 2 === 0 ? "#fff" : "#f1f1f1",
              }}>
              <td
                style={{
                  borderBottomLeftRadius:
                    i === surveyPages?.slice(first, last).length - 1
                      ? "20px"
                      : "0px",
                  width: "40%",
                  fontSize: "18px",
                }}>
                {page?.title}
              </td>

              {screenXS ? null : (
                <td
                  style={{
                    fontSize: "18px",
                  }}>
                  {page?.isMobileView
                    ? t("common.mobileView")
                    : page?.isMobileView === false
                    ? t("common.desktopView")
                    : page?.isOpenGraphView
                    ? "open graph"
                    : null}
                </td>
              )}

              <td
                style={{
                  textTransform: "uppercase",
                  borderBottomRightRadius:
                    i === surveyPages?.slice(first, last).length - 1
                      ? "20px"
                      : "0px",
                  textAlign: "right",
                }}>
                <span
                  style={{
                    color: "#FF0000",
                    textTransform: "uppercase",
                  }}
                  onClick={() => onDelete(page?._id!)}>
                  {t("common.delete")}
                </span>
              </td>
            </tr>
          );
        })}
        first={first}
        last={last}
        setFirst={setFirst}
        setLast={setLast}
        property={survey?.pages!}
      />
    </>
  );
};

export default PagesHolder;
