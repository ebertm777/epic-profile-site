"use client";
import * as S from "./styles";

export default function Bio() {
  return (
    <S.Container>
    <S.BioPresentation>
      <S.SayHello>👋 Hey there! my name is</S.SayHello>
      <S.MyName>Eber Torres Macedo</S.MyName>
      </S.BioPresentation>
      <S.ProfilePic />
      <S.BioPresentation>
        <p>I am a</p>
        <h2>Front-end Engineer 🧑‍💻</h2>
      </S.BioPresentation>
    </S.Container>
  );
}
