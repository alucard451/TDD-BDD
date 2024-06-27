import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import ToDoList from "../../src/todo.js";

let todoList;

Given("a new to-do list", function () {
  todoList = new ToDoList();
});

Given("a to-do list with a task named {string}", function (taskName) {
  todoList = new ToDoList();
  todoList.addTask(taskName);
});

When("I add a task named {string}", function (taskName) {
  todoList.addTask(taskName);
});

When("I delete the task with ID {int}", function (taskId) {
  todoList.deleteTask(taskId);
});

When("I complete the task with ID {int}", function (taskId) {
  todoList.completeTask(taskId);
});

When("I filter tasks by {string}", function (status) {
  this.filteredTasks = todoList.getTasks(status);
});

Then("the task list should contain a task named {string}", function (taskName) {
  const taskNames = todoList.getTasks().map((task) => task.name);
  expect(taskNames).to.include(taskName);
});

Then("the task list should be empty", function () {
  expect(todoList.getTasks()).to.be.empty;
});

Then("the task with ID {int} should be marked as completed", function (taskId) {
  const task = todoList.getTasks().find((task) => task.id === taskId);
  expect(task.completed).to.be.true;
});

Then(
  "the task list should not contain a task named {string}",
  function (taskName) {
    const taskNames = this.filteredTasks.map((task) => task.name);
    expect(taskNames).not.to.include(taskName);
  }
);
