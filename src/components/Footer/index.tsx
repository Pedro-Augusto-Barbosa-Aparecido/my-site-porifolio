import Image from "next/image";
import { FooterContainer, SocialContainer } from "./styles";

import git from "../../assets/social/github.svg";
import linkedin from "../../assets/social/linkedin.svg";
import whatssap from "../../assets/social/whatssap.svg";
import Link from "next/link";

export function Footer() {
  return (
    <FooterContainer>
      <SocialContainer>
        <Link href={"https://github.com/Pedro-Augusto-Barbosa-Aparecido"}>
          <Image src={git} alt="Github icon" width={50} height={50} />
        </Link>
        <Link href="https://www.linkedin.com/in/pedro-augusto-195247217/">
          <Image src={linkedin} alt="Linkedin icon" width={50} height={50} />
        </Link>
        <Link href={"https://wa.me/5535999157614"}>
          <Image src={whatssap} alt="Whatssap icon" width={50} height={50} />
        </Link>
      </SocialContainer>
      <span>
        Todos os direitos reservados © pedro007augustobarbosa@gmail.com{" "}
      </span>
    </FooterContainer>
  );
}
