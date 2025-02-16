const todoValue = document.getElementById("todoText"),
  listItems = document.getElementById("list-items"),
  AddUpdateClick = document.getElementById("AddUpdateClick");

todoValue.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (todoValue.value.trim() === "") {
      alert("Add an item to the list");
    } else {
      CreateToDoData();
    }
  }
});
function CreateToDoData() {
  if (todoValue.value === "") {
    alert("Add item to list");
    todoValue.focus();
    return;
  }

  // Create a new list item
  let li = document.createElement("li");

  // Create a text node with the input value
  let listNode = document.createTextNode(todoValue.value);
  li.appendChild(listNode);

  // Create an edit button
  let editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.className = "edit-btn";
  editButton.onclick = () => editItem(li, listNode); // Fixed here, passing listNode instead of textNode

  // Create a delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = () => deleteItems(li);

  // Append the buttons to the list item
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  // Append the list item to the list
  listItems.appendChild(li);

  // Clear the input field
  todoValue.value = "";
}

// Function to edit list items
function editItem(li, listItems) {
  const newValue = prompt("Edit your task", listItems.nodeValue);
  if (newValue !== null && newValue.trim() !== "") {
    listItems.nodeValue = newValue;
  }
}

// Function to delete a list item
function deleteItems(li) {
  listItems.removeChild(li);
}

// Attach the AddUpdateClick event listener
// AddUpdateClick.addEventListener("click", () => {
//   if (todoValue.value.trim() === "") {
//     alert("Add an item to the list");
//   } else {
//     CreateToDoData();
//   }
// });
