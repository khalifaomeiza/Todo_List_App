let usersInput = prompt("What would you like to do on the app");

const todoItems = ['Buy food', 'eat food']



while (usersInput !== 'quit') {

if (usersInput== "list"){
    let count =  0;
    console.log ('*************')
    for (let item of todoItems) {
    console.log (`${count} : ${item}`)
    count++
}
console.log ('*************')
} else if (usersInput == "new") {
    const newTodoItem =prompt("ok, enter new todo item")
    todoItems.push(newTodoItem)
    console.log (`${newTodoItem} has been added to the todo list`)

} else if (usersInput == "delete") {
    const deleteItem = prompt ("Enter the item number you want to delete")
    const deletedItem = todoItems.splice(deleteItem, 1)
    console.log (`${deletedItem} has been 
  successfully deleted`)
}
usersInput = prompt("What would you like to do on the app");
}
console.log ("Goodbye");
