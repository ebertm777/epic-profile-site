"use client";
import * as S from "./styles";

export default function Footer() {
  return (
    <S.Container className="color-change-5x">
      <S.FooterContent>
        <S.Creation>
          <S.Iten>Created by:</S.Iten>
          <S.Name>Eber Torres Macedo</S.Name>
        </S.Creation>
        <S.Year>2025®</S.Year>
        <S.Creation>
          {/* <S.Used>Using:</S.Used> */}
          <S.MadeWith>
            Javascript, React, Node.JS and Next.JS
          </S.MadeWith>
        </S.Creation>
      </S.FooterContent>
    </S.Container>
  );
}
