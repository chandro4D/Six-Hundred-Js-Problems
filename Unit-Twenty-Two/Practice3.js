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

// practice problem 4 :

// practice problem 5 :

// practice problem 6 :

// practice problem 7 :

// practice problem 8 :

// practice problem 9 :

// practice problem 10 :

// practice problem 11 :

// practice problem 12 :