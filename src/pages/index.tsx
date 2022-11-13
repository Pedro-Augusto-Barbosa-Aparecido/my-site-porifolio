import { TextColored } from "../components/SpanColored";
import {
  AboutMe,
  AboutMeContainer,
  AboutMeItem,
  ContactFormHomeContainer,
  Form,
  ImageBottom,
  ItemList,
  List,
} from "../styles/pages/Home";

import sasuke from "../assets/sasuke.svg";
import sharingan from "../assets/sharingan.svg";
import { Input, TextArea } from "../components/Input";
import { Button } from "../components/Button";
import { Envelope } from "phosphor-react";

export default function Home() {
  return (
    <>
      <AboutMeContainer>
        <h1>Olá, meu nome é Pedro Augusto</h1>
        <div>
          <p>
            Sou estudante do curso de Engenharia de software no Inatel, tenho 19
            anos. Atualmente sou estágiário no Inatel no setor de
            desenvolvimento de software, trabalho com{" "}
            <TextColored color="red">Python</TextColored> e{" "}
            <TextColored color="red">JavaScript</TextColored> para construção de
            sites de gestão, aplicativos desktops para geração de relatório,
            trabalho um pouco também com DataScience.
          </p>
          <p>
            Nas horas vagas custumo assistir alguns animes, fazer cursos para
            aumentar o conhecimento e alguns projetos para fixação dos conceitos
            vistos nos cursos.
          </p>
        </div>
        <AboutMe>
          <AboutMeItem>
            <h3>Mais sobre mim:</h3>
            <List>
              <ItemList>Tecnologias que tenho domínio</ItemList>
              <ItemList>Tecnologias que tenho conhecimento</ItemList>
              <ItemList>Graduações</ItemList>
              <ItemList>Premiações</ItemList>
              <ItemList>Cursos</ItemList>
            </List>
          </AboutMeItem>
          <AboutMeItem>
            <h3>O que estudo atualmente:</h3>
            <List>
              <ItemList>ReactJS com NextJS e Typescript</ItemList>
              <ItemList>NodeJS com Typescript</ItemList>
              <ItemList>Python e performance</ItemList>
              <ItemList>Serveless Functions</ItemList>
            </List>
          </AboutMeItem>
        </AboutMe>
        <ImageBottom
          position={"left"}
          bottom="less"
          src={sharingan}
          alt="Sharingan"
          priority
        />
        <ImageBottom
          position={"right"}
          src={sasuke}
          alt="Sasuke Uchiha"
          priority
        />
      </AboutMeContainer>
      <ContactFormHomeContainer>
        <h2>Entre em contato comigo</h2>
        <Form onSubmit={(ev) => ev.preventDefault()}>
          <Input
            labelText="E-mail"
            name="email"
            placeholder="Insira seu email aqui..."
            icon={<Envelope size={36} />}
          />
          <TextArea
            labelText="Mensagem"
            name="message"
            placeholder="Insira sua mensagem para mim..."
          />
          <Button text="Enviar mensagem" />
        </Form>
      </ContactFormHomeContainer>
    </>
  );
}
