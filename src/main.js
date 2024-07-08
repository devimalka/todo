import './style.css';
import todoitem from './todo';

function init(){
    let container = document.createElement('div');
    container.classList.add('container-div');

    let h1 = document.createElement('h1');
    h1.textContent = "Todo List";

    container.appendChild(h1);
    document.body.appendChild(container);
}
let arrays = [];
function getvalue(){
    let val = document.getElementById("number").value;
    console.log(val);
    let td = new todoitem(val);
    arrays.push(td);
    console.log(arrays)
}
function todoCreate(){
    let div = document.createElement('div');
    div.classList.add('todoCreate');
    
    let titleInput = document.createElement('input');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('value','');
    titleInput.setAttribute('id','number');

    let submit = document.createElement('button');
    submit.textContent = "submit";
    submit.addEventListener('click',getvalue);
    div.appendChild(titleInput);
    div.appendChild(submit);
    return div;
}
init();
let dd = todoCreate();
document.body.appendChild(dd);
