"use client";
import * as S from "./styles";
import { menuData } from "../../Constants/SiteData.js";

const MenuComponents = (name) => {
  return <S.TopMenuItens>{name}</S.TopMenuItens>;
};

const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const MenuItens = ({
  href,
  name,
  target = name === "Projects" ? "_self" : "_blank",
  rel = "noopener noreferrer",
}) => {
  return (
    <S.Anchor href={href} target={target} rel={rel}>
      {MenuComponents(name)}
    </S.Anchor>
  );
};
export default function NavBar() {
  return (
    <S.Container>
      <S.TopMenu>
        <S.AuthorItem onClick={goTop}>About me.</S.AuthorItem>
        <S.Elements>
          {menuData.map((item, index) => (
            <MenuItens key={index} href={item.href} name={item.name} />
          ))}
        </S.Elements>
      </S.TopMenu>
    </S.Container>
  );
}
