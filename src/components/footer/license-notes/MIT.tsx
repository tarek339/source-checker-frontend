import {
  IoAddOutline,
  IoAlertSharp,
  IoArrowBackSharp,
  IoArrowForwardSharp,
} from "react-icons/io5";
import { IoIosCloseCircleOutline, IoMdArrowRoundBack } from "react-icons/io";
import { BiLoaderAlt } from "react-icons/bi";
import { FiArrowUp } from "react-icons/fi";
import { TableBody, TableCell, TableRow } from "@mui/material";
import BasicTable from "./Table";
import Grid from "../../mui/Grid";
import Text from "../../mui/Text";
import { Link } from "../..";

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
    <Grid column width={"100%"}>
      <div>
        <Text text={"I."} />
        <Text text={"Icons under MIT License"} />
      </div>
      <Text text={"MIT-License"} />
      <Link href={"https://opensource.org/license/mit"} />
      <Text text="Copyright <YEAR> <COPYRIGHT HOLDER>" small />
      <Text
        text={`Permission is hereby granted, free of charge, to any person obtaining a copy of 
          this software and associated documentation files (the “Software”), 
          to deal in the Software without restriction, including without limitation the rights to use, 
          copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
          and to permit persons to whom the Software is furnished to do so, subject to the following conditions:`}
        small
      />
      <Text
        text={`The above copyright notice and this permission notice shall 
          be included in all copies or substantial portions of the Software.`}
        small
      />
      <Text
        text={`the software is provided “as is”, without warranty of any kind, express or implied, 
          including but not limited to the warranties of merchantability, 
          fitness for a particular purpose and noninfringement. in no event shall the authors or 
          copyright holders be liable for any claim, damages or other liability, 
          whether in an action of contract, tort or otherwise, arising from, 
          out of or in connection with the software or the use or other dealings in the software.`}
        small
        uppercase
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
                  <Link xs href={row.Website} title={row.Website} />
                </TableCell>
                <TableCell sx={sx}>{row.CopyrightNotice}</TableCell>
                <TableCell sx={sx}>
                  <Link xs href={row.LinkLicense} title={row.LinkLicense} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </BasicTable>
    </Grid>
  );
};

export default Mit;
