import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  max-width: 1000px;

  .projects-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 84px;
  }

  .clickMe {
    color: #fff;
    font-family: "Prompt";
    font-size: 16px;
    max-width: 220px;
  }

  .More {
    color: #fff;
    font-family: "Prompt";
    text-align: center;
    margin-top: 54px;
    font-size: 14px;
    max-width: 490px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 16px;
  margin-top: 34px;
  font-family: Quicksand;
  width: 100%;
  max-width: 1002px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 18px;
`;

export const ProjectsContainer = styled.div`
  margin-top: 14px;
`;

export const ProjectName = styled.h3`
  font-family: Quicksand;
  font-size: 18px;
  margin-top: 12px;
  color: #fff;
  margin-bottom: 0px;
  max-width: 320px;
  border-bottom: 1px solid #555;
  padding-bottom: 6px;
`;

export const AboutProject = styled.p`
  font-family: "Lato";
  font-size: 14px;
  color: #ccc;
  margin-top: 8px;
  max-width: 320px;
`;

export const ProjectCard = styled.img`
  width: 320px;
  height: 220px;
  background-color: #ffffff;
  border-radius: 14px;
  border: 2px solid #444;
  cursor: pointer;
  object-fit: cover;
`;

//modal stuff.
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  backdrop-filter: blur(3px);
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 80vh;
  animation: fadeIn 0.3s ease-in-out;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  font-size: 32px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    transform: scale(1.15);
    color: #ff5555;
  }
`;

export const LinkButton = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;
  color: #f0f0f0f0;
  font-family: "Lato";
`;
