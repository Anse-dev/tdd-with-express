const bcrypt = require("bcrypt");
const User = require("./User");

const save = async (username, password, email) => {
  const passwordHash = await bcrypt.hash(password, 10);
  return await User.create({ username, email, passwordHash });
};

module.exports = {
  save,
};
