const toDoObject = [
    { id: 1, item: "Clean the house"},
    { id: 2, item: "Go to the gym"},
]
let baseNum = 3

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["A fresh start will put you on your way.", "It is worth reviewing some old lessons.", "It is not the amount of time you devote, but what you devote to the time that counts.", "Meditation with an old enemy is advised."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    postToDo: (req, res) => {
   
        let { item } = req.body

        console.log(req)
        let newToDo = {
            id: baseNum,
            item,
        }
        console.log(newToDo)

        // toDoObject.push(newToDo)
        // baseNum++
        // console.log(toDoObject);
        // toDoObject.push(request.body)

        res.status(200).send(JSON.stringify(toDoObject.map(item => item.item)));
    },
    getToDoList: (req, res) => {

        res.status(200).send(JSON.stringify(toDoObject.map(item => item.item)));
    },
    deleteToDoListItem: (request, response) => {
        // console.log(request.params)
        toDoObject.splice(request.params.id, 1)
        response.status(200).send(JSON.stringify(toDoObject.map(item => item.item)))
    }

}