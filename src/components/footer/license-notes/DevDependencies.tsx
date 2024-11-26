import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";

const DevDependencies = () => {
  return (
    <section>
      <Flex direction={"column"} gap={"10px"}>
        <div>
          <Span title={"VI."} />
          <Span
            title={
              "Required dev dependencies that are used for the development mode."
            }
          />
        </div>
        <table className="table">
          <thead className="thead">
            <tr className="tr">
              <th className="th">Name</th>
              <th className="th">Website</th>
              <th className="th">License</th>
              <th className="th">Link License (text)</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr className="tr">
              <td className="td">typescript</td>
              <td className="td">
                <a href="https://www.typescriptlang.org/">
                  https://www.typescriptlang.org/
                </a>
                <br />
                <a href="https://github.com/microsoft/TypeScript/#readme">
                  https://github.com/microsoft/TypeScript/#readme
                </a>
              </td>
              <td className="td">Apache-2.0 license</td>
              <td className="td">
                <a href="https://www.apache.org/licenses/LICENSE-2.0">
                  https://www.apache.org/licenses/LICENSE-2.0
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@types/i18n-js</td>
              <td className="td">
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/i18n-js">
                  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/i18n-js
                </a>
                <br />
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
                  https://github.com/DefinitelyTyped/DefinitelyTyped
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@types/node</td>
              <td className="td">
                <a href="https://www.npmjs.com/package/@types/node">
                  https://www.npmjs.com/package/@types/node
                </a>
                <br />
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
                  https://github.com/DefinitelyTyped/DefinitelyTyped
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@types/react</td>
              <td className="td">
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react">
                  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react
                </a>
                <br />
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
                  https://github.com/DefinitelyTyped/DefinitelyTyped
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@types/react-dom</td>
              <td className="td">
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom">
                  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom
                </a>
                <br />
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
                  https://github.com/DefinitelyTyped/DefinitelyTyped
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@types/uuid</td>
              <td className="td">
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/uuid">
                  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/uuid
                </a>
                <br />
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
                  https://github.com/DefinitelyTyped/DefinitelyTyped
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@typescript-eslint/eslint-plugin</td>
              <td className="td">
                <a href="https://typescript-eslint.io/packages/eslint-plugin/">
                  https://typescript-eslint.io/packages/eslint-plugin/
                </a>
                <br />
                <a href="https://github.com/typescript-eslint/typescript-eslint">
                  https://github.com/typescript-eslint/typescript-eslint
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@typescript-eslint/parser</td>
              <td className="td">
                <a href="https://typescript-eslint.io/packages/parser/">
                  https://typescript-eslint.io/packages/parser/
                </a>
                <br />
                <a href="https://github.com/typescript-eslint/typescript-eslint">
                  https://github.com/typescript-eslint/typescript-eslint
                </a>
              </td>
              <td className="td">BSD-2-Clause</td>
              <td className="td">
                <a href="https://opensource.org/license/bsd-2-clause">
                  https://opensource.org/license/bsd-2-clause
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@vitejs/plugin-react-swc</td>
              <td className="td">
                <a href="https://github.com/vitejs/vite-plugin-react-swc">
                  https://github.com/vitejs/vite-plugin-react-swc
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">autoprefixer</td>
              <td className="td">
                <a href="https://github.com/postcss/autoprefixer#readme">
                  https://github.com/postcss/autoprefixer#readme
                </a>
                <br />
                <a href="https://github.com/postcss/autoprefixer">
                  https://github.com/postcss/autoprefixer
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">Eslint</td>
              <td className="td">
                <a href="https://eslint.org/">https://eslint.org/</a>
                <br />
                <a href="https://github.com/eslint/eslint">
                  https://github.com/eslint/eslint
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">eslint-plugin-react-hooks</td>
              <td className="td">
                <a href="https://react.dev/">https://react.dev/</a>
                <br />
                <a href="https://github.com/facebook/react">
                  https://github.com/facebook/react
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">eslint-plugin-react-refresh</td>
              <td className="td">
                <a href="https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme">
                  https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme
                </a>
                <br />
                <a href="https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme">
                  https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">Vite</td>
              <td className="td">
                <a href="https://vite.dev/">https://vite.dev/</a>
                <br />
                <a href="https://github.com/vitejs/vite">
                  https://github.com/vitejs/vite
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">vite-tsconfig-paths</td>
              <td className="td">
                <a href="https://github.com/aleclarson/vite-tsconfig-paths#readme">
                  https://github.com/aleclarson/vite-tsconfig-paths#readme
                </a>
                <br />
                <a href="https://github.com/aleclarson/vite-tsconfig-paths">
                  https://github.com/aleclarson/vite-tsconfig-paths
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@types/cors</td>
              <td className="td">
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/cors">
                  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/cors
                </a>
                <br />
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
                  https://github.com/DefinitelyTyped/DefinitelyTyped
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@types/encodeurl</td>
              <td className="td">
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/encodeurl">
                  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/encodeurl
                </a>
                <br />
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
                  https://github.com/DefinitelyTyped/DefinitelyTyped
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@types/express</td>
              <td className="td">
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/express">
                  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/express
                </a>
                <br />
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
                  https://github.com/DefinitelyTyped/DefinitelyTyped
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@types/jsonwebtoken</td>
              <td className="td">
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jsonwebtoken">
                  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jsonwebtoken
                </a>
                <br />
                <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
                  https://github.com/DefinitelyTyped/DefinitelyTyped
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">nodemon</td>
              <td className="td">
                <a href="https://nodemon.io/">https://nodemon.io/</a>
                <br />
                <a href="https://github.com/remy/nodemon#nodemond">
                  https://github.com/remy/nodemon#nodemond
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">ts-node</td>
              <td className="td">
                <a href="https://typestrong.org/ts-node/">
                  https://typestrong.org/ts-node/
                </a>
                <br />
                <a href="https://github.com/TypeStrong/ts-node">
                  https://github.com/TypeStrong/ts-node
                </a>
              </td>
              <td className="td">MIT license</td>
              <td className="td">
                <a href="https://opensource.org/license/mit">
                  https://opensource.org/license/mit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Flex>
    </section>
  );
};

export default DevDependencies;
