import { TextLink } from "../TextLink";
import {
  HeaderStyle,
  PdfIcon,
  PngIcon,
  DropdownContent,
  DropdownRoot,
  DropdownSeparator,
  DropdownMenuItem,
} from "./style";

import Image from "next/image";

import avatar from "../../assets/avatar.svg";

import * as Dropdown from "@radix-ui/react-dropdown-menu";

import Link from "next/link";

export function Header() {
  return (
    <HeaderStyle>
      <div>
        <Link href={"/"}>
          <TextLink>Home</TextLink>
        </Link>
        <DropdownRoot>
          <Dropdown.Trigger asChild>
            <TextLink>Meu Currículo</TextLink>
          </Dropdown.Trigger>
          <Dropdown.Portal>
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
          </Dropdown.Portal>
        </DropdownRoot>
        <TextLink>Entre em contato</TextLink>
      </div>
      <Image src={avatar} alt="image of developer like" priority />
    </HeaderStyle>
  );
}
