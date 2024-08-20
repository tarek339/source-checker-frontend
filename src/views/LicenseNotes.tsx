import { useEffect } from "react";
import { useDispatches } from "../hooks";
import {
  FramerMotion,
  ContentContainer,
  Title,
  Flex,
  Span,
  Link,
} from "../components";

export interface ITextSmall {
  text: string | JSX.Element;
  uppercase?: boolean;
  bold?: boolean;
}

const LicenseNotes = () => {
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, []);

  const TextSmall = ({ text, uppercase, bold }: ITextSmall) => {
    return (
      <p
        style={{
          fontSize: 14,
          textTransform: uppercase ? "uppercase" : undefined,
          fontWeight: bold ? "bold" : undefined,
        }}>
        {text}
      </p>
    );
  };
  return (
    <FramerMotion>
      <ContentContainer>
        <Title
          title={
            "License Information for this website and used icons on this website"
          }
        />
        <Flex style={{ paddingLeft: "20px" }} direction={"column"} gap={"30px"}>
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
            </Flex>
          </section>

          <section>
            <Flex direction={"column"} gap={"10px"}>
              <Span
                title={"Icons used in the tool Quellenchecker (Source Checker)"}
                fontSize={18}
              />
              <Span
                title={"Please note: Used Icons available at:"}
                fontSize={18}
              />
              <Link
                url={"https://react-icons.github.io/react-icons/"}
                title={"https://react-icons.github.io/react-icons/"}
                fontWeight={0}
                fontSize={18}
              />
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

          <section>
            <Flex direction={"column"} gap={"10px"}>
              <div>
                <Span title={"III."} />
                <Span title={"Icons under Creative Commons CC BY 4.0"} />
                <Span
                  title={
                    "Creative Commons Attribution 4.0 International License"
                  }
                />
              </div>
              <Span title={"Apache License"} />
              <TextSmall text="Version 2.0, January 2004" />
              <Link
                url={"http://www.apache.org/licenses/ "}
                title={"http://www.apache.org/licenses/ "}
                fontWeight={0}
                fontSize={14}
              />
              <TextSmall
                uppercase
                text={`TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION`}
              />
              <TextSmall text="1. Definitions." bold />
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"License" shall mean the terms and conditions for use, reproduction, 
                  and distribution as defined by Sections 1 through 9 of this document.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"Legal Entity" shall mean the union of the acting entity and all other entities that control, 
                  are controlled by, or are under common control with that entity. 
                  For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) 
                  or more of the outstanding shares, or (iii) beneficial ownership of such entity.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"You" (or "Your") shall mean the union of the acting entity and all other entities that control, 
                  are controlled by, or are under common control with that entity. 
                  For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) 
                  or more of the outstanding shares, or (iii) beneficial ownership of such entity.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"Source" form shall mean the preferred form for making modifications, 
                  including but not limited to software source code, 
                  documentation source, and configuration files.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, 
                  including but not limited to compiled object code, generated documentation, 
                  and conversions to other media types.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"Work" shall mean the work of authorship, whether in Source or Object form, 
                  made available under the License, as indicated by a copyright notice that is 
                  included in or attached to the work (an example is provided in the Appendix below).`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"Derivative Works" shall mean any work, whether in Source or Object form, 
                  that is based on (or derived from) the Work and for which the editorial revisions, annotations, 
                  elaborations, or other modifications represent, as a whole, 
                  an original work of authorship. For the purposes of this License, 
                  Derivative Works shall not include works that remain separable from, 
                  or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"Contribution" hall mean any work of authorship, including the original version of the Work and any modifications or 
                  additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor 
                  for inclusion in the Work by the copyright owner or by an individual or 
                  Legal Entity authorized to submit on behalf of the copyright owner. 
                  For the purposes of this definition, "submitted" means any form of electronic, 
                  verbal, or written communication sent to the Licensor or its representatives, 
                  including but not limited to communication on electronic mailing lists, 
                  source code control systems, and issue tracking systems that are managed by, 
                  or on behalf of, the Licensor for the purpose of discussing and improving the Work, 
                  but excluding communication that is conspicuously marked or otherwise designated 
                  in writing by the copyright owner as "Not a Contribution."`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution 
                  has been received by Licensor and subsequently incorporated within the Work.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants 
                  to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, 
                  irrevocable copyright license to reproduce, prepare Derivative Works of, 
                  publicly display, publicly perform, sublicense, and distribute the Work and such Derivative 
                  Works in Source or Object form.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, 
                  non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent 
                  license to make, have made, use, offer to sell, sell, import, 
                  and otherwise transfer the Work, where such license applies only to those patent claims 
                  licensable by such Contributor that are necessarily infringed by their Contribution(s) alone 
                  or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. 
                  If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) 
                  alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, 
                  then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.`}
                />
              </Flex>
              <Flex direction={"column"} gap={"5px"}>
                <TextSmall
                  text={`4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, 
                  with or without modifications, and in Source or Object form, 
                  provided that You meet the following conditions:`}
                />
                <Flex
                  direction={"column"}
                  gap={"10px"}
                  style={{
                    paddingLeft: "20px",
                  }}>
                  <Flex direction={"row"} gap={"5px"}>
                    <TextSmall text="1." />
                    <TextSmall
                      text={`You must give any other recipients of the Work or Derivative Works a copy of this License; and`}
                    />
                  </Flex>
                  <Flex direction={"row"} gap={"5px"}>
                    <TextSmall text="2." />
                    <TextSmall
                      text={`You must cause any modified files to carry prominent notices stating that You changed the files; and`}
                    />
                  </Flex>
                  <Flex direction={"row"} gap={"5px"}>
                    <TextSmall text="3." />
                    <TextSmall
                      text={`You must retain, in the Source form of any Derivative Works that You distribute, 
                      all copyright, patent, trademark, and attribution notices from the Source form of the Work, 
                      excluding those notices that do not pertain to any part of the Derivative Works; and`}
                    />
                  </Flex>
                  <Flex direction={"row"} gap={"5px"}>
                    <TextSmall text="4." />
                    <TextSmall
                      text={`If the Work includes a "NOTICE" text file as part of its distribution, 
                      then any Derivative Works that You distribute must include a readable copy of 
                      the attribution notices contained within such NOTICE file, 
                      excluding those notices that do not pertain to any part of the Derivative Works, 
                      in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; 
                      within the Source form or documentation, if provided along with the Derivative Works; 
                      or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. 
                      The contents of the NOTICE file are for informational purposes only and do not modify the License. 
                      You may add Your own attribution notices within Derivative Works that You distribute, 
                      alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution 
                      notices cannot be construed as modifying the License. 
                      You may add Your own copyright statement to Your modifications and may provide additional 
                      or different license terms and conditions for use, 
                      reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, 
                      provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions 
                      stated in this License.`}
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`5. Submission of Contributions. Unless You explicitly state otherwise, 
                  any Contribution intentionally submitted for inclusion in the Work by You to the Licensor 
                  shall be under the terms and conditions of this License, without any additional terms or conditions. 
                  Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate 
                  license agreement you may have executed with Licensor regarding such Contributions.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`6. Trademarks. This License does not grant permission to use the trade names, trademarks, 
                  service marks, or product names of the Licensor, except as required for reasonable and 
                  customary use in describing the origin of the Work and 
                  reproducing the content of the NOTICE file.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, 
                  Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, 
                  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, 
                  any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. 
                  You are solely responsible for determining the appropriateness of using or redistributing the Work and assume 
                  any risks associated with Your exercise 
                  of permissions under this License.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), 
                  contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) 
                  or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, 
                  indirect, special, incidental, or consequential damages of any character arising as a result 
                  of this License or out of the use or inability to use the Work (including but not limited to 
                  damages for loss of goodwill, work stoppage, computer failure or malfunction, 
                  or any and all other commercial damages or losses), even if such Contributor has been 
                  advised of the possibility of such damages.`}
                />
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <TextSmall
                  text={`9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, 
                  You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, 
                  or other liability obligations and/or rights consistent with this License. However, 
                  in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, 
                  not on behalf of any other Contributor, and only if You agree to indemnify, defend, 
                  and hold each Contributor harmless for any liability incurred by, or claims asserted against, 
                  such Contributor by reason of your accepting any such warranty or additional liability.`}
                />
              </Flex>
            </Flex>
            <TextSmall text={`END OF TERMS AND CONDITIONS`} uppercase />
          </section>
          <section>
            <Flex direction={"column"} gap={"10px"}>
              <div>
                <Span title={"II."} />
                <Span title={"Icons under Apache License Version 2.0"} />
                <Link
                  url={
                    "https://creativecommons.org/licenses/by/4.0/legalcode.en"
                  }
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
                      . You may do so in any reasonable manner, but not in any
                      way that suggests the licensor endorses you or your use.
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: "14px" }}>
                      2. No additional restrictions — You may not apply legal
                      terms or{" "}
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
                      that legally restrict others from doing anything the
                      license permits.
                    </span>
                  </div>
                </Flex>

                <div>
                  <Span title={"Notices:"} />
                  <span style={{ fontSize: "14px" }}>
                    You do not have to comply with the license for elements of
                    the material in the public domain or where your use is
                    permitted by an applicable {" "}
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
                    No warranties are given. The license may not give you all of
                    the permissions necessary for your intended use. For
                    example, other rights such as{" "}
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
          <section>
            <Flex direction={"column"} gap={"10px"}>
              <div>
                <Span title={"III."} />
                <Span title={"Icons under Creative Commons CC BY 4.0"} />
                <Span title={"ISC License"} />
                <Link
                  url={"https://opensource.org/license/isc-license-txt "}
                  title={"https://opensource.org/license/isc-license-txt "}
                  fontWeight={0}
                  fontSize={14}
                />
                <TextSmall text={"Copyright <YEAR> <OWNER>"} />
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
              </div>
            </Flex>
          </section>
        </Flex>
      </ContentContainer>
    </FramerMotion>
  );
};

export default LicenseNotes;
