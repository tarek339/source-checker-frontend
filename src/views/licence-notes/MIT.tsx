import { Flex, Link, Span } from "../../components";
import TextSmall from "../../components/fonts/TextSmall";

const MIT = () => {
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
      </Flex>
    </section>
  );
};

export default MIT;
