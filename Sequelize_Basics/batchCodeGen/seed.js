const { db, Center, Season, Batch, Course, Teacher } = require("./model");

const seed = async () => {
  try {
    db.sync({ alter: true });

    await Center.bulkCreate(
      [
        { id: "PP", name: "Pritampura", city: "New Delhi" },
        { id: "DW", name: "Dwarka", city: "New Delhi" },
      ],
      { ignoreDuplicates: true }
    );

    await Season.bulkCreate(
      [
        { id: "S", name: "Summes" },
        { id: "F", name: "Fall" },
        { id: "W", name: "Winter" },
        { id: "P", name: "Spring" },
      ],
      { ignoreDuplicates: true }
    );

    await Course.bulkCreate(
      [
        { id: "LP", name: "Launchpad" },
        { id: "CX", name: "Crux" },
      ],
      {
        ignoreDuplicates: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
};

seed();
