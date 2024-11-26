import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";

const Dependencies = () => {
  return (
    <section>
      <Flex direction={"column"} gap={"10px"}>
        <div>
          <Span title={"V."} />
          <Span
            title={
              "Required dependencies that are used for the production mode."
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
              <td className="td">@emotion/react</td>
              <td className="td">
                <a href="https://emotion.sh/docs/introduction">
                  https://emotion.sh/docs/introduction
                </a>
                <br />
                <a href="https://github.com/emotion-js/emotion">
                  https://github.com/emotion-js/emotion
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
              <td className="td">@emotion/styled</td>
              <td className="td">
                <a href="https://emotion.sh/docs/styled">
                  https://emotion.sh/docs/styled
                </a>
                <br />
                <a href="https://github.com/emotion-js/emotion">
                  https://github.com/emotion-js/emotion
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
              <td className="td">@mui/material</td>
              <td className="td">
                <a href="https://mui.com/material-ui/">
                  https://mui.com/material-ui/
                </a>
                <br />
                <a href="https://github.com/mui/material-ui">
                  https://github.com/mui/material-ui
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
              <td className="td">@mui/styled-engine-sc</td>
              <td className="td">
                <a href="https://mui.com/material-ui/integrations/styled-components/">
                  https://mui.com/material-ui/integrations/styled-components/
                </a>
                <br />
                <a href="https://github.com/mui/material-ui">
                  https://github.com/mui/material-ui
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
              <td className="td">@reduxjs/toolkit</td>
              <td className="td">
                <a href="https://redux-toolkit.js.org/">
                  https://redux-toolkit.js.org/
                </a>
                <br />
                <a href="https://github.com/reduxjs/redux-toolkit">
                  https://github.com/reduxjs/redux-toolkit
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
              <td className="td">Axios</td>
              <td className="td">
                <a href="https://axios-http.com/">https://axios-http.com/</a>
                <br />
                <a href="https://github.com/axios/axios-docs">
                  https://github.com/axios/axios-docs
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
              <td className="td">html2canvas</td>
              <td className="td">
                <a href="https://html2canvas.hertzen.com/">
                  https://html2canvas.hertzen.com/
                </a>
                <br />
                <a href="https://github.com/niklasvh/html2canvas">
                  https://github.com/niklasvh/html2canvas
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
              <td className="td">i18n-js</td>
              <td className="td">
                <a href="http://i18njs.com/">http://i18njs.com/</a>
                <br />
                <a href="https://github.com/fnando/i18n">
                  https://github.com/fnando/i18n
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
              <td className="td">Moment</td>
              <td className="td">
                <a href="https://momentjs.com/">https://momentjs.com/</a>
                <br />
                <a href="https://github.com/moment/moment/">
                  https://github.com/moment/moment/
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
              <td className="td">qrcode.react</td>
              <td className="td">
                <a href="https://www.npmjs.com/package/qrcode.react">
                  https://www.npmjs.com/package/qrcode.react
                </a>
                <br />
                <a href="https://github.com/zpao/qrcode.react">
                  https://github.com/zpao/qrcode.react
                </a>
              </td>
              <td className="td">ISC</td>
              <td className="td">
                <a href="https://opensource.org/license/isc-license-txt">
                  https://opensource.org/license/isc-license-txt
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">React</td>
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
              <td className="td">react-dom</td>
              <td className="td">
                <a href="https://legacy.reactjs.org/docs/react-dom.html">
                  https://legacy.reactjs.org/docs/react-dom.html
                </a>
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
              <td className="td">react-pro-sidebar</td>
              <td className="td">
                <a href="https://github.com/azouaoui-med/react-pro-sidebar#readme">
                  https://github.com/azouaoui-med/react-pro-sidebar#readme
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
              <td className="td">React-redux</td>
              <td className="td">
                <a href="https://react-redux.js.org/">
                  https://react-redux.js.org/
                </a>
                <br />
                <a href="https://github.com/reduxjs/react-redux">
                  https://github.com/reduxjs/react-redux
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
              <td className="td">react-router-dom</td>
              <td className="td">
                <a href="https://reactrouter.com/en/main">
                  https://reactrouter.com/en/main
                </a>
                <br />
                <a href="https://github.com/remix-run/react-router">
                  https://github.com/remix-run/react-router
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
              <td className="td">react-simple-star-rating</td>
              <td className="td">
                <a href="https://github.com/awran5/react-simple-star-rating#readme">
                  https://github.com/awran5/react-simple-star-rating#readme
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
              <td className="td">react-spinners</td>
              <td className="td">
                <a href="https://www.davidhu.io/react-spinners/">
                  https://www.davidhu.io/react-spinners/
                </a>
                <br />
                <a href="https://github.com/davidhu2000/react-spinners">
                  https://github.com/davidhu2000/react-spinners
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
              <td className="td">socket.io-client</td>
              <td className="td">
                <a href="https://socket.io/docs/v4/client-installation/">
                  https://socket.io/docs/v4/client-installation/
                </a>
                <br />
                <a href="https://github.com/socketio/socket.io">
                  https://github.com/socketio/socket.io
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
              <td className="td">styled-components</td>
              <td className="td">
                <a href="https://styled-components.com/">
                  https://styled-components.com/
                </a>
                <br />
                <a href="https://github.com/styled-components">
                  https://github.com/styled-components
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
              <td className="td">uuid</td>
              <td className="td">
                <a href="https://github.com/uuidjs/uuid#readme">
                  https://github.com/uuidjs/uuid#readme
                </a>
                <br />
                <a href="https://github.com/uuidjs/uuid">
                  https://github.com/uuidjs/uuid
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
              <td className="td">React-icons</td>
              <td className="td">
                <a href="https://react-icons.github.io/react-icons/">
                  https://react-icons.github.io/react-icons/
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
              <td className="td">@cliqz/adblocker-puppeteer</td>
              <td className="td">
                <a href="https://github.com/ghostery/adblocker#readme">
                  https://github.com/ghostery/adblocker#readme
                </a>
                <br />
                <a href="https://github.com/ghostery/adblocker">
                  https://github.com/ghostery/adblocker
                </a>
              </td>
              <td className="td">MPL-2.0</td>
              <td className="td">
                <a href="https://www.mozilla.org/en-US/MPL/2.0/">
                  https://www.mozilla.org/en-US/MPL/2.0/
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">@duckduckgo/autoconsent</td>
              <td className="td">
                <a href="https://github.com/duckduckgo/autoconsent">
                  https://github.com/duckduckgo/autoconsent
                </a>
              </td>
              <td className="td">MPL-2.0</td>
              <td className="td">
                <a href="https://www.mozilla.org/en-US/MPL/2.0/">
                  https://www.mozilla.org/en-US/MPL/2.0/
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">Cors</td>
              <td className="td">
                <a href="https://github.com/expressjs/cors#readme">
                  https://github.com/expressjs/cors#readme
                </a>
                <br />
                <a href="https://github.com/expressjs/cors">
                  https://github.com/expressjs/cors
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
              <td className="td">cross-fetch</td>
              <td className="td">
                <a href="https://github.com/lquixada/cross-fetch">
                  https://github.com/lquixada/cross-fetch
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
              <td className="td">dotenv</td>
              <td className="td">
                <a href="https://github.com/motdotla/dotenv#readme">
                  https://github.com/motdotla/dotenv#readme
                </a>
                <br />
                <a href="https://github.com/motdotla/dotenv">
                  https://github.com/motdotla/dotenv
                </a>
              </td>
              <td className="td">BSD-2-Clause license</td>
              <td className="td">
                <a href="https://opensource.org/license/bsd-2-clause">
                  https://opensource.org/license/bsd-2-clause
                </a>
              </td>
            </tr>

            <tr className="tr">
              <td className="td">express</td>
              <td className="td">
                <a href="https://expressjs.com/">https://expressjs.com/</a>
                <br />
                <a href="https://github.com/expressjs/express">
                  https://github.com/expressjs/express
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
              <td className="td">mongoose</td>
              <td className="td">
                <a href="https://mongoosejs.com/">https://mongoosejs.com/</a>
                <br />
                <a href="https://github.com/Automattic/mongoose">
                  https://github.com/Automattic/mongoose
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
              <td className="td">open-graph-scraper</td>
              <td className="td">
                <a href="https://github.com/jshemas/openGraphScraper#readme">
                  https://github.com/jshemas/openGraphScraper#readme
                </a>
                <br />
                <a href="https://github.com/jshemas/openGraphScraper">
                  https://github.com/jshemas/openGraphScraper
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
              <td className="td">punycode</td>
              <td className="td">
                <a href="https://github.com/mathiasbynens/punycode.js">
                  https://github.com/mathiasbynens/punycode.js
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
              <td className="td">puppeteer</td>
              <td className="td">
                <a href="https://pptr.dev/">https://pptr.dev/</a>
                <br />
                <a href="https://github.com/puppeteer/puppeteer">
                  https://github.com/puppeteer/puppeteer
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
              <td className="td">socket.io</td>
              <td className="td">
                <a href="https://socket.io/">https://socket.io/</a>
                <br />
                <a href="https://github.com/socketio/socket.io">
                  https://github.com/socketio/socket.io
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

export default Dependencies;
