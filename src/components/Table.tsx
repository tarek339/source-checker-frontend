import { useEffect } from "react";
import { ITable } from "../types/interfaces/components";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
// import { useSelectors } from "../hooks";

const Table = ({
  headers,
  propsChildren,
  first,
  last,
  setFirst,
  setLast,
  property,
}: ITable) => {
  // const { surveyPages } = useSelectors();
  // const [height, setHeight] = useState(145);
  // const [prevSurveyPagesLength, setPrevSurveyPagesLength] = useState(
  //   surveyPages.length
  // );

  const nextPage = () => {
    if (last >= property.length) return;
    setFirst((prevNum) => prevNum + 5);
    setLast((prevNum) => prevNum + 5);
  };

  const prevPage = () => {
    if (first === 0) return;
    setFirst((prevNum) => prevNum - 5);
    setLast((prevNum) => prevNum - 5);
  };

  useEffect(() => {
    if (property.length === last + 1) {
      setFirst((prevNum) => prevNum + 5);
      setLast((prevNum) => prevNum + 5);
    }
  }, [property.length]);

  // useEffect(() => {
  //   if (surveyPages.length > prevSurveyPagesLength) {
  //     setHeight((prevH) => prevH + 54);
  //   }
  //   if (surveyPages.length > 5) {
  //     setHeight(361);
  //   }
  //   if (surveyPages.length < prevSurveyPagesLength && surveyPages.length < 6) {
  //     setHeight((prevH) => prevH - 54);
  //   }
  //   if (surveyPages.length === 1) {
  //     setHeight(145);
  //   }
  //   setPrevSurveyPagesLength(surveyPages.length);
  //   console.log(height);
  // }, [surveyPages, height]);

  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "height 0.2s",
      }}>
      <table>
        <thead>
          <tr>
            {headers.map((header: string, index: number) => {
              return (
                <th
                  style={{
                    width: `${100 / headers.length}%`,
                    borderTopLeftRadius: index === 0 ? "10px" : "0px",
                    borderTopRightRadius:
                      index == headers.length - 1 ? "10px" : "0px",
                  }}
                  key={index}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{propsChildren}</tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "20px",
          marginTop: "10px",
          marginRight: "10px",
          fontSize: "16px",
        }}
        className="pagination">
        <div style={{ display: "flex", gap: "10px" }}>
          <span>{first + 1}</span>
          <span>-</span>
          <span>{last}</span>
          <span>of</span>
          <span>{property?.length}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "20px",
          }}>
          <MdOutlineArrowBackIos
            fontSize="18px"
            style={{ cursor: first === 0 ? "" : "pointer" }}
            onClick={prevPage}
          />
          <MdOutlineArrowForwardIos
            fontSize="18px"
            style={{ cursor: last >= property.length ? "" : "pointer" }}
            onClick={nextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
