"use client";
import * as S from "./styles";

const redirectMe = require("../Functions/Functions.js");
const { goToMyGithub, goToMyLinkedin } = redirectMe;

const menuItens = (name) => {
  return <S.TopMenuItens>{name}</S.TopMenuItens>;
};

export default function Main() {
  return (
    <S.Container>
      <S.TopMenu>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div>{menuItens("Contato")}</div>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div>{menuItens("Projetos")}</div>
        </a>

        <a
          href="https://www.linkedin.com/in/ebermacedo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>{menuItens("Linkedin")}</div>
        </a>
        <a
          href="https://github.com/ebertm777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>{menuItens("Github")}</div>
        </a>
      </S.TopMenu>
    </S.Container>
  );
}
