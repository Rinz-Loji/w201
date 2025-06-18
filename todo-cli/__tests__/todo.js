const todolist = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todolist();
describe("Todo List Suite", () => {
  beforeAll(() => {
    add({
      title: "Submit assignment",
      dueDate: new Date().toISOString(),
      completed: false,
    });
  });
  test("Should add new todo", () => {
    expect(all.length).toBe(1);
    add({
      title: "Submit assignment",
      dueDate: new Date().toISOString(),
      completed: false,
    });
    expect(all.length).toBe(2);
  });
  test("Marka as complete check ", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
