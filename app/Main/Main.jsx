"use client";
import * as S from "./styles";
import GlobalStyle from "./../Constants/GlobalStyle.js";
import { menuData } from "../Constants/SiteData";

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

export default function Main() {
  return (
    <S.Container>
      <GlobalStyle />
      <S.TopMenu>
        <S.AuthorItem>Eber Torres Macedo</S.AuthorItem>
        <S.Elements>
          {menuData.map((item, index) => (
            <MenuItens key={index} href={item.href} name={item.name} />
          ))}
        </S.Elements>
      </S.TopMenu>
      <S.ProfilePic />
    </S.Container>
  );
}
