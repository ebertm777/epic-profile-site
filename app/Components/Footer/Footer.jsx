"use client";
import * as S from "./styles";

export default function Footer() {
  return (
    <S.Container className="color-change-5x">
      <S.FooterContent>
        <S.Creation>
          <S.Iten>Created by:</S.Iten>
          <S.Name>Eber Macedo</S.Name>
        </S.Creation>
        <S.BlackMage src="/Images/blackmage.gif"/>
        <S.Year>2025®</S.Year>
        <S.BlackMage src="/Images/blackmage.gif"/>
        <S.Creation>
          <S.MadeWith>
            Javascript, React, Node.JS
          </S.MadeWith>
        </S.Creation>
      </S.FooterContent>
    </S.Container>
  );
}
