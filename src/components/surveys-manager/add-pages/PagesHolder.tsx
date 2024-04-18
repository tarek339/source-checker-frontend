import { useEffect, useState } from "react";
import { useDispatches, useSelectors } from "../../../hooks";
import Table from "../../Table";
import axios from "axios";

const PagesHolder = () => {
  const { surveyPages, survey } = useSelectors();
  const { dispatchSurveys } = useDispatches();
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(5);

  const handleMouseEnter = (row: number) => {
    setHoveredRow(row);
  };
  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const onDelete = async (id: string) => {
    await axios.post(`/survey/delete-page/${id}`);
  };

  useEffect(() => {
    dispatchSurveys(survey?.pages!);
    console.log(surveyPages);
  }, [surveyPages]);

  return (
    <Table
      headers={["Name", ""]}
      propsChildren={surveyPages?.map((page, i) => {
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
                  i === surveyPages?.length - 1 ? "4px" : "0px",
              }}>
              {page?.title}
            </td>
            {page?.title && (
              <td
                onClick={() => onDelete(page?.id!)}
                style={{
                  textAlign: "right",
                  textTransform: "uppercase",
                  color: "#f44336",
                  borderBottomRightRadius:
                    i === surveyPages?.length - 1 ? "4px" : "0px",
                }}>
                löschen
              </td>
            )}
          </tr>
        );
      })}
      first={first}
      last={last}
      setFirst={setFirst}
      setLast={setLast}
      property={surveyPages}
    />
  );
};

export default PagesHolder;
