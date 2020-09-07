const { connect } = require("mongoose");

const { MONGO_URL } = process.env;
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

exports.conenctToDB = async () => {
  try {
    await connect(MONGO_URL, connectionOptions);
    return true;
  } catch (err) {
    console.error(err.message || err);
    return false;
  }
};
