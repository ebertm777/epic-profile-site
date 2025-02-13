import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #faf9f6;
`;

export const TopMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 30px 0px 30px;

  a {
    all: unset;
  }
`;

export const TopMenuItens = styled.div`
  cursor: url("/goldSword.cur"), auto;
  pointer-events: all;
  background: transparent;
  border-bottom: 1px solid #662d91;
  font-size: 22px;
  font-family: "Lato";
  font-weight: 300;
  padding-bottom: 2px;
`;
