"use client";
import * as S from "./styles";

export default function Stack() {
  return (
    <S.Container>
      <S.Title>🚀 What I'm up to:</S.Title>
      <S.Card>
      <S.Description>
        Currently using JavaScript, React and Node.js to build awesome web
        applications at work.
      </S.Description>
      </S.Card>
      <S.Description></S.Description>
    </S.Container>
  );
}
