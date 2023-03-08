const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://A-Frankhouser:VTObaE6nwN6ncUAb@cluster0.ognhcdo.mongodb.net/Pack&Go?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
