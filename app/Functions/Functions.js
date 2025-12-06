import { Card, Description, EmojiCall } from "../Components/Stack/styles";
import { Skills } from "../Components/Stack/styles";
 import {
   cardData,
   emojiData,
   skillsData,
   techData,
 } from "../Constants/SiteData";

// function generateCard(card) {
//   let cards = [];
//   for (let i = 0; i < card; i++) {
//     cards.push(
//       <Card key={i} id={`card-${i}`}>
//         <EmojiCall>{emojiData[i]}</EmojiCall>
//         <Description>{cardData[i]}</Description>
//       </Card>
//     );
//   }
//   return cards;
// }

// function generateSkills(skill) {
//   let skills = [];
//   for (let i = 0; i < skill; i++) {
//     skills.push(<Skills key={i} id={`skill-${i}`} src={skillsData[i]} />);
//   }
//   return skills;
// }

// function generateTechs(tech) {
//   let techs = [];
//   for (let i = 0; i < tech; i++) {
//     techs.push(<Skills key={i} id={`tech-${i}`} src={techData[i]} />);
//   }
//   return techs;
// }

// module.exports.generateCard = generateCard;
// module.exports.generateSkills = generateSkills;
// module.exports.generateTechs = generateTechs;

export function generateCard(card) {
  let cards = [];
  for (let i = 0; i < card; i++) {
    cards.push(
      <Card key={i} id={`card-${i}`}>
        <EmojiCall>{emojiData[i]}</EmojiCall>
        <Description>{cardData[i]}</Description>
      </Card>
    );
  }
  return cards;
}

export function generateSkills(skill) {
  let skills = [];
  for (let i = 0; i < skill; i++) {
    skills.push(<Skills key={i} id={`skill-${i}`} src={skillsData[i]} />);
  }
  return skills;
}

export function generateTechs(tech) {
  let techs = [];
  for (let i = 0; i < tech; i++) {
    techs.push(<Skills key={i} id={`tech-${i}`} src={techData[i]} />);
  }
  return techs;
}
