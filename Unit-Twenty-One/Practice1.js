// practice problem 1:
  /*
     A class is a blueprint of template for creating object.It defines properties and
     behavior.An object is an instance of a class that contains actual values.
  */
// practice problem 2:
  /*
      A class instance is a specific object created from a class. 
  */

// practice problem 3 :
class Vehicle {
  constructor(brand,model,price){
    this.brand = brand,
    this.model = model,
    this.price = price
  }
}
const BMW_X5 = new Vehicle("BMW","X5",1200000);
const Tesla_X5 = new Vehicle("Tesla","Model3",40000);
console.log(BMW_X5,Tesla_X5);

// practice problem 4 :
class Worker {
  constructor(id,name,hoursWorked){
    this.id = id,
    this.name = name,
    this.hoursWorked = hoursWorked
  }
}
const newWorker = new Worker(101,"Tom Cruise",40);
console.log(newWorker);

// practice problem 5 :
class Library {
  constructor(name,books,location){
    this.name = name,
    this.books = books,
    this.location = location
  }
}
const newLibrary = new Library("Central Library",10000,"Dhaka");
console.log(newLibrary instanceof Library);

// practice problem 6 :
class Classroom {
  constructor(section,teacher){
    students: [],
    this.section = section,
    this.teacher = teacher
  }
}
const newInstance = new Classroom("A","Mr. Plumber");
console.log(newInstance);

// practice problem 7 :
class Product {
  constructor(name,category,stock){
    this.name = name,
    this.category = category,
    this.stock = stock
  }
}
const newProduct =new Product("mobile","Electronics",50);
console.log(newProduct);

// practice problem 8 :
class Product1 {
  constructor(name,category,stock = 0){
    this.name = name,
    this.category = category,
    this.stock = stock
  }
}
const newProduct1 =new Product1("mobile","Electronics",50);
const newProduct2 =new Product1("mobile","Electronics");
console.log(newProduct1);
console.log(newProduct2);