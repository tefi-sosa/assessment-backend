const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// random compliment
const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

// fortune coockie
const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);


// get to do list
const { getToDoList } = require('./controller')

app.get("/api/toDoList", getToDoList);


// post to do
const { postToDo } = require('./controller')

app.post("/api/toDo", postToDo);

// delete to do list
const { deleteToDoItem } = require('./controller')

app.get("/api/toDoList/:id", deleteToDoItem);







app.listen(4000, () => console.log("Server running on 4000"));
