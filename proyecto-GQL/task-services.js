let tasks = require('./tasks.json')
let contador= 0

module.exports.fetchTasks= ()=> {
    return tasks
    }
module.exports.findTask= (id)=>{
    return tasks.find(task => task.id== id)
    }
module.exports.createTask= ({name})=>{
    let task = {name}
    contador ++
    task.id= contador + 3
    tasks.push(task)
    return task
    }
module.exports.updateTask=(id, {name})=>{
    let index = tasks.findIndex(task=> task.id == id)
    tasks[index] = {id,name}
    return tasks[index]
}
module.exports.deleteTask= (id)=>{
    let index = tasks.findIndex(task=> task.id == id)

    if (index == -1){
        return false
    }

    tasks.splice(index,1)
    return true
}