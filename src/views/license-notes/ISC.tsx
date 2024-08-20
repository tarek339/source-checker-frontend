import { LuCircleSlash2, LuDot } from "react-icons/lu";
import { Flex, Link, Span } from "../../components";
import TextSmall from "../../components/fonts/TextSmall";
import IconsListing from "./IconsListing";

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
        <IconsListing
          children={
            <>
              <tr className="tr">
                <td className="td">
                  <LuCircleSlash2 />
                </td>
                <td className="td">LuCircleSlash2</td>
                <td className="td">Lucide</td>
                <td className="td">
                  <a href="https://lucide.dev/">https://lucide.dev/</a>
                </td>
                <td className="td">Copyright (c) 2022 Lucide Contributors</td>
                <td className="td">
                  <a href="https://opensource.org/license/isc-license-txt">
                    https://opensource.org/license/isc-license-txt
                  </a>
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  <LuDot />
                </td>
                <td className="td">LuDot</td>
              </tr>
            </>
          }
        />
      </Flex>
    </section>
  );
};

export default ISC;
