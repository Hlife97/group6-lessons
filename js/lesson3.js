// // function sayMyName(ad, soyad) {
// //     return "Hello " + ad + " " + soyad;
// // }

// // const funk = function () { return "John" }()

// // console.log(
// //     sayMyName(funk, "Doe")
// // )

// // setTimeout(() => {
// //     console.log("Hello ")
// // }, 4000);

// // let count = 5;

// // const myInterval = setInterval(() => {

// //     console.log("Hi")
// //     count--;

// //     if (count == 0) {
// //         clearInterval(myInterval);
// //     }
// // }, 1000);


// const countries = ["Turkey", "Finland", "Azerbaijan", "Moscow", "United", "Niderland", "Island"];

// // countries.forEach((_, __, a) => console.log(a))

// // const dongu = (country) => {
// //     console.log(country)
// // }

// // countries.forEach(dongu)

// // const countriesToUpper = countries.map((country) => country.toUpperCase())

// // console.log(countriesToUpper)

// const users = [
//     {
//         id: 1,
//         name: "Ahmet Yılmaz",
//         email: "ahmet.yilmaz@example.com",
//         age: 28,
//         role: "Developer"
//     },
//     {
//         id: 2,
//         name: "Ayşe Kaya",
//         email: "ayse.kaya@example.com",
//         age: 32,
//         role: "Project Manager"
//     },
//     {
//         id: 3,
//         name: "Mehmet Demir",
//         email: "mehmet.demir@example.com",
//         age: 45,
//         role: "CTO"
//     },
//     {
//         id: 4,
//         name: "Elif Aksoy",
//         email: "elif.aksoy@example.com",
//         age: 26,
//         role: "Designer"
//     },
//     {
//         id: 5,
//         name: "Murat Aydın",
//         email: "murat.aydin@example.com",
//         age: 38,
//         role: "DevOps Engineer"
//     },
//     {
//         id: 6,
//         name: "Fatma Çelik",
//         email: "fatma.celik@example.com",
//         age: 30,
//         role: "Data Scientist"
//     },
//     {
//         id: 7,
//         name: "Can Özdemir",
//         email: "can.ozdemir@example.com",
//         age: 29,
//         role: "Frontend Developer"
//     },
//     {
//         id: 8,
//         name: "Hüseyin Kara",
//         email: "huseyin.kara@example.com",
//         age: 35,
//         role: "Backend Developer"
//     },
//     {
//         id: 9,
//         name: "Zeynep Yıldız",
//         email: "zeynep.yildiz@example.com",
//         age: 27,
//         role: "QA Engineer"
//     },
//     {
//         id: 10,
//         name: "Emre Tan",
//         email: "emre.tan@example.com",
//         age: 31,
//         role: "Product Owner"
//     }
// ];

// const sonuLand = countries.filter((country) => country.endsWith("land"));

// const filteredUsers = users.filter((user) => user.age < 30);


// console.log(filteredUsers)


// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// numbers.forEach((number) => sum += number);

// console.log(sum)

// const toplam = numbers.reduce((acc, cur) => acc + cur, 0);

// console.log(toplam);

// const names = ['Asabeneh', 'Mathias', 'Elias', 23]

// const allString = names.every((name) => typeof name === 'number');

// console.log(allString + " Every ile yoxladi")

// const isString = names.some((name) => typeof name === 'number');

// console.log(isString + " Some ile yoxladi")

// const ages = [24, 22, 14, 25, 32, 35, 18]

// const age = ages.findIndex((age) => age < 20);

// console.log(age)


// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']


// const sortedProducts = products.sort();

// console.log(sortedProducts)

// const numbers = [3, 5, 1, 6, 12, 17, 9, 24, 8, 2];

// const sortedNumbers = numbers.sort((a, b) => a - b);

// console.log(sortedNumbers)

// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
// ];

// const sortedUsers = users.sort((a, b) => {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
// })

// console.log(sortedUsers)

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
// ];

// languages.push('English');

// console.log(languages);

// const langsSet = new Set(languages);

// langsSet.add('English');
// langsSet.add('Turkish');

// langsSet.delete('French');

// // langsSet.clear();

// console.log(langsSet);
// console.log(langsSet.size);



// const progLangs = new Set();

// progLangs.add('HTML')
// progLangs.add('CSS')
// progLangs.add('JS')
// progLangs.delete('JS')
// // progLangs.clear()

// console.log(progLangs.has("HTML"))


// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];
// let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);

// const mySet = new Set(c);

// console.log(mySet)

// const beraberOlanlar = a.filter((deyer) => !B.has(deyer));

// console.log(beraberOlanlar)

// const user = {
//     name: "John",
//     age: 34,
//     pasport: true
// }

// countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
// ]
// const map = new Map(countries)
// console.log(map)

// const myMap = new Map();

// myMap.set('name', 'John');
// myMap.set(23, "Welcome");
// myMap.set(true, "kecin");

// myMap.clear()

// console.log(myMap.values())

// console.log(myMap.get(23))
// console.log(myMap.get(true))


const progLangs = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySql'];

// const html = progLangs[0];
// const css = progLangs[1];

// console.log(html)
// console.log(css)

// const [, , js, ...backend] = progLangs;

// console.log(backend);

// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]

// countries.forEach(([country, city]) => {
//     console.log(country + "-" + city)
// })]

// for (let i = 0; i < countries.length; i++) {
//     let [country, city] = countries[i];
//     console.log(country + "-" + city)
// }

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }

// const { width: w, height: h, area: a } = rectangle;

// console.log(w)
// console.log(h)

// ? Daxil edilmiş ədədi sözlə yazan funskiya

// const eded = prompt("Eded daxil edin...");
// // {
// //     key: 1,
// //     value: bir
// // }
// const ededlerYaziIle = [
//     'bir',
//     'iki',
//     'uc',
//     'dord',
//     'bes',
//     'alti',
//     'yeddi',
//     'sekkiz',
//     'doqquz',
//     'on',
//     'yuz',
//     'min',
//     'milyon',
//     'milyard',
//     'trilyon'
// ];

// const sozleYaz = (eded) => {
//     let result = '';
//     if (isNaN(eded)) return "Reqem daxil edin.";

//     return eded;
// }


// function edediSozleYazan(eded) {
//     const vahidlerdenSozler = [
//         "", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"
//     ];
//     const onluqlardanSozler = [
//         "", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"
//     ];
//     const yuzlerdenSozler = [
//         "", "yüz", "iki yüz", "üç yüz", "dörd yüz", "beş yüz", "altı yüz", "yeddi yüz", "səkkiz yüz", "doqquz yüz"
//     ];

//     if (eded === 0) return "sıfır";

//     let sozle = "";

//     if (eded >= 1000) {
//         const minlik = Math.floor(eded / 1000);
//         sozle += `${vahidlerdenSozler[minlik]} min `;
//         eded %= 1000;
//     }

//     if (eded >= 100) {
//         const yuzluk = Math.floor(eded / 100);
//         sozle += `${yuzlerdenSozler[yuzluk]} `;
//         eded %= 100;
//     }

//     if (eded >= 10) {
//         const onluq = Math.floor(eded / 10);
//         sozle += `${onluqlardanSozler[onluq]} `;
//         eded %= 10;
//     }

//     if (eded > 0) {
//         sozle += `${vahidlerdenSozler[eded]} `;
//     }

//     return sozle.trim();
// }

// // Test edilməsi
// console.log(edediSozleYazan(77897)); // "bir min iki yüz otuz dörd"
// console.log(edediSozleYazan(1001)); // "bir min bir"
// console.log(edediSozleYazan(500));  // "beş yüz"
// console.log(edediSozleYazan(45));   // "qırx beş"
// console.log(edediSozleYazan(0));    // "sıfır"




// ? 2 arrayın eyniliyini yoxlayın

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 3, 1, 5, 4];

// // Massivlərin uzunluqlarını yoxlayırıq
// if (arr1.length !== arr2.length) {
//     console.log("Beraber deyil");
// } else {
//     let found;
//     let beraberdir = true;

//     for (let i = 0; i < arr1.length; i++) {
//         found = false;
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             beraberdir = false;
//             break;
//         }
//     }

//     if (beraberdir) {
//         console.log("Beraberdir");
//     } else {
//         console.log("Beraber deyil");
//     }
// }
