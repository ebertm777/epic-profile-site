import styled from "styled-components";

export const ShowRpgModel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #f9f6ee;
  margin-bottom: 12px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 10px;
  width: 160px;
  height: 40px;
  background: linear-gradient(90deg, #662d91 0%, #ed6ea0 100%);
  font-family: "MedievalSharp";
`;

export const Container = styled.div.attrs((props) => ({}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1300px;
  width: 100%;
  height: ${(props) => (props.$isActive ? "600px" : "0px")};
  margin-bottom: 28px;
  transition: height 0.8s ease-in-out;
  margin-top: 12px;

  &:hover {
    outline: 4px solid #662d91;
  }

  iframe {
    border: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
