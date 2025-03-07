import {
  MdDelete,
  MdHome,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdOutlineCheckCircle,
} from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { GrZoomIn } from "react-icons/gr";
import BasicTable from "./Table";
import { TableBody, TableCell, TableRow } from "@mui/material";
import Grid from "../../mui/Grid";
import { Link, Text } from "../..";
import { JSX } from "react";

function createData(
  IconVisualized: JSX.Element,
  IconName: string,
  OfferedBy: string,
  Website: string,
  CopyrightNotice: string | JSX.Element,
  LinkLicense: string
) {
  return {
    IconVisualized,
    IconName,
    OfferedBy,
    Website,
    CopyrightNotice,
    LinkLicense,
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
    <MdOutlineCheckCircle />,
    "MdOutlineCheckCircle",
    "Material Design icons",
    "https://google.github.io/material-design-icons/",
    "Copyright (c) Material Design icons by Google (Material Symbols)",
    "https://www.apache.org/licenses/LICENSE-2.0"
  ),
  createData(
    <MdOutlineArrowForwardIos />,
    "MdOutlineArrowForwardIos",
    "Material Design icons",
    "https://google.github.io/material-design-icons/",
    "Copyright (c) Material Design icons by Google (Material Symbols)",
    "https://www.apache.org/licenses/LICENSE-2.0"
  ),
  createData(
    <MdOutlineArrowBackIos />,
    "MdOutlineArrowBackIos",
    "Material Design icons",
    "https://google.github.io/material-design-icons/",
    "Copyright (c) Material Design icons by Google (Material Symbols)",
    "https://www.apache.org/licenses/LICENSE-2.0"
  ),
  createData(
    <MdHome />,
    "MdHome",
    "Material Design icons",
    "https://google.github.io/material-design-icons/",
    "Copyright (c) Material Design icons by Google (Material Symbols)",
    "https://www.apache.org/licenses/LICENSE-2.0"
  ),
  createData(
    <MdDelete />,
    "MdDelete",
    "Material Design icons",
    "https://google.github.io/material-design-icons/",
    "Copyright (c) Material Design icons by Google (Material Symbols)",
    "https://www.apache.org/licenses/LICENSE-2.0"
  ),
  createData(
    <RiStarSFill />,
    "RiStarSFill",
    "Remix Icon",
    "https://github.com/Remix-Design/RemixIcon",
    "Copyright (c) Remix Icon",
    "https://www.apache.org/licenses/LICENSE-2.0"
  ),
  createData(
    <GrZoomIn />,
    "GrZoomIn",
    "Grommet-Icons",
    "https://github.com/grommet/grommet-icons",
    "Copyright (c) 2017-2024 Hewlett Packard Enterprise Development LP.",
    "https://www.apache.org/licenses/LICENSE-2.0"
  ),
];

const Apache = () => {
  return (
    <Grid column width={"100%"}>
      <div>
        <Text text={"II."} />
        <Text text={"Icons under Apache License Version 2.0"} />
      </div>
      <Text text={"Apache License"} />
      <Text text="Version 2.0, January 2004" small />
      <Link href={"http://www.apache.org/licenses"} />
      <Text
        uppercase
        text={`TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION`}
        small
      />
      <Text text="1. Definitions." bold small />
      <Text
        text={
          <>
            <strong>"License"</strong> shall mean the terms and conditions for
            use, reproduction, and distribution as defined by Sections 1 through
            9 of this document.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>"Licensor"</strong> shall mean the copyright owner or entity
            authorized by the copyright owner that is granting the License.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>"Legal Entity"</strong> shall mean the union of the acting
            entity and all other entities that control, are controlled by, or
            are under common control with that entity. For the purposes of this
            definition, "control" means (i) the power, direct or indirect, to
            cause the direction or management of such entity, whether by
            contract or otherwise, or (ii) ownership of fifty percent (50%) or
            more of the outstanding shares, or (iii) beneficial ownership of
            such entity.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>"You" (or "Your")</strong> shall mean the union of the
            acting entity and all other entities that control, are controlled
            by, or are under common control with that entity. For the purposes
            of this definition, "control" means (i) the power, direct or
            indirect, to cause the direction or management of such entity,
            whether by contract or otherwise, or (ii) ownership of fifty percent
            (50%) or more of the outstanding shares, or (iii) beneficial
            ownership of such entity.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>"Source"</strong> form shall mean the preferred form for
            making modifications, including but not limited to software source
            code, documentation source, and configuration files.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>"Object"</strong> form shall mean any form resulting from
            mechanical transformation or translation of a Source form, including
            but not limited to compiled object code, generated documentation,
            and conversions to other media types.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>"Work"</strong> shall mean the work of authorship, whether
            in Source or Object form, made available under the License, as
            indicated by a copyright notice that is included in or attached to
            the work (an example is provided in the Appendix below).
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>"Derivative Works"</strong> shall mean any work, whether in
            Source or Object form, that is based on (or derived from) the Work
            and for which the editorial revisions, annotations, elaborations, or
            other modifications represent, as a whole, an original work of
            authorship. For the purposes of this License, Derivative Works shall
            not include works that remain separable from, or merely link (or
            bind by name) to the interfaces of, the Work and Derivative Works
            thereof.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>"Contribution"</strong> hall mean any work of authorship,
            including the original version of the Work and any modifications or
            additions to that Work or Derivative Works thereof, that is
            intentionally submitted to Licensor for inclusion in the Work by the
            copyright owner or by an individual or Legal Entity authorized to
            submit on behalf of the copyright owner. For the purposes of this
            definition, <strong>"submitted"</strong> means any form of
            electronic, verbal, or written communication sent to the Licensor or
            its representatives, including but not limited to communication on
            electronic mailing lists, source code control systems, and issue
            tracking systems that are managed by, or on behalf of, the Licensor
            for the purpose of discussing and improving the Work, but excluding
            communication that is conspicuously marked or otherwise designated
            in writing by the copyright owner as{" "}
            <strong>"Not a Contribution"</strong>.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>"Contributor"</strong> shall mean Licensor and any
            individual or Legal Entity on behalf of whom a Contribution has been
            received by Licensor and subsequently incorporated within the Work.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>2. Grant of Copyright License.</strong> Subject to the terms
            and conditions of this License, each Contributor hereby grants to
            You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
            irrevocable copyright license to reproduce, prepare Derivative Works
            of, publicly display, publicly perform, sublicense, and distribute
            the Work and such Derivative Works in Source or Object form.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>3. Grant of Patent License.</strong> Subject to the terms
            and conditions of this License, each Contributor hereby grants to
            You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
            irrevocable (except as stated in this section) patent license to
            make, have made, use, offer to sell, sell, import, and otherwise
            transfer the Work, where such license applies only to those patent
            claims licensable by such Contributor that are necessarily infringed
            by their Contribution(s) alone or by combination of their
            Contribution(s) with the Work to which such Contribution(s) was
            submitted. If You institute patent litigation against any entity
            (including a cross-claim or counterclaim in a lawsuit) alleging that
            the Work or a Contribution incorporated within the Work constitutes
            direct or contributory patent infringement, then any patent licenses
            granted to You under this License for that Work shall terminate as
            of the date such litigation is filed.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>4. Redistribution.</strong> You may reproduce and distribute
            copies of the Work or Derivative Works thereof in any medium, with
            or without modifications, and in Source or Object form, provided
            that You meet the following conditions:
          </>
        }
        small
      />
      <Grid column width={"100%"}>
        <div>
          <Text text="1." small />
          <Text
            text={`You must give any other recipients of the Work or Derivative Works a copy of this License; and`}
            small
          />
        </div>
        <div>
          <Text text="2." />
          <Text
            text={`You must cause any modified files to carry prominent notices stating that You changed the files; and`}
            small
          />
        </div>
        <div>
          <Text text="3." small />
          <Text
            text={`You must retain, in the Source form of any Derivative Works that You distribute, 
              all copyright, patent, trademark, and attribution notices from the Source form of the Work, 
              excluding those notices that do not pertain to any part of the Derivative Works; and`}
            small
          />
        </div>
        <div>
          <Text text="4." small />
          <Text
            text={
              <>
                If the Work includes a <strong>"NOTICE"</strong> text file as
                part of its distribution, then any Derivative Works that You
                distribute must include a readable copy of the attribution
                notices contained within such NOTICE file, excluding those
                notices that do not pertain to any part of the Derivative Works,
                in at least one of the following places: within a NOTICE text
                file distributed as part of the Derivative Works; within the
                Source form or documentation, if provided along with the
                Derivative Works; or, within a display generated by the
                Derivative Works, if and wherever such third-party notices
                normally appear. The contents of the NOTICE file are for
                informational purposes only and do not modify the License. You
                may add Your own attribution notices within Derivative Works
                that You distribute, alongside or as an addendum to the NOTICE
                text from the Work, provided that such additional attribution
                notices cannot be construed as modifying the License. You may
                add Your own copyright statement to Your modifications and may
                provide additional or different license terms and conditions for
                use, reproduction, or distribution of Your modifications, or for
                any such Derivative Works as a whole, provided Your use,
                reproduction, and distribution of the Work otherwise complies
                with the conditions stated in this License.
              </>
            }
            small
          />
        </div>
      </Grid>
      <Text
        text={
          <>
            <strong>5. Submission of Contributions.</strong> Unless You
            explicitly state otherwise, any Contribution intentionally submitted
            for inclusion in the Work by You to the Licensor shall be under the
            terms and conditions of this License, without any additional terms
            or conditions. Notwithstanding the above, nothing herein shall
            supersede or modify the terms of any separate license agreement you
            may have executed with Licensor regarding such Contributions.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>6. Trademarks.</strong> This License does not grant
            permission to use the trade names, trademarks, service marks, or
            product names of the Licensor, except as required for reasonable and
            customary use in describing the origin of the Work and reproducing
            the content of the NOTICE file.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>7. Disclaimer of Warranty.</strong> Unless required by
            applicable law or agreed to in writing, Licensor provides the Work
            (and each Contributor provides its Contributions) on an "AS IS"
            BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
            or implied, including, without limitation, any warranties or
            conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS
            FOR A PARTICULAR PURPOSE. You are solely responsible for determining
            the appropriateness of using or redistributing the Work and assume
            any risks associated with Your exercise of permissions under this
            License.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>8. Limitation of Liability.</strong> In no event and under
            no legal theory, whether in tort (including negligence), contract,
            or otherwise, unless required by applicable law (such as deliberate
            and grossly negligent acts) or agreed to in writing, shall any
            Contributor be liable to You for damages, including any direct,
            indirect, special, incidental, or consequential damages of any
            character arising as a result of this License or out of the use or
            inability to use the Work (including but not limited to damages for
            loss of goodwill, work stoppage, computer failure or malfunction, or
            any and all other commercial damages or losses), even if such
            Contributor has been advised of the possibility of such damages.
          </>
        }
        small
      />
      <Text
        text={
          <>
            <strong>9. Accepting Warranty or Additional Liability.</strong>{" "}
            While redistributing the Work or Derivative Works thereof, You may
            choose to offer, and charge a fee for, acceptance of support,
            warranty, indemnity, or other liability obligations and/or rights
            consistent with this License. However, in accepting such
            obligations, You may act only on Your own behalf and on Your sole
            responsibility, not on behalf of any other Contributor, and only if
            You agree to indemnify, defend, and hold each Contributor harmless
            for any liability incurred by, or claims asserted against, such
            Contributor by reason of your accepting any such warranty or
            additional liability.
          </>
        }
        small
      />
      <Text text={`END OF TERMS AND CONDITIONS`} uppercase small />

      <BasicTable
        header={[
          "Icon: visualized",
          "Icon: name",
          "Offered by",
          "Website	Copyright notice",
          "Copyright notice",
          "Link License (text)",
        ]}
        minWidth={1600}>
        <TableBody>
          {rows.map((row, i) => {
            return (
              <TableRow key={i}>
                <TableCell sx={sx}>{row.IconVisualized}</TableCell>
                <TableCell sx={sx}>{row.IconName}</TableCell>
                <TableCell sx={sx}>{row.OfferedBy}</TableCell>
                <TableCell sx={sx}>
                  <Link xs href={row.Website} title={row.Website} />
                </TableCell>
                <TableCell sx={sx}>{row.CopyrightNotice}</TableCell>
                <TableCell sx={sx}>
                  <Link xs href={row.LinkLicense} title={row.LinkLicense} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </BasicTable>
    </Grid>
  );
};

export default Apache;
