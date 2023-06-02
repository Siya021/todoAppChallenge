const todoList=document.querySelector("#screen");
const addList = document.querySelector("addTask");
const sortList = document.querySelector("sortTask");
let array =[
    {
        id: 1,
        name: 'jbkhj',
        createdDate: Date.now(),
        completed: false,
    },
    {
        id: 2,
        name: 'uyvjygv',
        createdDate: Date.now(),
        completed: false,
    },
]
function newTask(){
    event.preventDefault();
    if(screen.value === ''){
        alert("Task is missing. Add Task!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = screen.value;
        itemsList.appendChild(li)
    }
}

array.forEach((item)=>{
    document.querySelector('#itemsList').innerHTML += 
    `
    <li>${item.name}</li>
    `

})