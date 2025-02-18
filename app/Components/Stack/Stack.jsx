"use client";
import * as S from "./styles";

const createCards = require("../../Functions/Functions.js");
const { generateCard, generateSkills, generateTechs } = createCards;

export default function Stack() {
  return (
    <S.Container>
      <S.Title>🚀 What I'm up to:</S.Title>
      <S.CardGroup>{generateCard(3)}</S.CardGroup>
      <S.Title>🛠️ Tech Stack:</S.Title>
      <S.SkillsGroups>
        <S.SmallTitle>Main Skills</S.SmallTitle>
        <S.MainSkills>{generateSkills(4)}</S.MainSkills>
      </S.SkillsGroups>
      <S.SkillsGroups>
        <S.SmallTitle>Tools & Technologies</S.SmallTitle>
        <S.MainSkills>{generateTechs(5)}</S.MainSkills>
      </S.SkillsGroups>
    </S.Container>
  );
}
