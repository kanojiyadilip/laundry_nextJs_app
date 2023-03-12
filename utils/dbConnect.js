import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    // console.log("connection=======>", connection);
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("db=======>", db.connections);

    connection.isConnected = db.connections[0].readyState;
    console.log("connection.isConnected=======>", connection.isConnected);
}


export default dbConnect;