const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URI);
        console.log('MongoDB connection successfuly ');
                
    }
    catch (error) {
        console.error('Mongo connection failed', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
        
    


