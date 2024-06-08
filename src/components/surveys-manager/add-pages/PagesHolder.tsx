import { useState } from "react";
import {
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import Table from "../../Table";
import axios from "axios";

const PagesHolder = () => {
  const { surveyPages, survey } = useSelectors();
  const { t } = useTranslations();
  const { dispatchSurvey } = useDispatches();
  const { fetchSurvey } = useRequests();

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
        headers={["Name", t("common.view"), t("common.action")]}
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
                }}>
                {page?.title}
              </td>
              <td>
                {page?.isMobileView
                  ? t("common.mobileView")
                  : page?.isMobileView === false
                  ? t("common.desktopView")
                  : null}
              </td>
              {page?.title && (
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
                    }}
                    onClick={() => onDelete(page?._id!)}>
                    {t("common.delete")}
                  </span>
                </td>
              )}
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
