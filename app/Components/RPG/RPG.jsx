"use client";
import { useState } from "react";
import * as S from "./styles";

export default function Rpg() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <S.ShowRpgModel onClick={handleToggle}>
        {open ? "Fechar RPG" : "Abrir RPG"}
        <span role="img" aria-label="RPG">
          &nbsp;🎲
        </span>
      </S.ShowRpgModel>
      <S.Container $isActive={open}>
        <iframe
          src="https://dungeon-crawler-cards.vercel.app/"
          title="RPG Dungeon Crawler Cards"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </S.Container>
    </>
  );
}
