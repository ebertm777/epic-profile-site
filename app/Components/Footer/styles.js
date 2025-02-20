import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  animation: color-change-5x 6s linear infinite alternate both;

  .color-change-5x {
    animation: color-change-5x 6s linear infinite alternate both;
  }

  @keyframes color-change-5x {
    0% {
      background: #662d91;
    }
    25% {
      background: #720e9e;
    }
    50% {
      background: #662d91;
    }
    75% {
      background: #33006F;
    }
    100% {
      background: #800080;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0px 12px 0px 12px;
`;

export const Creation = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Iten = styled.p`
  font-family: "Lato";
  color: #ffffff;
  font-size: 11px;
`;

export const Name = styled.p`
  font-family: "Lato";
  font-weight: 300;
  font-size: 11px;
  color: #ffffff;
  margin-left: 4px;
`;

export const Year = styled.p`
  font-family: "Lato";
  font-weight: 300;
  font-size: 12px;
  color: #ffffff;
`;

export const Used = styled.p`
  font-family: "Lato";
  font-weight: 300;
  font-size: 11px;
  color: #ffffff;
`;

export const MadeWith = styled.p`
  font-family: "Lato";
  font-weight: 300;
  font-size: 11px;
  color: #ffffff;
  margin-left: 4px;
`;

export const BlackMage = styled.img`
width: 28px;
height: 28px;

@media (max-width: 600px) {
  width: 25px;
  height: 25px;
  }
`;