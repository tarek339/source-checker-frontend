import {
  FaCheck,
  FaDesktop,
  FaExternalLinkAlt,
  FaImage,
  FaMobileAlt,
  FaRegCopy,
  FaRegEdit,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import BasicTable from "./Table";
import { TableBody, TableCell, TableRow } from "@mui/material";
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

const sx: React.CSSProperties = {
  fontSize: "12px",
  textTransform: "none",
  border: "1px solid darkgray",
  cursor: "default",
};

const style: React.CSSProperties = {
  fontSize: "12px",
};

const rows = [
  createData(
    <FaRegCopy />,
    "FaRegCopy",
    "Font Awesome",
    "https://fontawesome.com/",
    <span style={style}>
      Copyright (c) 2024 Fonticons, Inc.{" "}
      <a target="_blank" href="https://fontawesome.com">
        https://fontawesome.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
  createData(
    <FaDesktop />,
    "FaDesktop",
    "Font Awesome",
    "https://fontawesome.com/",
    <span style={style}>
      Copyright (c) 2024 Fonticons, Inc.{" "}
      <a target="_blank" href="https://fontawesome.com">
        https://fontawesome.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
  createData(
    <FaImage />,
    "FaImage",
    "Font Awesome",
    "https://fontawesome.com/",
    <span style={style}>
      Copyright (c) 2024 Fonticons, Inc.{" "}
      <a target="_blank" href="https://fontawesome.com">
        https://fontawesome.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
  createData(
    <FaExternalLinkAlt />,
    "FaExternalLinkAlt",
    "Font Awesome",
    "https://fontawesome.com/",
    <span style={style}>
      Copyright (c) 2024 Fonticons, Inc.{" "}
      <a target="_blank" href="https://fontawesome.com">
        https://fontawesome.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
  createData(
    <FaMobileAlt />,
    "FaMobileAlt",
    "Font Awesome",
    "https://fontawesome.com/",
    <span style={style}>
      Copyright (c) 2024 Fonticons, Inc.{" "}
      <a target="_blank" href="https://fontawesome.com">
        https://fontawesome.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
  createData(
    <FaSignOutAlt />,
    "FaSignOutAlt",
    "Font Awesome",
    "https://fontawesome.com/",
    <span style={style}>
      Copyright (c) 2024 Fonticons, Inc.{" "}
      <a target="_blank" href="https://fontawesome.com">
        https://fontawesome.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
  createData(
    <FaCheck />,
    "FaCheck",
    "Font Awesome",
    "https://fontawesome.com/",
    <span style={style}>
      Copyright (c) 2024 Fonticons, Inc.{" "}
      <a target="_blank" href="https://fontawesome.com">
        https://fontawesome.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
  createData(
    <FaCircleDot />,
    "FaCircleDot",
    "Font Awesome",
    "https://fontawesome.com/",
    <span style={style}>
      Copyright (c) 2024 Fonticons, Inc.{" "}
      <a target="_blank" href="https://fontawesome.com">
        https://fontawesome.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
  createData(
    <FaRegEdit />,
    "FaRegEdit",
    "Font Awesome",
    "https://fontawesome.com/",
    <span style={style}>
      Copyright (c) 2024 Fonticons, Inc.{" "}
      <a target="_blank" href="https://fontawesome.com">
        https://fontawesome.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
  createData(
    <ImCancelCircle />,
    "ImCancelCircle",
    "IcoMoon Free",
    "https://github.com/Keyamoon/IcoMoon-Free",
    <span style={style}>
      Copyright (c){" "}
      <a target="_blank" href="http://keyamoon.com/">
        http://keyamoon.com
      </a>
    </span>,
    "https://creativecommons.org/licenses/by/4.0/deed.en"
  ),
];

const Ccby = () => {
  return (
    <Grid column width={"100%"}>
      <div>
        <Text text={"III."} />
        <Text text={"Icons under Creative Commons CC BY 4.0"} />
        <Text text={"Creative Commons Attribution 4.0 International License"} />
        <span>
          License Deed{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/legalcode.en">
            (See the legal code)
          </a>
        </span>
      </div>

      <Grid column width={"100%"}>
        <Text text={"You are free to:"} />
        <div>
          <Text
            text={
              "1. Share — copy and redistribute the material in any medium or format for any purpose, even commercially."
            }
            small
          />
          <Text
            text={
              "2. Adapt — remix, transform, and build upon the material for any purpose, even commercially."
            }
            small
          />
          <Text
            text={
              "3. The licensor cannot revoke these freedoms as long as you follow the license terms."
            }
            small
          />
        </div>
      </Grid>

      <Grid column width={"100%"}>
        <Text text={"Under the following terms:"} />
        <Text
          text={
            <>
              1. Attribution — You must give{" "}
              <Link
                href={
                  "https://creativecommons.org/licenses/by/4.0/deed.en#ref-appropriate-credit"
                }
                title={"approp riate credit"}
                small
              />
              ,{" "}
              <Link
                href={
                  "https://creativecommons.org/licenses/by/4.0/deed.en#ref-indicate-changes"
                }
                title={"indicate if changes were made"}
                small
              />{" "}
              provide a link to the license, and you may do so in any reasonable
              manner, but not in any way that suggests the licensor endorses you
              or your use.
            </>
          }
          small
        />
        <Text
          text={
            <>
              2. No additional restrictions — You may not apply legal terms or{" "}
              <Link
                href={
                  "https://creativecommons.org/licenses/by/4.0/deed.en#ref-technological-measures"
                }
                title={"technological measures"}
                small
              />{" "}
              that legally restrict others from doing anything the license
              permits.
            </>
          }
          small
        />

        <div>
          <Text text={"Notices:"} />
          <Text
            text={
              <>
                You do not have to comply with the license for elements of the
                material in the public domain or where your use is permitted by
                an applicable{" "}
                <Link
                  href={
                    "https://creativecommons.org/licenses/by/4.0/deed.en#ref-exception-or-limitation"
                  }
                  title={"exception or limitation"}
                  small
                />
                . No warranties are given. The license may not give you all of
                the permissions necessary for your intended use. For example,
                other rights such as{" "}
                <Link
                  href={
                    "https://creativecommons.org/licenses/by/4.0/deed.en#ref-publicity-privacy-or-moral-rights"
                  }
                  title={"publicity, privacy, or moral rights"}
                  small
                />{" "}
                may limit how you use the material.
              </>
            }
            small
          />
        </div>
      </Grid>
      <BasicTable
        header={[
          "Icon: visualized",
          "Icon: name",
          "Offered by",
          "Website	Copyright notice",
          "Copyright notice",
          "Link License (text)",
        ]}
        minWidth={1500}>
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

export default Ccby;
