// // const languages = [
// //     'English',
// //     'Finnish',
// //     'English',
// //     'French',
// //     'Spanish',
// //     'English',
// //     'French',
// // ];

// // const langsSet = new Set(languages);

// // langsSet.add('English');
// // langsSet.add('Azerbaijan');

// // langsSet.delete('Azerbaijan');

// // console.log(langsSet.has('English'))
// // console.log(langsSet)
// // console.log(langsSet.size)

// // langsSet.forEach(lang => console.log(lang));

// // const a = [1, 2, 3, 4, 5, 8, 9];
// // const b = [3, 4, 5, 6, 7];

// // const c = [...a, ...b];

// // const setA = new Set(a);
// // const setB = new Set(b);
// // const setC = new Set(c);

// // console.log(setC)
// // const res = a.filter(element => element == 8);
// // console.log(res);
// // const result = a.filter(element => setB.has(element));

// // console.log(result)


// // const obj = {
// //     name: "John",
// //     age: 34,
// //     true: true,
// // }

// // console.log(obj)

// // const map = new Map();

// // map.set("ad", "John");
// // map.set(25, "Hello");
// // map.set(true, "Doe");

// // console.log(map)
// // console.log(map.get("ad"));
// // console.log(map.get(25));
// // console.log(map.get(true));


// // countries = [
// //     ['Finland', 'Helsinki'],
// //     ['Sweden', 'Stockholm'],
// //     ['Norway', 'Oslo'],
// // ]
// // const map2 = new Map(countries)

// // map2.forEach(country => {
// //     console.log(country)
// // });

// // console.log("--------------------------------")

// // const langs = ["html", "css", "js"];
// // const [h, ...other] = langs;

// // console.log(other)


// // for (const [country, city] of map2) {
// //     console.log(country, city)
// // }

// class Car {
//     constructor(model, motor = "Not engine", year, month, day, color, body = "No body") {
//         this.model = model;
//         this.motor = motor;
//         this.year = year;
//         this.month = month;
//         this.day = day;
//         this.color = color;
//         this.body = body;
//         this.countries = [];
//     }

//     getFullYear() {
//         return this.year + "-" + this.month + "-" + this.day;
//     }

//     get getModel() {
//         return this.model;
//     }

//     set setCountry(country) {
//         this.countries.push(country);
//     }
// }


// const bmw = new Car("BMW", "2.0", 2016, 6, 15, "red", "sedan");
// const mercedes = new Car("Mercedes", "3.5", 2021, 7, 23, "blue", "Jeap");

// bmw.setCountry = "Germany";
// bmw.setCountry = "China";

// console.log(bmw)
// console.log(mercedes)
// console.log("Mercedes: ", mercedes.getFullYear())
// console.log("Model: ", mercedes.getModel)
// console.log("BMW countries: ", bmw.countries)


// class Hyundai extends Car {

//     constructor(model, motor = "Not engine", year, month, day, color, body = "No body", econom, fuel) {
//         super(model, motor, year, month, day, color, body);
//         this.econom = econom;
//         this.fuel = fuel;
//     }

//     getHyundaiServices() {
//         return ["Babek PR", "Khatai"]
//     }
// }

// const elantra = new Hyundai("Elantra", "1.6", 2016, 6, 24, "gray", "sedan", "Hybrid", "Benzin");


// console.log(elantra)
// console.log(elantra.color)
// console.log(elantra.getFullYear())
// console.log(elantra.getHyundaiServices())



// const cars = ["Hyundai", "Mercedes", "Audi", "Ford", "BMW", "Lamborghini"];

// let randomIndex = Math.floor(Math.random() * (cars.length - 1));

// console.log(cars[randomIndex]);

// const root = document.querySelector('#root');
// const btn = document.querySelector('#btn');
// root.style.display = "flex";
// root.style.gap = "10px";

// cars.forEach(car => {
//     const div = document.createElement('div');

//     div.innerText = car;
//     div.style.border = "2px solid red";
//     div.style.padding = "10px";
//     root.appendChild(div);
// })

// btn.addEventListener('click', () => {
//     let randomIndex = Math.floor(Math.random() * (cars.length - 1));

//     const divs = document.querySelectorAll("#root div");

//     divs.forEach(div => {
//         div.style.backgroundColor = "transparent";
//     })
//     divs[randomIndex].style.backgroundColor = "yellow";
// })


// const text = document.querySelector('#text');

// text.addEventListener('keydown', (e) => {
//     let yazi = e.target.value;
//     const arr = yazi.split(',');

//     console.log(arr)
//     console.log(e.target.value)
// })