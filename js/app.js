//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//Add a new task
var addTask = function() {
  console.log("Add task...");
  //When the button is pressed
 //Create a new list item with the test from #new-task
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each element, needs to be modified and appended
};

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");
  //When the dit button is pressed
    //if the class of the parent is .editMode
      //switch from editMode
      //label text become the inputs value
    //else
      //switch to editMode
      //input value = becomes the labels text

    //Toggle .editMode
};

//Delete existing task
var deleteTask = function() {
  console.log("Delete task...");
  //when the delete button is pressed
    //Remove the parent list from the ul
};

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  //when the check bov is checked
    //we want to append the list item from the #completed-tasks
};

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  //when the checkbox is unchecked
    //we want to append the to #incomplete-tasks
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  //select its children
    //bind editTask to edit button
    //bind the deleteTask to the delete button
    //bind checkBoxEventHandler to the checkbox
};

//Set the click handler to the addTask function
addButton.onclick = addTask;

//Cycle over the incompleteTasksHolder ul list items
  //for each list item

//Cycle over the completedTasksHolder ul list items
  //for each list item

