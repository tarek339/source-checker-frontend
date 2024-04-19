import { ITable } from "../types/interfaces/components";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Table = ({
  headers,
  propsChildren,
  first,
  last,
  setFirst,
  setLast,
  property,
}: ITable) => {
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

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header: string, index: number) => {
              return (
                <th
                  style={{
                    width: `${100 / headers.length}%`,
                    borderTopLeftRadius: index === 0 ? "4px" : "0px",
                    borderTopRightRadius:
                      index == headers.length - 1 ? "4px" : "0px",
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
          alignItems: "center",
          gap: "10px",
          marginTop: "5px",
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
            gap: "10px",
          }}>
          <MdOutlineArrowBackIos
            style={{ cursor: "pointer" }}
            onClick={prevPage}
          />
          <MdOutlineArrowForwardIos
            style={{ cursor: "pointer" }}
            onClick={nextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
