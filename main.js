var form = document.getElementById("myForm");
var input = document.getElementById("myInput");
var ul = document.getElementById("list-group");

// console.log(form);
// console.log(input);
// console.log(ul);

form.addEventListener("submit", addTask);
ul.addEventListener("click", removeTask);
ul.addEventListener("click", doneTask);

function addTask(e) {
  // console.log(e);
  // console.log(e.target);

  console.log(input.value);
  let li = document.createElement("li");
  li.className = "list-group-item";
  let textOfList = document.createTextNode(input.value);

  //create delete button, adding class
  let buttonDelete = document.createElement("button");
  buttonDelete.className = "btn btn-danger ms-1 delete";
  buttonDelete.style.float = "right";

  let btnDeleteText = document.createTextNode("Delete");

  buttonDelete.appendChild(btnDeleteText);

  //create done button. adding class
  let buttonDone = document.createElement("button");
  buttonDone.className = "btn btn-primary ms-1 done";
  buttonDone.style.float = "right";

  let btnDoneText = document.createTextNode("Done");

  buttonDone.appendChild(btnDoneText);

  li.appendChild(textOfList);
  li.appendChild(buttonDelete);
  li.appendChild(buttonDone);
  ul.appendChild(li);

  e.preventDefault();
}

//delete task
function removeTask(e) {
  console.log(e.target);
  console.log(e.target.className);
  if (e.target.classList.contains("delete")) {
    let removeList = e.target.parentElement;
    console.log(removeList);
    ul.removeChild(removeList);
  }
}

//done task
function doneTask(e) {
  console.log(e.target);
  console.log(e.target.className);
  if (e.target.classList.contains("done")) {
    let doneList = e.target.parentElement;
    doneList.style.textDecoration = "line-through";
    // document.querySelector(".list-group-item").style.textDecoration =
    //   "line-through";
  }
}
