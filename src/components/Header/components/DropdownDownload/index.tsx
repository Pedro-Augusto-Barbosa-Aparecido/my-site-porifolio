import { TextLink } from "../../../TextLink";
import {
  PdfIcon,
  PngIcon,
  DropdownContent,
  DropdownRoot,
  DropdownSeparator,
  DropdownMenuItem,
  DropdownPortal,
} from "./styles";

import * as Dropdown from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export function DropdownDownload() {
  return (
    <DropdownRoot>
      <Dropdown.Trigger asChild>
        <TextLink>Meu Currículo</TextLink>
      </Dropdown.Trigger>
      <DropdownPortal>
        <DropdownContent sideOffset={5}>
          <DropdownMenuItem>
            <Link href="/api/cv-pdf">Download as PDF</Link>
            <PdfIcon weight="bold" size={32} />
          </DropdownMenuItem>
          <DropdownSeparator />
          <DropdownMenuItem>
            <Link href="/api/cv-png">Download as PNG</Link>
            <PngIcon weight="bold" size={32} />
          </DropdownMenuItem>
        </DropdownContent>
      </DropdownPortal>
    </DropdownRoot>
  );
}
