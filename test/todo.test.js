import { expect } from "chai";
import ToDoList from "../src/todo.js";

describe("ToDoList", () => {
  let todoList;

  beforeEach(() => {
    todoList = new ToDoList();
  });

  it("should add a new task", () => {
    todoList.addTask("Learn TDD");
    expect(todoList.getTasks()).to.deep.equal([
      { id: 1, name: "Learn TDD", completed: false },
    ]);
  });

  it("should delete a task", () => {
    todoList.addTask("Learn TDD");
    todoList.deleteTask(1);
    expect(todoList.getTasks()).to.deep.equal([]);
  });

  it("should mark a task as completed", () => {
    todoList.addTask("Learn TDD");
    todoList.completeTask(1);
    expect(todoList.getTasks()).to.deep.equal([
      { id: 1, name: "Learn TDD", completed: true },
    ]);
  });

  it("should filter tasks by status", () => {
    todoList.addTask("Task 1");
    todoList.addTask("Task 2");
    todoList.completeTask(1);
    expect(todoList.getTasks("completed")).to.deep.equal([
      { id: 1, name: "Task 1", completed: true },
    ]);
    expect(todoList.getTasks("pending")).to.deep.equal([
      { id: 2, name: "Task 2", completed: false },
    ]);
  });
});
