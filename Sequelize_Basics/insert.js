const { db, Student } = require("./model");

const task = async () => {
  try {
    await db.sync({ alter: true });
    await Student.create({
      name: "Amit",
      age: 20,
      class: "CSe",
    });
  } catch (e) {
    console.error(e);
  }
};

task();
