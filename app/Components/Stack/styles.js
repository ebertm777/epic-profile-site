import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1040px;
  height: 400px;
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
`;

export const Card = styled.div`
  width: 280px;
  height: 240px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #F5DEB3;
  padding: 20px;
  margin-top: 10px;
`;

export const Title = styled.h1`
  color: #ffffff;
  margin: 0px 0px 0px 0px;
  font-family: "Prompt";
  font-size: 34px;
`;

export const Description = styled.p`
  font-family: "Lato";
  font-size: 18px;
  color: #36454f;
`;
