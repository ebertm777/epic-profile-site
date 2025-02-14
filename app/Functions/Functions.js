import { Card } from "../Components/Stack/styles";
import { Description } from "../Components/Stack/styles";
import { EmojiCall } from "../Components/Stack/styles";
import { cardData, emojiData } from "../Constants/SiteData";

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

module.exports.generateCard = generateCard;
