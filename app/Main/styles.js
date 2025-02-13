import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const TopMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 100px 0px 100px;

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
  padding: 2px;
  color: #FAF9F6;
  margin: 0px 20px 0px 20px;
`;
