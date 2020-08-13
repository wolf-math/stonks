// import key from './api.js';


let results = document.getElementById("results");
let button = document.getElementById("button");

button.onclick = () => {
    // let loading = document.getElementById("loading");
    // loading.style.display = "block";
    let searchText = document.getElementById("bar").value;
    const url = `https://financialmodelingprep.com/api/v3/search?query=${searchText}&limit=10&exchange=NASDAQ&apikey=${key}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let row = '';
        data.forEach((i) => {
            row += `<tr>
                        <td>
                            <a href=https://financialmodelingprep.com/financial-summary/${i.symbol}>
                            ${i.symbol}
                            </a>
                        </td>
                        <td>${i.name}</td>
                    </tr>`;
        })
        document.getElementById("data").innerHTML = row;
    })
    // .then(loading.style.display = "none")
}
