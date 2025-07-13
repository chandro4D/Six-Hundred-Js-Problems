// practice problem 1:

// practice problem 2:
const user = {
    name: "Chandra Shekhor Mondal",
    email: "chandroshakhor7@gmail.com",
    address:"2 No Koyra,Khulna",
    order_history: {
        product1: "Watch",
        product2: "Phone",
        product3: "HeadPhone"
    }
}
const JsonString = JSON.stringify(user);
console.log(JsonString);

// practice problem 3:
const shopping_Cart = {
    products: ["Watch","Phone","HeadPhon"],
    totalPrice: 5000,
    user_details: {
        name: "Chandra Shekhor",
        id: "01",
        contact: "01759626470"
    }
}
const JString = JSON.stringify(shopping_Cart);
console.log(JString);

// practice problem 4:
const whether = {
    city: "Khulna",
    temperature: 30,
    humidity: "75%",
    forecast: [30,35,35,36,30,35,34]
}
const whetherString = JSON.stringify(whether);
console.log(whetherString);

// practice problem 5:
const movieDetails = {
    title: "Moyner Bap",
    releaseYear: 2025,
    actors: ["A","B","C","D","E"],
    actorsRating: [5,6,5,9,10]
};
const movieDetailsJson = JSON.stringify(movieDetails);
const movieDetailsParse = JSON.parse(movieDetailsJson);
console.log(movieDetailsParse);

// practice problem 6:
const projectManagementSystem = {
    projects: ["Project_1","Project_2"],
    Project_1:{
        name: "Butterfly",
        project_Description: "Butterfly Is A Book Exchange Platform,Where a user can exchange their Books",
        team_member: ["Chandra","Shamya Roy","Robus","Anas"],
        deadlines: "30/12/25",
        tasks: {
            title: "Title",
            assignee: "Assignee",
            status:"Finished"
        }
    },
    Project_2:{
        name: "HealthHaven",
        project_Description: "HealthHaven Is A E-Commerce Platform,Where a user can buy their medicine",
        team_member: ["Chandra","Bindu"],
        deadlines: "30/12/25",
        tasks: {
            title: "Title",
            assignee: "Assignee",
            status:"Finished"
        }
    }
}
console.log(JSON.stringify(projectManagementSystem));

// practice problem 7:
const courses = {
    Web_Development: {
        course_title:"Web Development By Jhankar Mahbub",
        instructor_name:"Jhankar Mahbub",
        duration:"Six Month",
        lessons:["Html","Css","Js","MongoDB","Node Js"],
        difficulty_Level:"Beginner"
    },
    Web_NextLevel: {
        course_title:"Next Level Web Development",
        instructor_name:"",
        duration:"Six Month",
        lessons:["Ts","PostGres SQL"],
        difficulty_Level:"Advanced"
    },
    Phytron: {
        course_title:"Phytron",
        instructor_name:"",
        duration:"12 Month",
        lessons:["Ds","Dsa","C","C++","Java"],
        difficulty_Level:"Beginner"
    }
}
console.log(JSON.stringify(courses));

// practice problem 8:
