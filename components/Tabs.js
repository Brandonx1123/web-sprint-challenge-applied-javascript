// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from "axios";
console.log(axios);

axios
.get('https://lambda-times-api.herokuapp.com/topics')
.then ((res) =>{
    const getdata =res.data.topics
    console.log(res)
    getdata.forEach(item =>{
        newTab.appendChild(tabMaker(item))
    })
})
.catch ((err) =>{
    console.log(err)
})

const newTab = document.querySelector('.topics');

function tabMaker (obj){

const tabDiv = document.createElement('div');
tabDiv.textContent =obj;
tabDiv.classList.add('tab');
newTab.appendChild(tabDiv)
return tabDiv;

}

