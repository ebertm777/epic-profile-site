import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const BioPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;

  p {
    font-family: "Quicksand";
    font-weight: 100;
    color: #f9f6ee;
    font-size: 18px;
    margin: 60% 0px 0px 20px;
  }

  h2 {
    font-family: "Quicksand";
    font-weight: 700;
    color: #f9f6ee;
    font-size: 44px;
    margin-left: 16px;
    margin: 0px 0px 0px 20px;
    width: 300px;
    line-height: 42px;
  }

  h3 {
    font-family: "Quicksand";
    font-weight: 300;
    color: #f9f6ee;
    font-size: 16px;
    margin-left: 16px;
    margin: 6px 0px 0px 20px;
    max-width: 500px;
  }
`;

export const SayHello = styled.h1`
  font-family: "Quicksand";
  color: #f9f6ee;
  font-weight: 400;
  font-size: 18px;
  align-self: center;
  align-self: flex-start;
  margin: 0px 0px 0px 0px;
`;

export const MyName = styled.h1`
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 44px;
  margin: 0px 40px 0px 0px;
  color: #ffffff;
  max-width: 270px;
`;

export const ProfilePic = styled.img.attrs({
  src: "/ValenciaFoto.jpg",
})`
  min-width: 260px;
  min-height: 460px;
  max-width: 260px;
  max-height: 460px;
  border-top-left-radius: 150px;
  border-bottom-right-radius: 123px;
  object-fit: cover;
  align-self: center;
  margin-top: 50px;
  outline: 2px solid #662d91;
  transition: all 100ms ease;

  &:hover {
    outline: 8px solid #662d91;
  }
`;
