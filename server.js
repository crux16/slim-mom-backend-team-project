require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const { HOST_DB, PORT = 3000 } = process.env;

const main = async () => {
  try {
    console.log(HOST_DB); // This will print the value of HOST_DB
    if (!HOST_DB) {
      throw new Error("HOST_DB not set!");
    }

    await mongoose.connect(HOST_DB);
    console.log("Database connection successful");
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Server is listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
};

main();