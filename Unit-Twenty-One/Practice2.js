// practice problem 1:
class Hotel {
    constructor(hotelName,roomNum,price){
        this.hotelName = hotelName,
        this.roomNum = roomNum,
        this.price = price
    };
    getHotelName(hotelName) {
        return this.hotelName;
    }
}
const newHotel = new Hotel("The City Inn , Khulna",3,2000);
console.log(newHotel.getHotelName());

// practice problem 2:
class Employee{
    constructor(EmployeeName,Position,Salary){
        this.EmployeeName = EmployeeName,
        this.Position = Position,
        this.Salary = Salary
    }
    getSalary (Salary){
        return this.Salary ;
    }
}
const newEmployee = new Employee("Chandra Shekhor Mondal","Senior Web Developer",35000);
console.log(newEmployee.getSalary());

// practice problem 3 :
class Library {
    constructor(books=[]){
        this.books = books
    }
    addBooks(book){
        this.books.push(book);
    }
    hasBooks(Book){
       return this.books.includes(Book);
    }
}
const newBooks = new Library(["ChandraShekhor"]);
console.log(newBooks);
newBooks.addBooks("Bindhu");
console.log(newBooks);
console.log(newBooks.hasBooks("Bindhu"));


// practice problem 4 :
class ShoppingCart {
    constructor(products = [],totalPrice =0){
        this.products = products,
        this.totalPrice = totalPrice
    }
    addCart(productName,ProductPrice){
        this.products.push(productName);
        this.totalPrice = this.totalPrice + ProductPrice;
    }
    getTotalPrice(){
       return this.totalPrice;
    }
}
const newShoppingCart = new ShoppingCart();
console.log(newShoppingCart);
newShoppingCart.addCart("Smart Watch",3200);
console.log(newShoppingCart);
console.log(newShoppingCart.getTotalPrice());

