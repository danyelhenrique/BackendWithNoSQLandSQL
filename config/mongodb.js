const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGODB_BASE_URL}`, { useNewUrlParser: true });
