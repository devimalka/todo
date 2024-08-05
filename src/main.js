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

function getvalue(){
    let val = document.getElementById("number").value;
    let td = new todoitem(val);
    localStorage.setItem(getCounter(),JSON.stringify(td));
    console.log(localStorage);
    populateList();
}

function populateList(){
    let div = document.querySelector("container-div");
    
    for(let i = 1 ; i <= localStorage.length - 1 ; i++){
        let item = JSON.parse(localStorage.getItem("myObject"+i));
        console.log(JSON.parse(localStorage.getItem("myObject"+i)));
        let d = document.createElement('div');
        let h = document.createElement('h2');
        h.innerHTML = item.getTitle();
        d.appendChild(h);
        div.appendChild(d);

    }
}

function getCounter() {
    let counter = localStorage.getItem("counter");
    if(counter == null){
       localStorage.setItem("counter",1);
       counter = 1;
    }
    else{
        counter = parseInt(counter);
        counter+= 1;
        localStorage.setItem("counter",counter);
    }
    return "myObject" + counter;
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
localStorage.clear();