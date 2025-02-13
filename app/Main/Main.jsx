"use client";
import * as S from "./styles";

const menuItens = (name) => {
  return <S.TopMenuItens>{name}</S.TopMenuItens>;
};

export default function Main() {
  return (
    <S.Container>
      <S.TopMenu>
        <div className="menuItens">{menuItens("Contato")}</div>
        <div className="menuItens">{menuItens("Links")}</div>
        <div className="menuItens">{menuItens("Github")}</div>
        <div className="menuItens">{menuItens("Projetos")}</div>
      </S.TopMenu>
    </S.Container>
  );
}
