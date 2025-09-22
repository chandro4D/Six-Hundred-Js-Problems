// practice problem 1:
const team = {
    name:"Team A",
    players: 11,
    play (){
        console.log(`${this.name}  players: ${this.players} `);
    }
}
team.play();
const tournament = {
    name: "Team B",
    players: 15
}
const tournamentInfo = team.play.bind(tournament);
tournamentInfo();


// practice problem 2:
const car = {
    speed: 200,
    price: 8000000,
    drive () {
        console.log(`speed: ${this.speed}, price: ${this.price}`);
    }
}
const bike = {
    speed: 250,
    price: 700000,
}
car.drive.call(bike);
const truck = {
    speed: 150,
    price: 90000000,
}
car.drive.call(truck);

// practice problem 3 :
const employee = {
    name: "Chandra Shekhor Mondal",
    role: "Software Engineer",
    details () {
        console.log(`Name: ${this.name}, Role: ${this.role}`);
    }
}
employee.details();
const manager = {
    name: "Bindu Shekhor Mondal",
    role: "Project Manager",
}
employee.details.apply(manager);

// practice problem 4 :
const classroom = {
    name : "Web Development",
    students : ["Chandra","Bindu","Rana","Nabonita","Rahul","Nabodip"],
    attendance () {
        console.log(`Class: ${this.name}, Students: ${this.students.join(", ")}`);
    }
}
classroom.attendance();
const lab = {
    name : "Web development Lab",
    students : ["Chandra","Bindu","Rana","Nabonita"],
}
const labInfo = classroom.attendance.bind(lab);
labInfo();

