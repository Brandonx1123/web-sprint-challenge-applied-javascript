// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from "axios";
console.log(axios);
const newArray = axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then ((res) =>{
    const getNewData =res.data
    console.log(res);
    const newCard = document.querySelector('.cards-container')
    newCard.appendChild(CardMaker(res));
})
.catch((err) =>{
    console.log(err)
})

function CardMaker(obj){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author =document.createElement ('div');
    const imgBox = document.createElement ('div');
    const image = document.createElement ('img');
    const authorName = document.createElement ('span');
    
    headline.textContent = obj.data.headline;
    image.src = obj.data.authorPhoto
    authorName.textContent = obj.data.authorName;

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgBox.classList.add('img-container');

    card.appendChild(headline);
    headline.appendChild(author);
    author.appendChild(imgBox);
    imgBox.appendChild(image);
    author.appendChild(authorName);

    card.addEventListener('click', ()=>{
        console.log(headline)
    })

return card 
}



newArray.forEach((articles)=>{
    axios
    .get(`https://lambda-times-api.herokuapp.com/${articles}`)
    .then ((res) =>{
        const getNewData =res.data
        console.log(res);
        const newCard = document.querySelector('.cards-container')
        newCard.appendChild(CardMaker(res));
    })
    .catch((err) =>{
        console.log(err)
    })
})  