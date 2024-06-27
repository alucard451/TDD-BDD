export default class ToDoList {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(name) {
    this.tasks.push({ id: this.nextId++, name, completed: false });
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  completeTask(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = true;
    }
  }

  getTasks(status) {
    if (status === "completed") {
      return this.tasks.filter((task) => task.completed);
    } else if (status === "pending") {
      return this.tasks.filter((task) => !task.completed);
    }
    return this.tasks;
  }
}
