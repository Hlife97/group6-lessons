// const heaadingTag = document.querySelector('h1');

// function salamVer(ad) {
//     console.log('hi ' + ad);
// }

// heaadingTag.addEventListener('dblclick', function () {
//     salamVer("John");
// })

// ? then yazmagin sebebi gozlemek ucundur... async - await

// fetch(API).then((response) => response.json())

// async function getData() {
//     const res = await fetch(API_URL)
//     const safData = await res.json();
// }

// const getData2 = async () => {
//     const res = await fetch(API_URL);
//     const data = await res.json();

//     return data;
// }

// const city = prompt("Sheher daxil edin...");

let city = '';
let units = 'metric';
const API_KEY = "df179858bae77c97719a464eea613573";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=`;

const cityInput = document.querySelector("#city");
const button = document.querySelector("#btn");
const result = document.querySelector('.result');


const getData = async (city) => {
    const response = await fetch(API_URL + city + `&units=${units}` + "&appid=" + API_KEY);
    const data = await response.json();

    return data;
}

cityInput.addEventListener('keydown', (event) => {
    city = event.target.value;

    if (event.keyCode == 13) {
        getData(city);
        showUI();
    }
})

button.addEventListener('click', () => {
    getData(city);
    showUI();
})


const showUI = async () => {
    const proqnoz = await getData(city);
    const h1 = document.createElement('h1');
    const div = document.createElement('div');

    result.innerHTML = ''

    if (proqnoz.cod == 404) {
        h1.innerText = "Sheher tapilmadi...";
        result.appendChild(h1);
    } else {
        h1.innerText = proqnoz.name;
        div.innerText = Math.floor(proqnoz.main.temp)

        result.appendChild(h1)
        result.appendChild(div)
    }
}


// const pattern = /[0-9\W_]/g;

// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt.match(pattern)

// console.log(matches)