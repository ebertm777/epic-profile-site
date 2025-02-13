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
        <div>{menuItens("Contato")}</div>
        <div>{menuItens("Links")}</div>
        <div>{menuItens("Github")}</div>
        <div>{menuItens("Projetos")}</div>
      </S.TopMenu>
    </S.Container>
  );
}
