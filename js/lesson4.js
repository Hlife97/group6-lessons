// try {
//     let firstName = "John";

//     let fullName = firstName + " " + lastName;

//     console.log(fullName)
// } catch (e) {
//     // const error = {
//     //     name: "ReferanceError",
//     //      message: "it is not defined"
//     // }
//     console.warn("Xeta adi: " + e.name);
//     console.error("Xeta mesaji: " + e.message);
// } finally {
//     console.log("Bura her zaman calisacaq.")
// }


// const checkNumber = () => {
//     try {
//         const deyer = prompt("Deyer daxil edin...");

//         if (deyer.trim() === "") throw new Error("Required");

//         if (isNaN(deyer)) throw { name: "TypeError", message: deyer + " is not a number" }

//         console.log(" girilen deyer: " + deyer);
//     } catch (error) {
//         console.error("Xeta adi: ", error.name)
//         console.error("Xeta mesaji: ", error.message)
//     }
// }


// checkNumber()

// const user = {
//     name: "John",
//     age: 34
// }

// const jsonDatas = `{
//     "users": [
//         {
//             "firstName": "Asabeneh",
//             "lastName": "Yetayeh",
//             "age": 250,
//             "email": "asab@asb.com"
//         },
//         {
//             "firstName": "Alex",
//             "lastName": "James",
//             "age": 25,
//             "email": "alex@alex.com"
//         },
//         {
//             "firstName": "Lidiya",
//             "lastName": "Tekle",
//             "age": 28,
//             "email": "lidiya@lidiya.com"
//         }
//     ]
// }`


// const usersText = `{
// "users":[
//   {
//     "firstName":"Asabeneh",
//     "lastName":"Yetayeh",
//     "age":250,
//     "email":"asab@asb.com"
//   },
//   {
//     "firstName":"Alex",
//     "lastName":"James",
//     "age":25,
//     "email":"alex@alex.com"
//   },
//   {
//   "firstName":"Lidiya",
//   "lastName":"Tekle",
//   "age":28,
//   "email":"lidiya@lidiya.com"
//   }
// ]
// }`;


// console.log(usersText[0])

// const usersObj = JSON.parse(usersText)

// console.log(usersObj.users)

// const products = [
//     {
//         id: 1,
//         name: "Product 1",
//         price: 200
//     },
//     {
//         id: 2,
//         name: "Product 2",
//         price: 250
//     },
//     {
//         id: 3,
//         name: "Product 3",
//         price: 280
//     },
// ]

// console.log(products);


// const productsStringifyed = JSON.stringify(products);

// console.log(productsStringifyed)

// ! Web Storages

// sessionStorage.setItem("product", "Iphone 14");
// sessionStorage.setItem("book", "Kitab 1");

// sessionStorage.removeItem("product");

// const myProduct = sessionStorage.getItem("product");

// sessionStorage.clear();

// console.log(myProduct);

// console.log(sessionStorage.key(2))


// localStorage.setItem("product", "Iphone 15");
// localStorage.setItem("book", "Kitab 1");

// localStorage.clear();

// const products = [
//     {
//         id: 1,
//         name: 'Iphone',
//         price: 1000
//     },
//     {
//         id: 2,
//         name: 'Samsung',
//         price: 1200
//     },
//     {
//         id: 3,
//         name: 'Oppo',
//         price: 2200
//     },
// ];

// localStorage.setItem("products", JSON.stringify(products));

// const productsFromLocalS = JSON.parse(localStorage.getItem("products"));

// console.log(productsFromLocalS)


// ! Promises

// setTimeout(function(){return 1}, timeout);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             let products = ["Iphone 11", "Sony"];

//             if (products.length > 1) {
//                 resolve("Hersey qaydasindadir " + products)
//             } else {
//                 reject("Xetalidir, " + products);
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }, 2000);
// });

// promise.then((response) => {
//     console.log(response);
// }).catch(function (err) {
//     console.error(err)
// })

// const API_URL = "https://jsonplaceholder.typicode.com/todos";


// fetch(API_URL)
//     .then(function (resp) {
//         return resp.json();
//     })
//     .then((data) => {
//         const filteredData = data.filter((x) => x.userId == 4);

//         filteredData.forEach((item) => {
//             console.log(item)
//         })
//         // console.log(filteredData)
//     })
//     .catch((err) => console.log(err))

// const COUNTRIES_API_URL = "https://countriesnow.space/api/v0.1/countries/";

// fetch(COUNTRIES_API_URL)
//     .then(function (cavab) {
//         return cavab.json();
//     })
//     .then(function (cavab) {
//         const countries = cavab.data;

//         console.log(countries)
//         const filteredCountries = countries.filter((olke) => olke.iso2.endsWith('TR'))

//         console.log(filteredCountries)
//     })
//     .catch(err => console.log(err))