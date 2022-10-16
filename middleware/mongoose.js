import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
    if(mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    await mongoose.connect(`${$process.env.MONGO_URI}`);
    // await mongoose.connect('mongodb://localhost:27017/newspaper11');
    // await mongoose.connect('mongodb+srv://kkp785215database1:9721179735@cluster0.l2ybizl.mongodb.net/newspaper11');
    return handler(req, res);
}

export default connectDB;