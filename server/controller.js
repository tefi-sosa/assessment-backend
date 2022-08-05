const toDoObject = [
    { id: 0, item: "Clean the house"},
    { id: 1, item: "Go to the gym"},
]
let baseNum = 2

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

        let newToDo = {
            id: baseNum,
            item,
        }
        console.log(newToDo)

        toDoObject.push(newToDo)
        baseNum++

        res.status(200).send(JSON.stringify(toDoObject.map(item => item.item)));
    },
    getToDoList: (req, res) => {

        res.status(200).send(JSON.stringify(toDoObject.map(item => item.item)));
    },
    deleteToDoListItem: (request, response) => {
        // console.log(request.params)
        toDoObject.splice(request.params.id, 1)
        response.status(200).send(JSON.stringify(toDoObject.map(item => item.item)))
    },
    updateListItem: (request, response) => {
        // console.log(request.body)
        const itemToUpdate = toDoObject.find((item) => item.id === parseInt(request.body['id']))
        // console.log(itemToUpdate);
        itemToUpdate.item = request.body.item
        
        response.status(200).send(JSON.stringify(toDoObject.map(item => item.item)))
    }
}