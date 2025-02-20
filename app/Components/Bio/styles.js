import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin-top: 50px;
  flex-wrap: wrap;

  a {
    all: unset;
  }

  .shadow-pop-br {
    animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  @keyframes shadow-pop-br {
    0% {
      text-shadow: 0 0 #662d91, 0 0 #662d91, 0 0 #662d91, 0 0 #662d91,
        0 0 #662d91, 0 0 #662d91, 0 0 #662d91, 0 0 #662d91;
      transform: translateX(0) translateY(0);
    }
    100% {
      text-shadow: 1px 1px #662d91, 2px 2px #662d91, 3px 3px #662d91,
        4px 4px #662d91, 5px 5px #662d91, 6px 6px #662d91, 7px 7px #662d91,
        8px 8px #662d91;
      transform: translateX(-8px) translateY(-8px);
    }
  }

  @media (max-width: 900px) {
  }

  @media (max-width: 1379px) {
    justify-content: center;
  }
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
    margin: 50% 0px 0px 36px;

    @media (max-width: 900px) {
      margin: 20px 0px 0px 36px;
    }

    @media (max-width: 1379px) {
      margin: 20px 0px 0px 36px;
    }
  }

  h2 {
    font-family: "Quicksand";
    font-weight: 700;
    color: #f9f6ee;
    font-size: 44px;
    margin-left: 16px;
    margin: 8px 0px 0px 40px;
    width: 100%;
    max-width: 235px;
    line-height: 42px;
  }

  h3 {
    font-family: "Quicksand";
    font-weight: 300;
    color: #f9f6ee;
    font-size: 16px;
    margin-left: 16px;
    margin: 6px 0px 0px 40px;
    max-width: 500px;

    @media (max-width: 900px) {
      margin: 6px 0px 0px 36px;
    }
  }

  span {
    font-size: 36px;
    text-shadow: none !important;
  }

  @media (max-width: 900px) {
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
  margin: 0px 0px 120px 0px;
  color: #ffffff;
  max-width: 270px;

  @media (max-width: 900px) {
    margin: 0px 0px 20px 0px;
    max-width: 250px;
    font-size: 42px;
  }
`;

export const ProfilePic = styled.img.attrs({
  src: "/Images/ValenciaFoto.jpg",
})`
  min-width: 290px;
  min-height: 480px;
  max-width: 290px;
  max-height: 480px;
  border-top-left-radius: 150px;
  border-bottom-right-radius: 123px;
  object-fit: cover;
  outline: 2px solid #662d91;
  transition: all 100ms ease;
  margin: 20px;

  &:hover {
    outline: 8px solid #662d91;
  }

  @media (max-width: 900px) {
    margin: 0px 0px 20px 0px;
  }

  @media (max-width: 699px) {
    border-top-right-radius: 150px;
    border-bottom-left-radius: 123px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 0px 40px;

  @media (max-width: 900px) {
    margin: 20px 0px 0px 36px;
  }
`;

export const GithubIcon = styled.img.attrs({
  src: "/Images/github.svg",
})`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  transition: all 100ms ease;
  margin-left: 10px;
  cursor: url("/Images/goldSword.cur"), auto;

  &:hover {
    outline: 4px solid #662d91;
  }
`;

export const LinkedinIcon = styled.img.attrs({
  src: "/Images/linkedin.png",
})`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  transition: all 100ms ease;
  cursor: url("/Images/goldSword.cur"), auto;

  &:hover {
    outline: 4px solid #662d91;
  }
`;
