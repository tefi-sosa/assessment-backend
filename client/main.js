const complimentBtn = document.getElementById("complimentButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            // alert("hi")
            const data = res.data;
            alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune)



const toDoBtn = document.getElementById("toDoBtn")
let body = document.querySelector("input")
const postToDo = () => {
    axios.post("http://localhost:4000/api/toDo/", body.value)
        .then(response => {
            console.log(response.data)

            const data = response.data;
            alert(data);
    });
};
toDoBtn.addEventListener('click', postToDo)


const toDoListBtn = document.getElementById("toDoListButton")
const getToDoList = () => {
    axios.get("http://localhost:4000/api/toDoList/")
        .then(res => {

            const data = res.data;
            alert(data);
    });
};
toDoListBtn.addEventListener('click', getToDoList)



const deleteBtn = document.getElementById("delteToDoListButton")
const deleteToDoListItem = () => {
    axios.delete("http://localhost:4000/api/toDoList/:id")
        .then(res => {
            console.log("success")
            const data = res.data;
            alert(data);
    });
};
deleteBtn.addEventListener('click', deleteToDoListItem)