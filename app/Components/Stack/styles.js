import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1040px;
  margin-top: 50px;
  background-color: #36454f;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: all 100ms ease;
  padding: 20px 80px 20px 80px;
  flex-direction: column;

  &:hover {
    outline: 4px solid #662d91;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;

  #card-0 {
    background-color: #b3f5c8;
  }

  #card-1 {
    background-color: #b9f5b3;
  }

  #card-2 {
    background-color: #d5f5b3;
  }
`;

export const Card = styled.div`
  width: 280px;
  height: 240px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 20px;
  margin-top: 14px;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #ffffff;
  margin: 0px 0px 0px 0px;
  font-family: "Prompt";
  font-size: 34px;
`;

export const EmojiCall = styled.p`
font-family: "Prompt";
font-weight: 100;
color: #28282B;
font-size: 16px;
margin: 0;
align-self: flex-start;
margin-bottom: 10px;
`;

export const Description = styled.p`
  font-family: "Lato";
  font-size: 18px;
  color: #36454f;
  margin: 0px 0px 0px 0px;
`;
