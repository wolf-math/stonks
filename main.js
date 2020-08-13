import key from './api.js'

let searchText = document.getElementById("bar").value;
let button = document.getElementById("button");

const url = `https://financialmodelingprep.com/api/v3/search?query=${searchText}&limit=10&exchange=NASDAQ&apikey=${key}`

button.onclick = () => {
    console.log("Helo")
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}