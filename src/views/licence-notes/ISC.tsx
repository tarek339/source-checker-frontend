import { Flex, Link, Span } from "../../components";
import TextSmall from "../../components/fonts/TextSmall";

const ISC = () => {
  return (
    <section>
      <Flex direction={"column"} gap={"10px"}>
        <div>
          <Span title={"IV."} />
          <Span title={"Icons under Creative Commons CC BY 4.0"} />
          <Span title={"ISC License"} />
          <Link
            url={"https://opensource.org/license/isc-license-txt "}
            title={"https://opensource.org/license/isc-license-txt "}
            fontWeight={0}
            fontSize={14}
          />
          <TextSmall text={"Copyright <YEAR> <OWNER>"} />
        </div>
        <TextSmall
          text={
            "Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies."
          }
        />
        <TextSmall
          uppercase
          text={`
            THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS 
            SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. 
            IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, 
            OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, 
            DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
             ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
            `}
        />
      </Flex>
    </section>
  );
};

export default ISC;
