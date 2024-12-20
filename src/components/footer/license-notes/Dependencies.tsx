import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import BasicTable from "./Table";
import { TableBody, TableCell, TableRow } from "@mui/material";
import Link from "../../fonts/Link";

function createData(
  name: string,
  website: string,
  gitHub: string,
  license: string,
  licensetext: string
) {
  return {
    name,
    website,
    gitHub,
    license,
    licensetext,
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
    "@emotion/react",
    "https://emotion.sh/docs/introduction",
    "https://github.com/emotion-js/emotion",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@emotion/styled",
    "https://emotion.sh/docs/styled",
    "https://github.com/emotion-js/emotion",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@mui/material",
    "https://mui.com/material-ui/",
    "https://github.com/mui/material-ui",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@mui/styled-engine-sc",
    "https://mui.com/material-ui/integrations/styled-components/",
    "https://github.com/mui/material-ui",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@reduxjs/toolkit",
    "https://redux-toolkit.js.org/",
    "https://github.com/reduxjs/redux-toolkit",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "Axios",
    "https://axios-http.com/",
    "https://github.com/axios/axios-docs",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "html2canvas",
    "https://html2canvas.hertzen.com/",
    "https://github.com/niklasvh/html2canvas",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "i18n-js",
    "http://i18njs.com/",
    "https://github.com/fnando/i18n",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "Moment",
    "https://momentjs.com/",
    "https://github.com/moment/moment/",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "qrcode.react",
    "https://www.npmjs.com/package/qrcode.react",
    "https://github.com/zpao/qrcode.react",
    "ISC",
    "https://opensource.org/license/isc-license-txt"
  ),
  createData(
    "React",
    "https://react.dev/",
    "https://github.com/facebook/react",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "react-dom",
    "https://legacy.reactjs.org/docs/react-dom.html",
    "https://github.com/facebook/react",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "react-pro-sidebar",
    "https://github.com/azouaoui-med/react-pro-sidebar#readme",
    "https://github.com/azouaoui-med/react-pro-sidebar#readme",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "React-redux",
    "https://react-redux.js.org/",
    "https://github.com/reduxjs/react-redux",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "react-router-dom",
    "https://reactrouter.com/en/main",
    "https://github.com/remix-run/react-router",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "react-simple-star-rating",
    "https://github.com/awran5/react-simple-star-rating#readme",
    "https://github.com/awran5/react-simple-star-rating#readme",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "react-spinners",
    "https://www.davidhu.io/react-spinners/",
    "https://github.com/davidhu2000/react-spinners",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "socket.io-client",
    "https://socket.io/docs/v4/client-installation/",
    "https://github.com/socketio/socket.io",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "styled-components",
    "https://styled-components.com/",
    "https://github.com/styled-components",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "uuid",
    "https://github.com/uuidjs/uuid#readme",
    "https://github.com/uuidjs/uuid",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "React-icons",
    "https://react-icons.github.io/react-icons/",
    "https://react-icons.github.io/react-icons/",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@cliqz/adblocker-puppeteer",
    "https://github.com/ghostery/adblocker#readme",
    "https://github.com/ghostery/adblocker",
    "MPL-2.0",
    "https://www.mozilla.org/en-US/MPL/2.0/"
  ),
  createData(
    "@duckduckgo/autoconsent",
    "https://github.com/duckduckgo/autoconsent",
    "https://github.com/duckduckgo/autoconsent",
    "MPL-2.0",
    "https://www.mozilla.org/en-US/MPL/2.0/"
  ),
  createData(
    "Cors",
    "https://github.com/expressjs/cors#readme",
    "https://github.com/expressjs/cors",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "cross-fetch",
    "https://github.com/lquixada/cross-fetch",
    "https://github.com/lquixada/cross-fetch",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "dotenv",
    "https://github.com/motdotla/dotenv#readme",
    "https://github.com/motdotla/dotenv",
    "BSD-2-Clause license",
    "https://opensource.org/license/bsd-2-clause"
  ),
  createData(
    "express",
    "https://expressjs.com/",
    "https://github.com/expressjs/express",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "mongoose",
    "https://mongoosejs.com/",
    "https://github.com/Automattic/mongoose",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "open-graph-scraper",
    "https://github.com/jshemas/openGraphScraper#readme",
    "https://github.com/jshemas/openGraphScraper",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "punycode",
    "https://github.com/mathiasbynens/punycode.js",
    "https://github.com/mathiasbynens/punycode.js",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "puppeteer",
    "https://pptr.dev/",
    "https://github.com/puppeteer/puppeteer",
    "Apache-2.0 license",
    "https://www.apache.org/licenses/LICENSE-2.0"
  ),
  createData(
    "socket.io",
    "https://socket.io/",
    "https://github.com/socketio/socket.io",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
];

const Dependencies = () => {
  return (
    <section>
      <Flex direction={"column"} gap={"10px"}>
        <div>
          <Span title={"V."} />
          <Span
            title={
              "Required dependencies that are used at application runtime."
            }
          />
        </div>
        <BasicTable
          header={["Name", "Website", "GitHub", "License", "License text"]}
          minWidth={1400}>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell sx={sx}>{row.name}</TableCell>
                <TableCell sx={sx}>
                  <Link url={row.website} title={row.website} />
                </TableCell>
                <TableCell sx={sx}>
                  <Link url={row.gitHub} title={row.gitHub} />
                </TableCell>
                <TableCell sx={sx}>{row.license}</TableCell>
                <TableCell sx={sx}>
                  <Link url={row.licensetext} title={row.licensetext} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </BasicTable>
      </Flex>
    </section>
  );
};

export default Dependencies;
