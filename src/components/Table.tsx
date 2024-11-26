import { useEffect } from "react";
import { ITable } from "../types/interfaces/components";
import Flex from "./containers/Flex";
import { useTranslations } from "../hooks";
import { Next, Prev } from "./icons";

const Table = ({
  headers,
  propsChildren,
  first,
  last,
  setFirst,
  setLast,
  property,
}: ITable) => {
  const { t } = useTranslations();

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
  }, [property?.length]);

  return (
    <Flex
      direction={"column"}
      justify="space-between"
      style={{
        height: "auto",
        transition: "height 0.2s",
        paddingTop: "2em",
      }}>
      <table>
        <thead>
          <tr>
            {headers?.map((header: string, index: number) => {
              return (
                <th
                  style={{
                    width: `${100 / headers.length}%`,
                    borderTopLeftRadius: index === 0 ? "20px" : "0px",
                    borderTopRightRadius:
                      index == headers.length - 1 ? "20px" : "0px",
                    textAlign: index === headers.length - 1 ? "right" : "left",
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

      <Flex
        direction={"row"}
        gap={"20px"}
        justify="flex-end"
        style={{
          marginTop: "10px",
          marginRight: "10px",
          fontSize: "16px",
        }}>
        <Flex direction={"row"} gap={"10px"}>
          <span>{first + 1}</span>
          <span>{t("common.of")}</span>
          <span>{property?.length}</span>
        </Flex>
        <Flex direction={"row"} gap={"20px"} justify="flex-end" align="center">
          <Prev first={first} onClick={prevPage} fontSize={18} />
          <Next
            last={last}
            propertyLength={property.length}
            onClick={nextPage}
            fontSize={18}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Table;
