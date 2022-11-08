// hello
// hi
const person = {
    firstname: "sohaib",
    lastname: "sharih",
    id: 500,
    fullname: function(babe){
        console.log(this.firstname  + babe +" " + this.lastname)
        // return this.firstname  + babe +" " + this.lastname
    }
}

// console.log(person.fullname(50)) // This will give undefined because the value is not being stored in another variable. 
var getFull = person.fullname(500)