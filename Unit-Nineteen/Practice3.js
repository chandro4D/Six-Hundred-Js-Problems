// practice problem 1:
   /* 
     From fetch function return promise data can stay json or other formats so,for use 
     or enables to use in js it converts the data in js objects(JSON) formate{response.json()}.
   */
// practice problem 2:
   /*
     Fetch function is used for retrieve data from the server. Its sends a HTTP request 
     to the server and receive data for the response of that request.
   */
// practice problem 3:
   /*
     Fetch and Promise both are almost same.Fetch return promise where promise is generally
     for asynchronous work.On the other side fetch is use for specifically retrieve data 
     from server or send data to server.
   */
// practice problem 4:
const Url = "https://jsonplaceholder.typicode.com/users";
fetch(Url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
  
// practice problem 5:
const url = "https://jsonplaceholder.typicode.com/users/1";
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
