import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px 0px 100px;
`;

export const TopMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Anchor = styled.a`
  all: unset;
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
  color: #faf9f6;
  margin: 0px 20px 0px 20px;
`;

export const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  align-self: center;
  margin-top: 40px;
  outline: 2px solid #662d91;
`;
