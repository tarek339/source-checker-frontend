import { TableBody, TableCell, TableRow } from "@mui/material";
import BasicTable from "./Table";
import Grid from "../../mui/Grid";
import Text from "../../mui/Text";
import { Link } from "../..";

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
    "typescript",
    "https://www.typescriptlang.org/",
    "https://github.com/microsoft/TypeScript/#readme",
    "Apache-2.0 license",
    "https://www.apache.org/licenses/LICENSE-2.0"
  ),
  createData(
    "@types/i18n-js",
    "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/i18n-js",
    "https://github.com/DefinitelyTyped/DefinitelyTyped",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@types/node",
    "https://www.npmjs.com/package/@types/node",
    "https://github.com/DefinitelyTyped/DefinitelyTyped",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@types/react",
    "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react",
    "https://github.com/DefinitelyTyped/DefinitelyTyped",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@types/react-dom",
    "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom",
    "https://github.com/DefinitelyTyped/DefinitelyTyped",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@types/uuid",
    "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/uuid",
    "https://github.com/DefinitelyTyped/DefinitelyTyped",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@typescript-eslint/eslint-plugin",
    "https://typescript-eslint.io/packages/eslint-plugin/",
    "https://github.com/typescript-eslint/typescript-eslint",
    "MIT license",
    "https://opensource.org/license/mit"
  ),

  createData(
    "@typescript-eslint/parser",
    "https://typescript-eslint.io/packages/parser/",
    "https://github.com/typescript-eslint/typescript-eslint",
    "BSD-2-Clause",
    "https://opensource.org/license/bsd-2-clause"
  ),
  createData(
    "@vitejs/plugin-react-swc",
    "https://github.com/vitejs/vite-plugin-react-swc",
    "https://github.com/vitejs/vite-plugin-react-swc",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "autoprefixer",
    "https://github.com/postcss/autoprefixer#readme",
    "https://github.com/postcss/autoprefixer",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "Eslint",
    "https://eslint.org/",
    "https://github.com/eslint/eslint",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "eslint-plugin-react-hooks",
    "https://react.dev/",
    "https://github.com/facebook/react",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "eslint-plugin-react-refresh",
    "https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme",
    "https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "Vite",
    "https://vite.dev/",
    "https://github.com/vitejs/vite",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "vite-tsconfig-paths",
    "https://github.com/aleclarson/vite-tsconfig-paths#readme",
    "https://github.com/aleclarson/vite-tsconfig-paths",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@types/cors",
    "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/cors",
    "https://github.com/DefinitelyTyped/DefinitelyTyped",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@types/encodeurl",
    "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/encodeurl",
    "https://github.com/DefinitelyTyped/DefinitelyTyped",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@types/express",
    "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/express",
    "https://github.com/DefinitelyTyped/DefinitelyTyped",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "@types/jsonwebtoken",
    "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jsonwebtoken",
    "https://github.com/DefinitelyTyped/DefinitelyTyped",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "nodemon",
    "https://nodemon.io/",
    "https://github.com/remy/nodemon#nodemond",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
  createData(
    "ts-node",
    "https://typestrong.org/ts-node/",
    "https://github.com/TypeStrong/ts-node",
    "MIT license",
    "https://opensource.org/license/mit"
  ),
];

const DevDependencies = () => {
  return (
    <Grid column width={"100%"}>
      <div>
        <Text text={"VI."} />
        <Text
          text={
            "Required dev dependencies that are used for the development mode."
          }
        />
      </div>
      <BasicTable
        minWidth={1700}
        header={["Name", "Website", "GitHub", "License", "License Text"]}>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell sx={sx}>{row.name}</TableCell>
              <TableCell sx={sx}>
                <Link xs href={row.website} title={row.website} />
              </TableCell>
              <TableCell sx={sx}>
                <Link xs href={row.gitHub} title={row.gitHub} />
              </TableCell>
              <TableCell sx={sx}>{row.license}</TableCell>
              <TableCell sx={sx}>
                <Link xs href={row.licensetext} title={row.licensetext} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </BasicTable>
    </Grid>
  );
};

export default DevDependencies;
