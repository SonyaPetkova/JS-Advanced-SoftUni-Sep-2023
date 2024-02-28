
function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name=name,
            this.email=email
        }
    //     toString(){
    // return `${this.constructor.name} (name: ${this.name}, email: ${this.email}`
    //     }

      
    }
    class Teacher extends Person{
constructor(name,email,subject){
super(name,email);
this.subject=subject
}
// toString(){
// return ``
// }

    }
   
    
    return {
    
    Person,
    
    Teacher
    
    }
    // let newPerson=new Person("BOBO","bobyg@abv.bg")
    // console.log(newPerson.toString());

    }

personAndTeacher()