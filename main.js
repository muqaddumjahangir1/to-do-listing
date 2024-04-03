import inquirer from "inquirer";
//user variable
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "Todo item",
            type: "input",
            message: 'add todo item in listing'
        },
        {
            name: "addMore",
            type: 'list',
            choice: ["yes,'no"]
        }
    ]);
    // output of program
    const { Todoitem, addMore } = input;
    todos.push(Todoitem);
    if (addMore === "no") {
        console.log("Todolist:");
        //add more item
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        //exit loop
        break;
    }
}
