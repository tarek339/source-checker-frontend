import { Flex, Link, Span } from "../../components";
import TextSmall from "../../components/fonts/TextSmall";

const ApacheTwo = () => {
  return (
    <section>
      <Flex direction={"column"} gap={"10px"}>
        <div>
          <Span title={"III."} />
          <Span title={"Icons under Apache License Version 2.0"} />
          <Link
            url={"https://creativecommons.org/licenses/by/4.0/legalcode.en"}
            title={"License Deed (See the legal code)"}
            fontWeight={0}
            fontSize={14}
          />
        </div>
        <Flex direction={"column"} gap={"10px"}>
          <Span title={"You are free to:"} />
          <Flex
            direction={"column"}
            gap={"10px"}
            style={{ paddingLeft: "20px" }}>
            <TextSmall
              text={
                "1. Share — copy and redistribute the material in any medium or format for any purpose, even commercially."
              }
            />
            <TextSmall
              text={
                "2. Adapt — remix, transform, and build upon the material for any purpose, even commercially."
              }
            />
            <TextSmall
              text={
                "3. The licensor cannot revoke these freedoms as long as you follow the license terms."
              }
            />
          </Flex>
        </Flex>
        <Flex direction={"column"} gap={"10px"}>
          <Span title={"Under the following terms:"} />
          <Flex
            direction={"column"}
            gap={"10px"}
            style={{ paddingLeft: "20px" }}>
            <div>
              <span style={{ fontSize: "14px" }}>
                1. Attribution — You must give{" "}
              </span>
              <span style={{ fontSize: "14px" }}>
                <Link
                  url={
                    "https://creativecommons.org/licenses/by/4.0/deed.en#ref-appropriate-credit"
                  }
                  title={"approp riate credit"}
                  fontWeight={0}
                  fontSize={14}
                />
                ,
              </span>
              <span style={{ fontSize: "14px" }}>
                {" "}
                provide a link to the license, and
              </span>
              <span style={{ fontSize: "14px" }}>
                <Link
                  url={
                    "https://creativecommons.org/licenses/by/4.0/deed.en#ref-indicate-changes"
                  }
                  title={"indicate if changes were made "}
                  fontWeight={0}
                  fontSize={0}
                />
              </span>
              <span style={{ fontSize: "14px" }}>
                . You may do so in any reasonable manner, but not in any way
                that suggests the licensor endorses you or your use.
              </span>
            </div>
            <div>
              <span style={{ fontSize: "14px" }}>
                2. No additional restrictions — You may not apply legal terms or{" "}
              </span>
              <span>
                <Link
                  url={
                    "https://creativecommons.org/licenses/by/4.0/deed.en#ref-technological-measures"
                  }
                  title={"technological measures "}
                  fontWeight={0}
                  fontSize={14}
                />
              </span>
              <span style={{ fontSize: "14px" }}>
                that legally restrict others from doing anything the license
                permits.
              </span>
            </div>
          </Flex>
          <div>
            <Span title={"Notices:"} />
            <span style={{ fontSize: "14px" }}>
              You do not have to comply with the license for elements of the
              material in the public domain or where your use is permitted by an
              applicable {" "}
            </span>
            <span style={{ fontSize: "14px" }}>
              <Link
                url={
                  "https://creativecommons.org/licenses/by/4.0/deed.en#ref-exception-or-limitation"
                }
                title={"exception or limitation"}
                fontWeight={0}
                fontSize={14}
              />
              .{" "}
            </span>
            <span style={{ fontSize: "14px" }}>
              No warranties are given. The license may not give you all of the
              permissions necessary for your intended use. For example, other
              rights such as{" "}
            </span>
            <span style={{ fontSize: "14px" }}>
              <Link
                url={
                  "https://creativecommons.org/licenses/by/4.0/deed.en#ref-publicity-privacy-or-moral-rights"
                }
                title={"publicity, privacy, or moral rights"}
                fontWeight={0}
                fontSize={14}
              />
            </span>
            <span style={{ fontSize: "14px" }}>
              {" "}
              may limit how you use the material.
            </span>
          </div>
        </Flex>
      </Flex>
    </section>
  );
};

export default ApacheTwo;
