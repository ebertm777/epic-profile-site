"use client";
import * as S from "./styles";

import { useState } from "react";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <S.Container id="projects">
      {modalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.CloseButton onClick={closeModal}>X</S.CloseButton>
            <img src={modalImage} alt="Preview" />
          </S.ModalContent>
        </S.ModalOverlay>
      )}
      <S.Title>
        Aqui apresento alguns dos projetos que desenvolvi, tanto pessoais quanto
        profissionais. Como alguns trabalhos são confidenciais, não posso
        compartilhar o código, mas disponibilizo GIFs para que você possa
        visualizar o funcionamento das aplicações.
      </S.Title>
      <div className="projects-grid">
        <S.ProjectsContainer>
          <S.ProjectName>
            Gerador de Imagens rápidas para Podcasts:
          </S.ProjectName>
          <S.AboutProject>
            Criei esta ferramenta geradora de imagens para resolver um problema
            constante dos designers na minha equipe que consistia em ter de
            utilizar Photoshop para gerar imagens simples, apenas uma colagem ou
            um simples Filtro para um podcast ou postagem, acelerando assim o
            processo de publicação.
            <br />
            <br />
            Stack Utilizada: Javascript, React, Sass, HTML5.
          </S.AboutProject>
          <p className="clickMe">Click no Gif para ampliar 👇</p>
          <S.ProjectCard
            onClick={() => openModal("/Images/Project-Globo-Example1.gif")}
            src="/Images/Project-Globo-Example1.gif"
          />
        </S.ProjectsContainer>

        <S.ProjectsContainer>
          <S.ProjectName>
            Gerador de imagens para confrontos entre times de futebol:
          </S.ProjectName>
          <S.AboutProject>
            Este Projeto foi desenvolvido para agilizar a criação de imagens
            para redes sociais, especialmente para posts relacionados a
            confrontos entre times de futebol. A ferramenta permite a geração
            rápida de imagens atrativas, economizando tempo e esforço da equipe
            de designers na produção de conteúdo visual.
            <br />
            <br />
            Stack Utilizada: Javascript, React, Styled-Components, HTML5, Axios.
          </S.AboutProject>
          <p className="clickMe">Click no Gif para ampliar 👇</p>
          <S.ProjectCard
            onClick={() => openModal("/Images/Project-Globo-Example2.gif")}
            src="/Images/Project-Globo-Example2.gif"
          />
        </S.ProjectsContainer>

        <S.ProjectsContainer>
          <S.ProjectName>Descreve+:</S.ProjectName>
          <S.AboutProject>
            Uma ferramenta que gera, em segundos, descrições profissionais com
            título otimizado, texto persuasivo e palavras-chave SEO.
            <br />
            <br />O que ela faz: <br />
            • Gera descrições para diversas categorias (eletrônicos, moda,
            hospedagem...)
            <br />
            • Adapta o tom de voz (profissional, descontraído, luxuoso...)
            <br />
            • Otimiza para Mercado Livre, OLX, Shopee e Airbnb Entregando
            títulos, descrições e keywords em menos de 10 segundos.
            <br />
            <br />
            Stack Utilizada: React, TypeScript, Tailwind. <br />
            Backend: Edge Functions(Deno) para backend serverless, IA generativa
            para processamento de texto: Gemini. Pagamentos: Stripe.
          </S.AboutProject>
          <p className="clickMe">
            Click na imagem para ir até o site do projeto 👇
          </p>
          <S.ProjectCard
            onClick={() =>
              window.open("https://descrevemais.com.br/", "_blank")
            }
            src="/Images/Descreve+.png"
          />
        </S.ProjectsContainer>

        <S.ProjectsContainer>
          <S.ProjectName>Gym Gamefy:</S.ProjectName>
          <S.AboutProject>
            Nste projeto Criei um aplicativo que gamifica a experiência de
            academia, tornando exercícios físicos mais motivadores e engajantes.
            <br />
            <br />
            Destaques:
            <br />• Sistema completo de gamificação com XP, níveis e conquistas.{" "}
            <br />
            • Treinos personalizados com +80 exercícios.
            <br />
            • Compartilhamento global - qualquer usuário pode importar treinos.
            <br />
            • Interface em 5 idiomas, alcance internacional.
            <br />
            • Privacidade total - dados armazenados apenas no dispositivo.
            <br />
            <br />
            Stack Utilizada: React, TypeScript, Capacitor(Android/iOS), Tailwind
            CSS, shadcn/ui, Radix UI.
            <br />
            i18n: Suporte a 5 idiomas (PT, EN, DE, IT, ZH).
            <br />
            Monetização: AdMob + RevenueCat (IAP)
            <br />
            Privacidade: Armazenamento 100% local
            <br />
            <br />
            Disponivel na Play Store.
          </S.AboutProject>
          <p className="clickMe">Click no Gif para ir ao site do projeto 👇</p>
          <S.ProjectCard
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.gymgamefy.app2&pcampaignid=web_share",
                "_blank"
              )
            }
            src="/Images/GymGamefy.gif"
          />
        </S.ProjectsContainer>

        <S.ProjectsContainer>
          <S.ProjectName>
            Projeto para apresentação de dados Sobre conflito em Gaza:
          </S.ProjectName>
          <S.AboutProject>
            (Projeto Criado para o Jornal O Globo)
            <br />
            <br />
            Neste projeto apresento um Dataviz interativo que ilustra o impacto
            do uso de explosivos durante o conflito em Gaza através de gráficos
            e criando também uma interação de apresentação conforme o usuario
            usa o scroll do mouse ou celular para subir ou descer a
            visualização.
            <br />
            <br />
            Stack Utilizada: Javascript, Styled-Components, React, D3.js e Redux
            para gerenciar estados.
          </S.AboutProject>
          <p className="clickMe">Click no Gif para ampliar 👇</p>
          <S.ProjectCard
            onClick={() => openModal("/Images/GraficsBall.gif")}
            src="/Images/GraficsBall.gif"
          />
        </S.ProjectsContainer>

        <S.ProjectsContainer>
          <S.ProjectName>Medieval Data View:</S.ProjectName>
          <S.AboutProject>
            (Em Construção)
            <br />
            <br />
            Criei este projeto como um futuro complemento para o Simulador de
            RPG que também apresento nesta pagina mais abaixo. O objetivo é que
            quando estiver tudo pronto e rodando aqui no Medieval Data View seja
            possivél visualizar os resultados da temporada atual para cada
            participante, os dados gerados pelo simulador serão consumidos aqui
            como uma API Rest.
            <br />
            <br />
            Stack Utilizada: Javascript, CSS3, React e D3.js para visualização e
            apresentação dos dados de forma interativa.
          </S.AboutProject>
          <p className="clickMe">Click no Gif para ir ao site do projeto 👇</p>
          <S.ProjectCard
            onClick={() =>
              window.open("https://medieval-data-view.vercel.app/", "_blank")
            }
            src="/Images/MedievalDataViz.gif"
          />
        </S.ProjectsContainer>
      </div>
      <p className="More">
        E tem mais! 👇 <br></br>
        abaixo o esboço de um sistema de RPG ainda em construção para geração de
        aventuras automatizadas.
      </p>
    </S.Container>
  );
}
