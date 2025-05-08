"use client";
import * as S from "./styles";
import GlobalStyle from "./../Constants/GlobalStyle.js";
import Bio from "../Components/Bio/Bio";
import Stack from "../Components/Stack/Stack";
import Rpg from "../Components/RPG/RPG";

export default function Main() {
  return (
    <S.Container>
      <GlobalStyle />
      <S.PersonalContainer>
        <Bio />
        <Stack />
        <Rpg />
      </S.PersonalContainer>
    </S.Container>
  );
}
