"use client";
import * as S from "./styles";

const redirectMe = require("../Functions/Functions.js");
const { goToMyGithub, goToMyLinkedin } = redirectMe;

const menuItens = ({ name, onClick, isActive }) => {
  return (
    <S.TopMenuItens className={isActive ? "active" : ""} onClick={onClick}>
      {name}
    </S.TopMenuItens>
  );
};

const menuButtons = [
  { name: "Contato", onClick: () => alert("Contato"), isActive: false },
  { name: "Linkedin", onClick: () => goToMyLinkedin(), isActive: false },
  { name: "Github", onClick: () => goToMyGithub(), isActive: false },
  { name: "Projetos", onClick: () => alert("Projetos"), isActive: false },
].map((item, index) => (
  <div key={index} className="menuItens">
    {menuItens(item)}
  </div>
));

export default function Main() {
  return (
    <S.Container>
      <S.TopMenu>{menuButtons}</S.TopMenu>
    </S.Container>
  );
}
