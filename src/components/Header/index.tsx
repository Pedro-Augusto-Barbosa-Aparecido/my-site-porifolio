import { TextLink } from "../TextLink";
import { HeaderStyle } from "./style";

import Image from "next/image";

import avatar from "../../assets/avatar.svg";

import Link from "next/link";
import { DropdownDownload } from "./components/DropdownDownload";

export function Header() {
  return (
    <HeaderStyle>
      <div>
        <Link href={"/"}>
          <TextLink>Home</TextLink>
        </Link>
        <DropdownDownload />
        <TextLink>Entre em contato</TextLink>
      </div>
      <Image src={avatar} alt="image of developer like" priority />
    </HeaderStyle>
  );
}
