import { Card } from "../Components/Stack/styles";
import { Description } from "../Components/Stack/styles";
import { cardData } from "../Constants/SiteData";

function generateCard(card) {
  let cards = [];
  for (let i = 0; i < card; i++) {
    cards.push(
      <Card key={i} id={`card-${i}`}>
        <Description>
          {cardData[i]}
        </Description>
      </Card>
    );
  }
  return cards;
}

module.exports.generateCard = generateCard;
