import express from "express"; // import the express module
import router from "./router/todo.router"; // import the router module located in the "./router/todo.router" file
import "dotenv/config"; // import the dotenv library, which loads environment variables from a .env file

const app = express(); // create an instance of the express app
const port = process.env.PORT; // retrieve the value of the PORT environment variable

app.use(express.json()); // use the express json library
app.use(express.urlencoded({ extended: true }))// use the express urlencoded library
app.use("/todo", router); // use the router for all requests that start with "/todo"

// start the server and listen for incoming requests on the specified port
app.listen(port, () => {
    // log a message to the console when the server starts listening
    console.log("Server listening on port " + port + "..."); 
});
