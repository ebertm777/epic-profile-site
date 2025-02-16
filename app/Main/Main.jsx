"use client";
import * as S from "./styles";
import GlobalStyle from "./../Constants/GlobalStyle.js";
import Bio from "../Components/Bio/Bio";
import Stack from "../Components/Stack/Stack";
import { menuData } from "../Constants/SiteData";

const MenuComponents = (name) => {
  return <S.TopMenuItens>{name}</S.TopMenuItens>;
};

const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
        <S.AuthorItem onClick={goTop} className="flicker-1">
          About me.
        </S.AuthorItem>
        <S.Elements>
          {menuData.map((item, index) => (
            <MenuItens key={index} href={item.href} name={item.name} />
          ))}
        </S.Elements>
      </S.TopMenu>
      <S.PersonalContainer>
        <Bio />
        <Stack />
      </S.PersonalContainer>
    </S.Container>
  );
}
