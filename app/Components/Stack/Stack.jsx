"use client";
import * as S from "./styles";

const createCards = require("../../Functions/Functions.js");
const { generateCard } = createCards;

export default function Stack() {
  return (
    <S.Container>
      <S.Title>🚀 What I'm up to:</S.Title>
      <S.CardGroup>{generateCard(3)}</S.CardGroup>
    </S.Container>
  );
}
