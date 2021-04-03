const { db } = require("./model");
const { app } = require("./server");

const start = async () => {
  try {
    await db.sync();
    app.listen(4444, () => {
      console.log("Server started on http://localhost:4444");
    });
  } catch (e) {
    console.error(e);
  }
};

start();
