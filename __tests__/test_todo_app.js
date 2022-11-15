/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

const today_day = new Date();
const oneDayINms = 60 * 60 * 24 * 1000;
const yesterday_day = new Date(today_day.getTime() - 1 * oneDayINms);
const tomorrow_day = new Date(today_day.getTime() + 1 * oneDayINms);

describe("TodoList Test Suite by Suraj", () => {
  beforeAll(() => {
    expect(all.length).toBe(0);
  });

  test("Should add new tests correctly.", () => {
    const length = all.length;
    add({
      title: "Buy Groceries",
      dueDate: yesterday_day.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(length + 1);
  });

  test("Should mark a task as completed.", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should return overdue tasks.", () => {
    const overduelen = overdue().length;
    add({
      title: "Cloth Wash",
      dueDate: yesterday_day.toLocaleDateString("en-CA"),
    });
    expect(overdue().length).toBe(overduelen + 1);
  });

  test("Should return tasks due today.", () => {
    const duetodaylen = dueToday().length;
    add({
      title: "Eat Carrot",
      dueDate: today_day.toLocaleDateString("en-CA"),
    });
    expect(dueToday().length).toBe(duetodaylen + 1);
  });

  test("Should return tasks due later.", () => {
    const duelaterlen = dueLater().length;
    add({
      title: "Take Bath",
      dueDate: tomorrow_day.toLocaleDateString("en-CA"),
    });
    expect(dueLater().length).toBe(duelaterlen + 1);
  });
});
