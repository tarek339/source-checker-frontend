import {
  IoAddOutline,
  IoAlertSharp,
  IoArrowBackSharp,
  IoArrowForwardSharp,
} from "react-icons/io5";
import { IoIosCloseCircleOutline, IoMdArrowRoundBack } from "react-icons/io";
import { BiLoaderAlt } from "react-icons/bi";
import { FiArrowUp } from "react-icons/fi";
import Link from "../../fonts/Link";
import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import TextSmall from "../../fonts/TextSmall";
import { TableBody, TableCell, TableRow } from "@mui/material";
import BasicTable from "./Table";

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
const style: React.CSSProperties = {
  fontSize: "12px",
};

const sx: React.CSSProperties = {
  fontSize: "12px",
  textTransform: "none",
  border: "1px solid darkgray",
  cursor: "default",
};

const rows = [
  createData(
    <IoAlertSharp />,
    "IoAlertSharp",
    "Ionicons",
    "https://ionic.io/ionicons",
    <span style={style}>
      Copyright (c) 2015-present Ionic{" "}
      <a target="_blank" href="http://ionic.io/">
        http://ionic.io/
      </a>
    </span>,
    "https://opensource.org/license/mit"
  ),
  createData(
    <IoMdArrowRoundBack />,
    "IoMdArrowRoundBack",
    "Ionicons",
    "https://ionic.io/ionicons",

    <span style={style}>
      Copyright (c) 2015-present Ionic{" "}
      <a target="_blank" href="http://ionic.io/">
        http://ionic.io/
      </a>
    </span>,
    "https://opensource.org/license/mit"
  ),
  createData(
    <IoArrowBackSharp />,
    "IoArrowBackSharp",
    "Ionicons",
    "https://ionic.io/ionicons",

    <span style={style}>
      Copyright (c) 2015-present Ionic{" "}
      <a target="_blank" href="http://ionic.io/">
        http://ionic.io/
      </a>
    </span>,
    "https://opensource.org/license/mit"
  ),
  createData(
    <IoArrowForwardSharp />,
    "IoArrowForwardSharp",
    "Ionicons",
    "https://ionic.io/ionicons",

    <span style={style}>
      Copyright (c) 2015-present Ionic{" "}
      <a target="_blank" href="http://ionic.io/">
        http://ionic.io/
      </a>
    </span>,
    "https://opensource.org/license/mit"
  ),
  createData(
    <IoAddOutline />,
    "IoAddOutline",
    "Ionicons",
    "https://ionic.io/ionicons",

    <span style={style}>
      Copyright (c) 2015-present Ionic{" "}
      <a target="_blank" href="http://ionic.io/">
        http://ionic.io/
      </a>
    </span>,
    "https://opensource.org/license/mit"
  ),
  createData(
    <IoIosCloseCircleOutline />,
    "IoIosCloseCircleOutline",
    "Ionicons",
    "https://ionic.io/ionicons",

    <span style={style}>
      Copyright (c) 2015-present Ionic{" "}
      <a target="_blank" href="http://ionic.io/">
        http://ionic.io/
      </a>
    </span>,
    "https://opensource.org/license/mit"
  ),
  createData(
    <BiLoaderAlt />,
    "BiLoaderAlt",
    "BoxIcons",
    "https://github.com/atisawd/boxicons",
    "Copyright (c) 2015-2021 Aniket Suvarna",
    "https://opensource.org/license/mit"
  ),
  createData(
    <FiArrowUp />,
    "FiArrowUp",
    "Feather",
    "https://feathericons.com/",
    "Copyright (c) 2013-2023 Cole Bemis",
    "https://opensource.org/license/mit"
  ),
];

const Mit = () => {
  return (
    <section>
      <Flex direction={"column"} gap={"10px"}>
        <div>
          <Span title={"I."} />
          <Span title={"Icons under MIT License"} />
        </div>
        <Span title={"MIT-License"} />
        <Link
          url={"https://opensource.org/license/mit"}
          title={"https://opensource.org/license/mit"}
          fontWeight={0}
          fontSize={14}
        />
        <TextSmall text="Copyright <YEAR> <COPYRIGHT HOLDER>" />
        <TextSmall
          text={`Permission is hereby granted, free of charge, to any person obtaining a copy of 
          this software and associated documentation files (the “Software”), 
          to deal in the Software without restriction, including without limitation the rights to use, 
          copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
          and to permit persons to whom the Software is furnished to do so, subject to the following conditions:`}
        />
        <TextSmall
          text={`The above copyright notice and this permission notice shall 
          be included in all copies or substantial portions of the Software.`}
        />
        <TextSmall
          uppercase
          text={`THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
          INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
          COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
          WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`}
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
          minWidth={1200}>
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

export default Mit;
