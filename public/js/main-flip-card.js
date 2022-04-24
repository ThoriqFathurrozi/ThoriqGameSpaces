const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e) {
  let clickedCard = e.target; //user click card
  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      //   return the cardOne value to clickedCard
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("img").src,
      cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  //if two card matches
  if (img1 === img2) {
    matchedCard++;
    //if matched value is 8 that means user has matched all the cards (8 * 2 = 16 cards)
    if (matchedCard == 8) {
      setTimeout(() => {
        return shuffleCard();
      }, 1000); // calling shuffel card in 1s
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    // setting card value to blank
    cardOne = cardTwo = "";
    return (disableDeck = false);
  }
  // if twho card nit matches
  setTimeout(() => {
    //   adding class shake for both card after 400ms
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    //   remove 2 class shake and flip from both cards after 1.2s
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    // setting both card value to blank
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

function shuffleCard() {
  matchedCard = 0;
  disableDeck = false;
  cardOne = cardTwo = "";
  //   creating arrry if 16 items and each item repeated twice
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  // sorting array random ly
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

  //   removeing class from all card and passing random image to each card
  cards.forEach((card, index) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector("img");
    imgTag.src = `img/img-${arr[index]}.png`;
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

// adding click card
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
