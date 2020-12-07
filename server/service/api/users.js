const userModel = require("../../model/user");

class usersService {
  static async findAll() {
    return await userModel.findAllData();
  }
  static async add(data) {
    let v = [idCode(),data.name];
    return await userModel.addData(v);
  }
  static async del(data) {
    return await userModel.delData(data.id);
  }
}

module.exports = usersService;

const idCode = () => {
  const sessions = [];

  const generateClientID = function () {
    var clientID = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var numPossible = possible.length;
    do {
      for (var i = 0; i < 8; i++) {
        clientID += possible.charAt((Math.random() * numPossible) | 0);
      }
    } while (sessions["clientID"] != null);
    return clientID;
  };
  return generateClientID()
};
