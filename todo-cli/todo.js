const todoList = () => {
  const all = [];
  // Getting today's date to compare
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    let arr = all.filter((item) => {
      // spliting date based on '-'
      const due = item.dueDate.split("-");
      // comparing if year,month or date has already completed in the same order
      if (parseInt(due[0]) < year) {
        return item;
      } else if (parseInt(due[1]) < month) {
        return item;
      } else if (parseInt(due[2]) < day) {
        return item;
      }
    });
    return arr;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    let arr = all.filter((item) => {
      const due = item.dueDate.split("-");
      // Cheching if duedate is today
      if (
        parseInt(due[0]) === year &&
        parseInt(due[1]) === month &&
        parseInt(due[2]) === day
      ) {
        return item;
      }
    });
    return arr;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    let arr = all.filter((item) => {
      const due = item.dueDate.split("-");
      // Checking if the due date is approaching
      if (parseInt(due[0]) > year) {
        return item;
      } else if (parseInt(due[1]) > month) {
        return item;
      } else if (parseInt(due[2]) > day) {
        return item;
      }
    });
    return arr;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    const arr = list.map((item) => {
      const dueDate = item.dueDate.split("-");
      // If false means no x in []
      if (item.completed === false) {
        // if duetoday no need to display date
        if (
          parseInt(dueDate[0]) === year &&
          parseInt(dueDate[1]) === month &&
          parseInt(dueDate[2]) === day
        ) {
          return `[ ] ${item.title}`;
        } else {
          return `[ ] ${item.title} ${item.dueDate}`;
        }
      } else {
        if (
          parseInt(dueDate[0]) === year &&
          parseInt(dueDate[1]) === month &&
          parseInt(dueDate[2]) === day
        ) {
          return `[x] ${item.title}`;
        } else {
          return `[x] ${item.title} ${item.dueDate}`;
        }
      }
    });
    // returning as string
    return arr.join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
