import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 5em 0px 5em;
  
  --sb-track-color: #000000;
  --sb-thumb-color: #662d91;
  --sb-size: 9px;

  @media (max-width: 600px) {
    padding: 0px 3em 0px 3em;
  }
`;

export const PersonalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
