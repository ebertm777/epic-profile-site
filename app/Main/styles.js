import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 120px 0px 120px;
`;

export const TopMenu = styled.div`
  width: 100%;
  height: 35px;
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
  color: #F9F6EE;
  margin: 0px 20px 0px 20px;
  transition: all 100ms ease;

  &:hover {
    color: #ffffff;
    border-bottom: 6px solid #662d91;
  }
`;

export const ProfilePic = styled.img.attrs({
  src: "/ValenciaFoto.jpg",
})`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  align-self: center;
  margin-top: 50px;
  outline: 2px solid #662d91;
  transition: all 100ms ease;

  &:hover {
    outline: 8px solid #662d91;
  }
`;
