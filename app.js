const section = document.querySelector('section');
const playerLives = document.querySelector('span');
const playerLivesCount = 7;
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//display player lives count
playerLives.textContent = playerLivesCount;

//Generate the data
const getData = () => [
    { imgSrc: '/images/butterfly.png', name: 'butterfly' },
    { imgSrc: '/images/cow.png', name: 'cow' },
    { imgSrc: '/images/panda.png', name: 'panda' },
    { imgSrc: '/images/penguin.png', name: 'penguin' },
    { imgSrc: '/images/snail.png', name: 'snail' },
    { imgSrc: '/images/tiger.png', name: 'tiger' },
    { imgSrc: '/images/turtle.png', name: 'turtle' },
    { imgSrc: '/images/zebra.png', name: 'zebra' },
    { imgSrc: '/images/butterfly.png', name: 'butterfly' },
    { imgSrc: '/images/cow.png', name: 'cow' },
    { imgSrc: '/images/panda.png', name: 'panda' },
    { imgSrc: '/images/penguin.png', name: 'penguin' },
    { imgSrc: '/images/snail.png', name: 'snail' },
    { imgSrc: '/images/tiger.png', name: 'tiger' },
    { imgSrc: '/images/turtle.png', name: 'turtle' },
    { imgSrc: '/images/zebra.png', name: 'zebra' },
];

//Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;

};


// card Generator
const cardGenerator = () => {
    const cardData = randomize();
    //generate html
    cardData.forEach((items, index) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        //add class to it
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //attach info to the cards
        face.src = items.imgSrc;
        face.setAttribute('data-id', index);
        //attach the cards to the section
        const cardSS = section.appendChild(card);

        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener('click', (e) => {
            const clickedCard = e.target;
            if (clickedCard.nodeName === 'IMG') {
                const cardId = clickedCard.getAttribute('data-id');
                cardsChosen.push(cardData[cardId].name);
                cardsChosenId.push(cardId);
                clickedCard.classList.add('toggleCard');
                card.classList.add('toggleCard');
                if (cardsChosen.length === 2) {
                    setTimeout(checkForMatch, 500);
                }
            }
        });
    });
};


// check for match
const checkForMatch = () => {
    const cards = document.querySelectorAll('.card');
    const firstCardId = cardsChosenId[0];
    const secondCardId = cardsChosenId[1];
    const firstCard = cards[firstCardId].querySelector('.face');
}
