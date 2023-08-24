window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_element = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;

    if (!task) {
      alert("Please enter a task");
      return;
    }

    const task_element = document.createElement("div"); // create a new element
    task_element.classList.add("task"); // assign class to the element

    const task_content_element = document.createElement("div"); // create a new element
    task_content_element.classList.add("task-content"); // assign class to the element

    task_element.appendChild(task_content_element); // append the element to the task element

    const task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.value = task;
    task_input_element.setAttribute("readonly", "readonly");
    task_content_element.appendChild(task_input_element);

    const task_actions_element = document.createElement("div");
    task_actions_element.classList.add("actions");

    const task_edit_element = document.createElement("button");
    task_edit_element.classList.add("edit");
    task_edit_element.innerHTML = "Edit";

    const task_delete_element = document.createElement("button");
    task_delete_element.classList.add("delete");
    task_delete_element.innerHTML = "Delete";

    task_actions_element.appendChild(task_edit_element);
    task_actions_element.appendChild(task_delete_element);

    task_element.appendChild(task_actions_element);
    list_element.appendChild(task_element); // append the task element to the list element
    input.value = "";

    task_edit_element.addEventListener("click", () => {
      if (task_edit_element.innerText.toLowerCase() == "edit") {
        task_input_element.removeAttribute("readOnly");
      task_input_element.focus();
      task_edit_element.innerText = "Save";
      } else {
        task_input_element.setAttribute("readonly",  "readonly");
        task_edit_element.innerText = "Edit";
      }
    })
    
    task_delete_element.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this task?")) {
        task_element.remove();
      }
    })

  });
});
