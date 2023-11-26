let completeList = document.querySelectorAll(".complete .whole-list");

function addToList() {
  let incompleteList = document.getElementById("inc-whole-list");
  console.log(incompleteList);
  let inputValue = document.getElementById("addValue").value;
  console.log(inputValue);
  //   let add = `<li>${inputValue}<button type="text" id="move" onClick="moveToList()>Move</button> </li>`;
  //   console.log(add);
  //   incompleteList;
  //   incompleteList.innerHTML = add;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(`${inputValue}`));
  var button = document.createElement("button");
  button.innerHTML = "Move";
  button.onclick;
  li.appendChild(button);
  li.setAttribute("id", "element4");
  incompleteList.appendChild(li);
}
