import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const BioPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  p {
    font-family: "Quicksand";
    font-weight: 100;
    color: #f9f6ee;
    font-size: 18px;
  }
`;

export const SayHello = styled.h1`
  font-family: "Quicksand";
  color: #f9f6ee;
  font-weight: 400;
  font-size: 18px;
  align-self: center;
  margin: 0px 0px 0px 0px;
  align-self: flex-start;
`;

export const MyName = styled.h1`
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 44px;
  margin: 0px 60px 0px 0px;
  color: #ffffff;
`;

export const ProfilePic = styled.img.attrs({
  src: "/ValenciaFoto.jpg",
})`
  width: 220px;
  height: 220px;
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
