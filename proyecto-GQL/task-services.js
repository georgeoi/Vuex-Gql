let tasks = require('./tasks.json')


module.exports.fetchTasks= ()=> {
    return tasks
    }
module.exports.findTask= (id)=>{
    return tasks.find(task => task.id== id)
    }
module.exports.createTask= ({name})=>{
    let task = {name}
    task.id= tasks.length + 1
    tasks.push(task)
    return task
    }
module.exports.updateTask=(id, {name})=>{
    let index = tasks.findIndex(task=> task.id == id)
    task[index] = {id,name}
    return task[index]
}
module.exports.deleteTask= (id)=>{
    let index = tasks.findIndex(task=> task.id == id)

    if (index == -1){
        return false
    }

    books.splice(index,1)
    return true
}