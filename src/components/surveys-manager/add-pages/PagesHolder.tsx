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

  const onDelete = async (_id: string) => {
    console.log(_id);
    await axios.post(`/survey/delete-page/${_id}`);
  };

  useEffect(() => {
    dispatchSurveys(survey?.pages!);
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
                style={{
                  textAlign: "right",
                  textTransform: "uppercase",
                  color: "#f44336",
                  borderBottomRightRadius:
                    i === surveyPages?.length - 1 ? "4px" : "0px",
                }}>
                <span onClick={() => onDelete(page?._id!)}>löschen</span>
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
