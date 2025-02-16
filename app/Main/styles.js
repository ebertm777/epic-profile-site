import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 120px 20px 120px;

  .flicker-1 {
    animation: flicker-1 2s linear infinite both;
  }

  @keyframes flicker-1 {
    0%,
    100% {
      opacity: 1;
    }
    41.99% {
      opacity: 1;
    }
    42% {
      opacity: 0;
    }
    43% {
      opacity: 0;
    }
    43.01% {
      opacity: 1;
    }
    47.99% {
      opacity: 1;
    }
    48% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    49.01% {
      opacity: 1;
    }
  }
`;

export const TopMenu = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #f9f6ee;
  font-family: "Lato";
  font-size: 22px;
  align-self: center;
  position: sticky;
  top: 0;
  background-color: #28282b;

  div {
    padding: 2px;
    margin: 0px 0px 0px 40px;
    transition: all 100ms ease;
    pointer-events: all;
    cursor: url("/goldSword.cur"), auto;

    &:hover {
      color: #ffffff;
      border-bottom: 4px solid #00A36C;
    }
  }
`;

export const AuthorItem = styled.h2`
  font-family: "Lato";
  font-size: 22px;
  font-weight: 700;
  padding: 2px;
  margin: 0px auto 0px 20px;
  cursor: url("/goldSword.cur"), auto;
`;

export const Elements = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Anchor = styled.a`
  all: unset;
`;

export const TopMenuItens = styled.div`
  font-weight: 300;
  color: #f9f6ee;
`;

export const PersonalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
