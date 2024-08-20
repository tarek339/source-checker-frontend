import { Flex, Link, Span } from "../../components";
import TextSmall from "../../components/fonts/TextSmall";

const GeneralInfo = () => {
  return (
    <section>
      <Flex direction={"column"} gap={"10px"}>
        <Span
          title={"A. Website Quellenchecker (Source Checker)"}
          fontSize={18}
        />
        <Span
          title={
            "All scripts for this website are licensed under the MIT-License."
          }
          fontSize={18}
        />
        <Span title={"MIT-License"} />
        <Link
          url={"https://opensource.org/license/mit"}
          title={"https://opensource.org/license/mit"}
          fontWeight={0}
          fontSize={14}
        />
        <TextSmall
          text={
            "Copyright 2024 Hamburg Open Online University (HOOU@HAW) | Tarek Jassine"
          }
        />
        <TextSmall
          text={`Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the “Software”), to deal in the Software without
    restriction, including without limitation the rights to use, copy,
    modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:`}
        />
        <TextSmall
          text={`The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.`}
        />
        <TextSmall
          uppercase
          text={`THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    DEALINGS IN THE SOFTWARE`}
        />
        <Span
          title={"Icons used in the tool Quellenchecker (Source Checker)"}
          fontSize={18}
        />
        <Span title={"Please note: Used Icons available at:"} fontSize={18} />
        <Link
          url={"https://react-icons.github.io/react-icons/"}
          title={"https://react-icons.github.io/react-icons/"}
          fontWeight={0}
          fontSize={18}
        />
      </Flex>
    </section>
  );
};

export default GeneralInfo;
