//creating a class

// document.addEventListener("DOMContentLoaded", () => {
//     example();
// })

// class Character {
//     constructor(name, show){
//         this.name = name
//         this.show = show
//     }
//    //instance method
    // sayHello() {
    //     console.log(this)
    //   return `Hi, I am ${this.name} from ${this.show}`
    // }

//     renderCharacter() {
//         const body = document.body
//         body.innerHTML = 
//         ` 
//             <ul>
//             <li>${this.name} from ${this.show}</li>
//             </ul>
//         `
//     }
//   }

  // let character = new Character("Tommy", "Rugrats");
//   console.log(character.sayHello())



   
//instantiating a new instance of character class

//   const createCharacter = () => {
//     console.log(character); 
//     console.log(character.name); 
//     return character.renderCharacter(); 
//   }


//using bind

//   const tommy = {
//       name: "Tommy",
//       show: "Rugrats"
//   }

// //   function whatShow() {
// //       return `I am from ${this.show}`
// //   }

// const whatShow = () => {
//     console.log("inside arrow function", this)
// }
// //   console.log(whatShow())
// let charShow = whatShow.bind(tommy)
// console.log("binding", charShow())

  
// What gives? and how to apply with a Rails backend??

// 1. will make a fetch request to back end 
// 2. resolve the data with first .then()
// 3. in second .then(), will create new objects with data received

//using call()

// function getBrand(prefix) {
//     console.log(prefix + this.brand);
// }

// let honda = {
//     brand: 'Honda'
// };
// let audi = {
//     brand: 'Audi'
// };

// getBrand.apply(honda, [1, "test", true]);
// getBrand.apply(audi, [2, "driving", false]);

// dummy code

//index fetch request - return all character objects from backend


// fetch("https://bogus.com/characters")
// .then(resp => resp.json())
// .then(characterArray => 
//     //since this is an index, will get an array of objects
//     //need to iterate over array and create JS objects with it
//     characterArray.array.forEach(char => {


//         let character = new Character(char.name, char.show)
//         character.renderCharacter();

//         //creating new objects with the incoming data
//         //aappending to dom 


//     })
// )