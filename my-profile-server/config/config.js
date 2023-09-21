const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectionDb = async () => {
  console.log(process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      //useCreateIndex: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
    });
    console.log(`MongoDB connected successfully in ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB not connected successfully in`);
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectionDb;
