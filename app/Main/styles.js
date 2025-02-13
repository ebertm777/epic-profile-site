import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #faf9f6;
`;

export const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 0px 20px 20px;
`;

export const TopMenuItens = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&display=swap");
  cursor: url("/goldSword.cur"), auto;
  pointer-events: all;
  background: transparent;
  border-bottom: 3px solid #33006f;
  margin: 10px;
  font-family: "Atkinson Hyperlegible Mono", monospace;
  font-size: 22px;
  font-weight: 700;
`;
