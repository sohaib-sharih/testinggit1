// hello
// hi
const person = {
    firstname: "sohaib",
    lastname: "sharih",
    id: 500,
    fullname: function(){
        console.log(this.firstname  + " " + this.lastname)
    }
}
console.log(person.fullname())