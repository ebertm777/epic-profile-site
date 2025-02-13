import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #faf9f6;
`;

export const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 20px 0px 20px;

  a {
    all: unset;
  }
`;

export const TopMenuItens = styled.div`
  cursor: url("/goldSword.cur"), auto;
  pointer-events: all;
  background: transparent;
  border-bottom: 2px solid #33006f;
  font-size: 22px;
`;
