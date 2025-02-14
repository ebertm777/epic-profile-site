import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 120px 0px 120px;
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

  div {
    padding: 2px;
    margin: 0px 0px 0px 40px;
    transition: all 100ms ease;
    pointer-events: all;
    cursor: url("/goldSword.cur"), auto;

    &:hover {
      color: #ffffff;
      border-bottom: 4px solid #662d91;
    }
  }
`;

export const AuthorItem = styled.h2`
  font-family: "Lato";
  font-size: 22px;
  font-weight: 700;
  padding: 2px;
  margin: 0px auto 0px 0px;
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
  display: flex;
  width: 100%;
  justify-content: center;
`;
