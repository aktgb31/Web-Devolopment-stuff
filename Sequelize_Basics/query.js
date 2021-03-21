const { db, Student } = require("./model");

const task = async () => {
  try {
    await db.sync();
    const students = await Student.findAll({
      where: { age: 20 },
    });
    students.forEach((s) =>
      console.log(`name : ${s.dataValues.name}   age : ${s.dataValues.age}`)
    );
  } catch (e) {
    console.error(e);
  }
};

task();
