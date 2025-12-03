"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  #loading-screen {
    position: fixed;
    inset: 0;
    background: #0e0e11;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 2s ease-in-out, visibility 0s linear 2s;

  }

#loading-logo {
  position: relative;
  width: 80px;
  height: 80px;
  border: 4px solid rgba(102, 45, 145, 0.4);
  border-top: 4px solid rgb(102, 45, 145);
  border-radius: 50%;
  animation: spin 2s linear infinite, glow 2s ease-in-out infinite;
}

#loading-logo::after {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  width: 36px;
  height: 36px;
  background-image: url("/Images/blackmage.gif");
  background-size: cover;
  background-position: center;

  /* 🔥 contra-rotação para cancelar o giro do pai */
  animation: counterspin 2s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes counterspin {
  to { transform: rotate(-360deg); }
}

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes glow {
    0% { box-shadow: 0 0 10px rgba(102, 45, 145, .4); }
    50% { box-shadow: 0 0 22px rgba(102, 45, 145, .9); }
    100% { box-shadow: 0 0 10px rgba(102, 45, 145, .4); }
  }

  html.loaded #loading-screen {
    opacity: 0;
    visibility: hidden;
  }
`;

export default function LoadingWrapper({ children }) {
  return (
    <>
      <GlobalStyles />

      {/* Script que remove o loading ao carregar */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("load", () => {
              document.documentElement.classList.add("loaded");
            });
          `,
        }}
      />

      {/* Loading */}
      <div id="loading-screen">
        <div id="loading-logo"></div>
      </div>

      {/* Conteúdo real */}
      {children}
    </>
  );
}
