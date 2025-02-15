import { Card, Description, EmojiCall } from "../Components/Stack/styles";
import { Skills, MainSkills } from "../Components/Stack/styles";
import { cardData, emojiData, skillsData } from "../Constants/SiteData";

function generateCard(card) {
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

function generateSkills(skill) {
  let skills = [];
  for (let i = 0; i < skill; i++) {
    skills.push(<Skills key={i} id={`skill-${i}`} src={skillsData[i]} />);
  }
  return skills;
}

module.exports.generateCard = generateCard;
module.exports.generateSkills = generateSkills;
