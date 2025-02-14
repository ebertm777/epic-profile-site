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
  color: #f9f6ee;
  font-family: "Lato";
  font-size: 22px;

  div {
    padding: 2px;
    margin: 0px 20px 0px 20px;
    transition: all 100ms ease;
    pointer-events: all;
    cursor: url("/goldSword.cur"), auto;

    &:hover {
      color: #ffffff;
      border-bottom: 4px solid #662d91;
    }
  }
`;

export const AuthorItem = styled.h2`
  font-family: "Lato";
  font-size: 22px;
  font-weight: 700;
  padding: 2px;
  margin: 0px 20px 0px 20px;
`;

export const Elements = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Anchor = styled.a`
  all: unset;
`;

export const TopMenuItens = styled.div`
  font-weight: 300;
  color: #f9f6ee;
`;

export const PersonalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

// export const ProfilePic = styled.img.attrs({
//   src: "/ValenciaFoto.jpg",
// })`
//   width: 220px;
//   height: 220px;
//   border-radius: 50%;
//   object-fit: cover;
//   align-self: center;
//   margin-top: 50px;
//   outline: 2px solid #662d91;
//   transition: all 100ms ease;

//   &:hover {
//     outline: 8px solid #662d91;
//   }
// `;
