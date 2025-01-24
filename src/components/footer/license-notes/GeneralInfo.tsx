import { Link } from "../..";
import Grid from "../../mui/Grid";
import Text from "../../mui/Text";

const GeneralInfo = () => {
  return (
    <Grid column width={"100%"}>
      <Text text={"A. Website Quellenchecker (Source Checker)"} />
      <Text
        text={
          "All scripts for this website are licensed under the MIT-License."
        }
      />
      <Text text={"MIT-License"} />
      <Link href={"https://opensource.org/license/mit"} />
      <Text
        text={
          "Copyright 2024 Hamburg Open Online University (HOOU@HAW) | Tarek Jassine"
        }
        small
      />
      <Text
        text={`Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the “Software”), to deal in the Software without
    restriction, including without limitation the rights to use, copy,
    modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:`}
        small
      />
      <Text
        text={`The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.`}
        small
      />
      <Text
        uppercase
        text={`THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    DEALINGS IN THE SOFTWARE`}
        small
      />

      <Text
        text={"B. Icons used in the tool Quellenchecker (Source Checker)"}
      />
      <div>
        <Text text={"Please note: Used Icons available at:"} />
        <Link href={"https://react-icons.github.io/react-icons"} />
      </div>
    </Grid>
  );
};

export default GeneralInfo;
