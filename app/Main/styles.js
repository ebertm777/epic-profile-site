import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #faf9f6;
`;

export const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TopMenuItens = styled.button`
  cursor: url("/busterSwordLinkSelect.png"), auto; 
  pointer-events: all; 
  background: none; 
  border: 1px solid #33006F; 

  :hover{
    box-shadow: 2px 2px 5px 0px rgba(72,72,72,1);
  }
`;
