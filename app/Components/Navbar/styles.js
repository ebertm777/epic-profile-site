import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  height: 35px;
  display: flex;
  justify-content: center;
  position: sticky;
  background-color: #28282b;
  padding: 0px 120px 0px 120px;
  z-index: 1000;
`;

export const TopMenu = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: row;
  color: #f9f6ee;
  font-family: "Lato";
  font-size: 22px;

  div {
    padding: 2px;
    margin: 0px 0px 0px 40px;
    transition: all 100ms ease;
    pointer-events: all;
    cursor: url("/goldSword.cur"), auto;

    &:hover {
      color: #ffffff;
      border-bottom: 4px solid #00a36c;
    }
  }
`;

export const AuthorItem = styled.h2`
  font-family: "Lato";
  font-size: 22px;
  font-weight: 700;
  padding: 2px;
  margin: 0px auto 0px 20px;
  min-width: fit-content;
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
