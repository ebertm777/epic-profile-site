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
        <h2>Front-end Engineer<span>🧑‍💻</span></h2>
        <h3>
          from Rio de Janeiro, Brazil. 🇧🇷 passionate about coding and constantly improving my
          skills.
        </h3>
        <h3>
          Currently focused on leveling up my programming skills, aiming to go
          full-stack by the end of 2025.🔭
        </h3>
        <S.Icons>
          <S.LinkedinIcon />
          <S.GithubIcon />
        </S.Icons>
      </S.BioPresentation>
    </S.Container>
  );
}
