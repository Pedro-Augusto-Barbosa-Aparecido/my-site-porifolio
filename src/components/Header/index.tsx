import { TextLink } from "../TextLink";
import { HeaderStyle } from "./style";

import Image from "next/image";

import avatar from "../../assets/avatar.svg";

import Link from "next/link";
import { DropdownDownload } from "./components/DropdownDownload";
import { ModalContactMe } from "./components/ModalContactMe";

export function Header() {
  return (
    <HeaderStyle>
      <div>
        <Link href={"/"}>
          <TextLink>Home</TextLink>
        </Link>
        <DropdownDownload />
        <ModalContactMe />
      </div>
      <Image src={avatar} alt="image of developer like" priority />
    </HeaderStyle>
  );
}
