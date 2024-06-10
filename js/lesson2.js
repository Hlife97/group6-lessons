// // ? 1 - dən 100 - ə qədər sadə və mürəkkəb ədədləri tapın

// let sadeEdedler = [];
// let murekkebEdedler = [];

// // 1 e bolunur ve ozune bolunur.

// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         sadeEdedler.push(i);
//     } else {
//         murekkebEdedler.push(i);
//     }
// }

// console.log("Sade ededler: " + sadeEdedler)
// console.log("Murekkeb ededler: " + murekkebEdedler)



// console.log(window)

// let a = "X";

// // console.log(a);

// function test() {
//     // console.log(a);
//     // let b = "Y";
//     // console.log(b);


//     if (true) {
//         // console.log(a);
//         // console.log(b);

//         let c = "Z";
//         console.log(c);
//     }
//     console.log(c);
// }

// // console.log(b);

// test();

// console.log(c)


// ! OBJECTS

// let deyer1 = null;
// let deyer3 = [];
// let deyer4 = {};

// let deyer2 = true;
// let deyer5 = "";

// console.log(typeof deyer1)
// console.log(typeof deyer3)
// console.log(typeof deyer4)
// console.log(typeof deyer2)
// console.log(typeof deyer5)

let person = {
    ad: "Adigozel",
    soyad: "Memmedli",
    yas: 34,
    langs: ["AZ", "TR"],
    address: {
        city: "Baku",
        street: "1005"
    },
    getFullName: function () {
        console.log(this)
        // this.alert("Hello world")
        return this.ad + " " + this.soyad;
    }
};

// console.log(person);
// console.log(person.getFullName());
// console.log(window);


// console.log(person.yas);
// console.log(person['yas']);

// const copiedPerson = Object.assign({}, person);
// console.log(copiedPerson)

// person.passport = true;

// console.log(person)

// [['ad', 'fazil'], ['yas', 34]]

// const entries = Object.entries(person)
// const deyerler = Object.values(person);
// const keyler = Object.keys(person);

// console.log(entries)
// console.log(deyerler)
// console.log(keyler)

// console.log(person.hasOwnProperty('getFullName'))

//! Callback funksiyalar parametr olaraq basqa bir funksiya alanlara deyilir.
// function kamil() { return "Kamil" }

// function sayHello(name) {
//     return name + " Hello";
// }

// console.log(sayHello(kamil()))

// function vergiHesabla(maas, faiz) {
//     return (maas * faiz) / 100;
// }

// function maasHesabla(x, maas, faiz) {
//     return maas - x(maas, faiz);
// }

// console.log(maasHesabla(vergiHesabla, 1500, 5));