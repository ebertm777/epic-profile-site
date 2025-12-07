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
        Here I showcase some of the projects I’ve developed, both personal and
        professional. Since some work is confidential, I cannot share the source
        code, but I’ve included GIFs so you can visualize how the applications
        work.
      </S.Title>
      <div className="projects-grid">
        <S.ProjectsContainer>
          <S.ProjectName>
            Fast Image Generator for Podcasts and Social Media Posts:
          </S.ProjectName>
          <S.AboutProject>
            I created this image-generation tool to solve a recurring problem
            for the designers on my team, who often had to use Photoshop to
            produce simple images—just a collage or a basic filter—for a podcast
            or social media post. This tool speeds up the publication process by
            making that workflow much more efficient.
            <br />
            <br />
            Tech Stack Used: Javascript, React, Sass, HTML5.
          </S.AboutProject>
          <p className="clickMe">Click on the GIF to enlarge</p>
          <S.ProjectCard
            onClick={() => openModal("/Images/Project-Globo-Example1.gif")}
            src="/Images/Project-Globo-Example1.gif"
          />
        </S.ProjectsContainer>

        <S.ProjectsContainer>
          <S.ProjectName>Image Generator for Football Matchups:</S.ProjectName>
          <S.AboutProject>
            This project was developed to speed up the creation of images for
            social media, especially for posts related to football team
            matchups. The tool allows fast generation of appealing visuals,
            saving the design team time and effort in producing graphic content.
            <br />
            <br />
            Tech Stack Used: JavaScript, React, Styled-Components, HTML5, and
            Axios for API consumption.
          </S.AboutProject>
          <p className="clickMe">Click on the GIF to enlarge</p>
          <S.ProjectCard
            onClick={() => openModal("/Images/Project-Globo-Example2.gif")}
            src="/Images/Project-Globo-Example2.gif"
          />
        </S.ProjectsContainer>

        <S.ProjectsContainer>
          <S.ProjectName>Descreve+:</S.ProjectName>
          <S.AboutProject>
            A tool that generates, in seconds, professional descriptions with
            optimized titles, persuasive text, and SEO keywords.
            <br />
            <br />
            What it does: <br />
            • Generates descriptions for various categories (electronics,
            fashion, hospitality...)
            <br />
            • Adapts the tone of voice (professional, casual, luxurious...)
            <br />
            • Optimizes for Mercado Livre, OLX, Shopee, and Airbnb, delivering
            titles, descriptions, and keywords in under 10 seconds.
            <br />
            <br />
            Tech Stack Used: React, TypeScript, Tailwind. <br />
            Backend: Edge Functions (Deno) for serverless backend, generative AI
            for text processing: Gemini. Payments: Stripe.
          </S.AboutProject>
          <p className="clickMe">
            Click the image to visit the project website 👇
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
            In this project, I created an app that gamifies the gym experience,
            making physical exercise more motivating and engaging.
            <br />
            <br />
            Highlights:
            <br />• Complete gamification system with XP, levels, and
            achievements. <br />
            • Personalized workouts with 80+ exercises.
            <br />
            • Global sharing — any user can import workouts.
            <br />
            • Interface in 5 languages, international reach.
            <br />
            • Full privacy — data stored only on the device.
            <br />
            <br />
            Tech Stack Used: React, TypeScript, Capacitor (Android/iOS),
            Tailwind CSS, Shadcn/ui, Radix UI.
            <br />
            i18n: Support for 5 languages (PT, EN, DE, IT, ZH).
            <br />
            Monetization: AdMob + RevenueCat (IAP)
            <br />
            <br />
            Available on the Play Store.
          </S.AboutProject>

          <p className="clickMe">
            Click the image to visit the project website 👇
          </p>
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
            Project for presenting data about the conflict in Gaza:
          </S.ProjectName>
          <S.AboutProject>
            (Project created for the newspaper O Globo)
            <br />
            <br />
            In this project, I present an interactive Dataviz that illustrates
            the impact of explosive use during the conflict in Gaza through
            charts, while also creating a scroll-driven interaction that changes
            the presentation as the user scrolls up or down on the mouse or
            mobile device.
            <br />
            <br />
            Tech Stack Used: JavaScript, Styled-Components, React, D3.js, and
            Redux for state management.
          </S.AboutProject>
          <p className="clickMe">Click on the GIF to enlarge</p>
          <S.ProjectCard
            onClick={() => openModal("/Images/GraficsBall.gif")}
            src="/Images/GraficsBall.gif"
          />

          <S.LinkButton
            onClick={() =>
              window.open(
                "https://infograficos.oglobo.globo.com/mundo/dois-anos-guerra-em-gaza.html",
                "_blank"
              )
            }
          >
            • Click to visit the project page.
          </S.LinkButton>
        </S.ProjectsContainer>

        <S.ProjectsContainer>
          <S.ProjectName>
            Guide to Private Schools in the cities of Rio de Janeiro and São
            Paulo:
          </S.ProjectName>
          <S.AboutProject>
            (Project created for the newspaper O Globo)
            <br />
            <br />
            In this project, I developed a platform that searches an API and
            filters schools in the cities of Rio de Janeiro and São Paulo using
            multiple relevance criteria, such as price range and student
            activities.
            <br />
            <br />
            Tech Stack Used: JavaScript, Styled-Components, React, Redux e
            Leaflet for maps.
          </S.AboutProject>
          <p className="clickMe">•Click on the GIF to enlarge</p>
          <S.ProjectCard
            onClick={() => openModal("/Images/GuiaEscolas.gif")}
            src="/Images/GuiaEscolas.gif"
          />

          <S.LinkButton
            onClick={() =>
              window.open(
                "https://infograficos.oglobo.globo.com/brasil/guia-encontrar-melhores-escolas-rio-de-janeiro-sao-paulo-fundamental-e-medio.html",
                "_blank"
              )
            }
          >
            • Click to visit the project page.
          </S.LinkButton>
        </S.ProjectsContainer>
        <S.ProjectsContainer>
          <S.ProjectName>Medieval Data View:</S.ProjectName>
          <S.AboutProject>
            (Under Construction)
            <br />
            <br />
            I created this project as a future complement to the RPG Simulator
            that I also showcase further down on this page. The goal is that
            once everything is ready and running, Medieval Data View will allow
            users to visualize the current season’s results for each
            participant. The data generated by the simulator will be consumed
            here as a API.
            <br />
            <br />
            Tech Stack Used: JavaScript, CSS3, React, and D3.js for interactive
            data visualization and presentation.
          </S.AboutProject>
          <p className="clickMe">
            Click the image to visit the project website 👇
          </p>
          <S.ProjectCard
            onClick={() =>
              window.open("https://medieval-data-view.vercel.app/", "_blank")
            }
            src="/Images/MedievalDataViz.gif"
          />
        </S.ProjectsContainer>

        <S.ProjectsContainer>
          <S.ProjectName>
            Crystal Ball of the 2023 Brazilian Championship:
          </S.ProjectName>
          <S.AboutProject>
            (Project created for the newspaper O Globo)
            <br />
            <br />
            In this project, developed in partnership with UFMG, I consume an
            API of mathematical calculations and predictions to create a
            visualization system for Brazilian league football teams in the 2023
            season. Unfortunately, this project is no longer maintained by its
            original owner, which has caused some image links to go missing. A
            new version is currently under development.
            <br />
            <br />
            Tech Stack Used: JavaScript, Styled-Components, React, D3.js for
            data visualization.
          </S.AboutProject>
          <p className="clickMe">Click on the GIF to enlarge</p>
          <S.ProjectCard
            onClick={() => openModal("/Images/Boladecristal2023.gif")}
            src="/Images/Boladecristal2023.gif"
          />
        </S.ProjectsContainer>
      </div>
      <p className="More">
        And there's more! 👇 <br></br>
        below is the draft of an RPG system still under development for
        generating automated adventures. This project uses the Dungeons and
        Dragons system API to create battles.
      </p>
    </S.Container>
  );
}
