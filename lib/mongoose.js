import moongoose from "mongoose";
const connectionToDatabase = async () => {
  try {
    await moongoose.connect(process.env.MongoURL);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};
export default connectionToDatabase;
