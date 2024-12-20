import { LuCircleSlash2, LuDot } from "react-icons/lu";
import Link from "../../fonts/Link";
import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import TextSmall from "../../fonts/TextSmall";
import BasicTable from "./Table";
import { TableBody, TableCell, TableRow } from "@mui/material";

function createData(
  IconVisualized: JSX.Element,
  IconName: string,
  OfferedBy: string,
  Website: string,
  CopyrightNotice: string | JSX.Element,
  LinkLicense: string
) {
  return {
    IconVisualized,
    IconName,
    OfferedBy,
    Website,
    CopyrightNotice,
    LinkLicense,
  };
}

const sx: React.CSSProperties = {
  fontSize: "12px",
  textTransform: "none",
  border: "1px solid darkgray",
  cursor: "default",
};

const rows = [
  createData(
    <LuCircleSlash2 />,
    "LuCircleSlash2",
    "Lucide",
    "https://lucide.dev/",
    "Copyright (c) 2022 Lucide Contributors",
    "https://opensource.org/license/isc-license-txt"
  ),
  createData(
    <LuDot />,
    "LuDot",
    "Lucide",
    "https://lucide.dev/",
    "Copyright (c) 2022 Lucide Contributors",
    "https://opensource.org/license/isc-license-txt"
  ),
];

const Isc = () => {
  return (
    <section>
      <Flex direction={"column"} gap={"10px"}>
        <div>
          <Span title={"IV."} />
          <Span title={"Icons under ISC License"} />
          <Span title={"ISC License"} />
          <Link
            url={"https://opensource.org/license/isc-license-txt "}
            title={"https://opensource.org/license/isc-license-txt "}
            fontWeight={0}
            fontSize={14}
          />
          <TextSmall text={"Copyright <YEAR> <OWNER>"} />
        </div>
        <TextSmall
          text={
            "Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies."
          }
        />
        <TextSmall
          uppercase
          text={`
            THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS 
            SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. 
            IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, 
            OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, 
            DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
             ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
            `}
        />
        <BasicTable
          header={[
            "Icon: visualized",
            "Icon: name",
            "Offered by",
            "Website	Copyright notice",
            "Copyright notice",
            "Link License (text)",
          ]}
          minWidth={1100}>
          <TableBody>
            {rows.map((row, i) => {
              return (
                <TableRow key={i}>
                  <TableCell sx={sx}>{row.IconVisualized}</TableCell>
                  <TableCell sx={sx}>{row.IconName}</TableCell>
                  <TableCell sx={sx}>{row.OfferedBy}</TableCell>
                  <TableCell sx={sx}>
                    <Link url={row.Website} title={row.Website} />
                  </TableCell>
                  <TableCell sx={sx}>{row.CopyrightNotice}</TableCell>
                  <TableCell sx={sx}>
                    <Link url={row.LinkLicense} title={row.LinkLicense} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </BasicTable>
      </Flex>
    </section>
  );
};

export default Isc;
