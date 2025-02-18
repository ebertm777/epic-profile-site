import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #36454f;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: all 100ms ease;
  padding: calc(20px + 1.5625vw);
  flex-direction: column;
  align-items: center;

  &:hover {
    outline: 4px solid #662d91;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-between;

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
  margin: 30px 0px 0px 0px;
  align-self: flex-start;
`;

export const EmojiCall = styled.p`
  font-family: "Prompt";
  font-weight: 400;
  color: #28282b;
  font-size: 16px;
  margin: 0;
  align-self: flex-start;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-family: "Lato";
  font-size: 16px;
  color: #36454f;
  margin: 0px 0px 0px 0px;
  height: 150px;
`;

export const SmallTitle = styled.p`
  margin-top: 16px;
  margin-left: 0px;
  color: #f9f6ee;
  font-family: "Quicksand";
  font-weight: 400;
  font-size: 18px;
  align-self: flex-start;

  @media (max-width: 600px) {
    margin-bottom: 0px;
  }
`;

export const MainSkills = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

export const Skills = styled.img`
  margin: 10px 10px 0px 0px;
`;

export const SkillsGroups = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
`;
