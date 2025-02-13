"use client";
import * as S from "./styles";
import GlobalStyle from "./../Constants/GlobalStyle.js";

const redirectMe = require("../Functions/Functions.js");
const { goToMyGithub, goToMyLinkedin } = redirectMe;

const MenuComponents = (name) => {
  return <S.TopMenuItens>{name}</S.TopMenuItens>;
};

const MenuItens = ({
  href,
  name,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  return (
    <S.Anchor href={href} target={target} rel={rel}>
      {MenuComponents(name)}
    </S.Anchor>
  );
};

const menuData = [
  { href: "#", name: "Contato" },
  { href: "#", name: "Projetos" },
  { href: "https://www.linkedin.com/in/ebermacedo/", name: "Linkedin" },
  { href: "https://github.com/ebertm777", name: "Github" },
];

export default function Main() {
  return (
    <S.Container>
      <GlobalStyle />
      <S.TopMenu>
        {menuData.map((item, index) => (
          <MenuItens key={index} href={item.href} name={item.name} />
        ))}
      </S.TopMenu>
      <S.ProfilePic />
    </S.Container>
  );
}
