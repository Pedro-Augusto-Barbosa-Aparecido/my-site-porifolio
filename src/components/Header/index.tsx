import { TextLink } from "../TextLink";
import { HeaderStyle } from "./style";

import Image from "next/image";

import avatar from "../../assets/avatar.svg";

export function Header() {
  return (
    <HeaderStyle>
      <div>
        <TextLink>Meu Currículo</TextLink>
        <TextLink>Entre em contato</TextLink>
      </div>
      <Image src={avatar} alt="image of developer like" priority />
    </HeaderStyle>
  );
}
