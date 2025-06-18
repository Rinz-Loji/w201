const todolist = require("../todo");
const { describe, test, expect, beforeAll } = require("@jest/globals");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todolist();
beforeAll(() => {
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };

  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1)),
  );
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1)),
  );
  add({ title: "Submit assignment", dueDate: yesterday, completed: false });
  add({ title: "Pay rent", dueDate: today, completed: true });
  add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
  add({ title: "File taxes", dueDate: tomorrow, completed: false });
});

describe("Todo List Suite", () => {
  test("Test add todo", () => {
    expect(all.length).toBe(4);
    add({
      title: "Service Vehicle",
      dueDate: new Date().toISOString(),
      completed: false,
    });
    expect(all.length).toBe(5);
  });

  test("Test mark as complete todo", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Test retrieval of overdue items", () => {
    const overdues = overdue();
    expect(overdues.length).toBe(1);
  });

  test("Test checks retrieval of due today items", () => {
    const today = dueToday();
    expect(today.length).toBe(2);
  });

  test("Test checks retrieval of due later items", () => {
    const yesterday = dueLater();
    expect(yesterday.length).toBe(2);
  });
});
