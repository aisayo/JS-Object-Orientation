//creating a class

class Character {
    constructor(name, show) {
      this.name = name
      this.show = show
    }
   
    //instance method
    sayHello() {
      return `Hi, I am ${this.name} from ${this.show}`
    }

    renderCharacter() {
        const body = document.body
        body.innerHTML = 
        `
        ${this.name} from ${this.show}
        `
    }
  }
   
//instantiating a new instance of character class

  const createCharacter = () => {
    let character = new Character("Tommy", "Rugrats");
    console.log(character); 
    console.log(character.name); 
    return character.renderCharacter(); 
  }


//using bind
//   const tommy = {
//       name: "Tommy",
//       show: "Rugrats"
//   }

//   function whatShow() {
//       return `I am from ${this.show}`
//   }

//   console.log(whatShow())
//   let charShow = whatShow.bind(tommy)
//   console.log(charShow())

  
// What gives? and how to apply with a Rails backend??

// 1. will make a fetch request to back end 
// 2. resolve the data with first .then()
// 3. in second .then(), will create new objects with data received


// dummy code

//index fetch request
// fetch("https://bogus.com/characters")
// .then(resp => resp.json())
// .then(characterArray => 
//     //since this is an index, will get an array of objects
//     //need to iterate over array and create JS objects with it
//     characterArray.array.forEach(char => {
//         let character = new Character(char.name, char.show)
//         character.renderCharacter();
//     })
// )