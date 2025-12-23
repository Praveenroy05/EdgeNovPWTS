// Class - Blueprint to create an object
// ES6 - ECMA Script - 2015

// Syntax:

// Class is a collection of Propoerties and methods
// Access modifier - the permission to access the variable or methods

// let i = 10

/*

class ClassName {

   // Property - varaible
    key1 : datatype 
    private key2 : datatype
    readonly key3 : datatype
    static key4 : datatype = "ABC" // Static variable cannot be accessed inside the non-static method

    // Constructor - Is a special type of method which performs the initialization of the variables or proerties inside the class.

    // this - Object of the current class

    constructor(key1, key2, key3){
        this.key1 = key1,
        this.key2  = key2,
        this.key3 = key3
    }


   // Method - function 

   // function functionName(){}

   functionName(){
    // ....
   }

   static function1(){}

}

const obj = new ClassName(1,2,3)

const obj1 = new ClassName(4,5,6)
const obj2 = new ClassName(10,20,30)

obj.key1
obj.functionName()

ClassName.key4
ClassName.function1()

1. constructor - special method - used to initialize the proerties of the class. It should be created with a keyword as "constructor" only.
2. this keyword - It is a reference variable that referes the current class object.
3. static keyword - It belongs to the class rather than object of a class. That means to access the static proerties and method we have to access using the ClassName. Ex: - ClassName.key3, ClassName.display()
4. non-static - It belongs to the object of a class. To access the non-static proerties and methods we have to create the object of a class. Ex: - obj.key1, obj.info()
5. private keyword - It is an access modifier. It is used to restrict the access of a variable and method within the class only. It can not be accessible outside of the class.
6. readonly keyword - It is used to declare a variable as read-only. It can be initialized only once either at the time of declaration or in the constructor of the class. After that it can not be modified.
7. Properties declaration inside the class in mandatory in TS but not mandatory in JS.


*/


class Employee{

    empId : number
    empName: string
    empAge : number
    private empSalary
    readonly offer = 30000
    static company = "ABC"

    constructor(id, name, age, empSalary)
    {
        this.empId = id // emp.empId = 101
        this.empName = name // emp.empName = "Rahul"
        this.empAge = age  // emp.empAge = 30
        this.empSalary = empSalary // emp.empSalary = 1000000
    }

    employeeInformation() :void{
        console.log(`Employee Id: ${this.empId}, Employee Name: ${this.empName}, Employee Age: ${this.empAge}, Employee Salary: ${this.empSalary}, Offer: ${this.offer}`);
    }

    static displayCompanyName(){
        console.log(Employee.company);
    }
}

const emp = new Employee(101, "Rahul", 30, 1000000)
const emp1 = new Employee(102, "John", 40, 4000000)

console.log(emp.empName);
console.log(emp1.empName);
//console.log(emp.empSalary);

emp.employeeInformation()
Employee.displayCompanyName()