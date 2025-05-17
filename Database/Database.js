import mongoose from "mongoose";

export const connectDB = async () => {
    try {
      const  MONGODB_URI = "mongodb+srv://admin:admin@cluster0.1etf0.mongodb.net/";

      await  mongoose.connect(MONGODB_URI)

        mongoose.connection.on("connected", () => {
            console.log("MongoDb Connected")
        })

        mongoose.connection.on("error", (err) => {
            console.log(err);

        })
    } catch (error) {
        console.log(error)
    }
}