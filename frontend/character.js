class Character {
    constructor(name) {
        this.name = name
    }
    sayName(){
        return `Hi, I am ${this.name}`
    }

    renderCharacter() {
        const body = document.body
        body.innerHTML = this.name
    }
}

