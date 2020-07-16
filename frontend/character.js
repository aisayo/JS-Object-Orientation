class Student {
    constructor(name, grade, school) {
        this.name = name,
        this.grade = grade
        this.school = school
    }

    sayName(){
        return `Hi, I am ${this.name}`
    }

    renderStudent() {
        const body = document.body
        body.innerHTML = this.name
    }
}

