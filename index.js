

const express = require("express");

const app = express();

const todo = [
    {
        title: "gym",
        description: "6 to 7"
    },
    {
        title: "web",
        description: "8 to 9"
    },
    {
        title: "dsa",
        description: " 10 to 12"
    },
    {
        title: "eat",
        description: "6 to 7"
    },
    {
        title: "poop",
        description: "8 to 9"
    },
    {
        title: "drink",
        description: " 10 to 12"
    },
    {
        title: "play",
        description: "6 to 7"
    },
    {
        title: "party",
        description: "8 to 9"
    },
    {
        title: "meet",
        description: " 10 to 12"
    },
    {
        title: "help",
        description: "8 to 9"
    },
]

app.get("/", (req, res)=>{
    res.json({
        Todo: todo
    })
})

app.get("/random" , (req, res)=>{
    var id = parseInt(10 * Math.random());
    console.log(id);
    if(id < todo.length){
        return res.json({
            Todo: todo[id]
        })
    }
    else{
        return res.json({
            msg:`give id between 1 to ${todo.length}`
        })
    }
})

app.listen(8080, ()=>{
    console.log("online")
})
