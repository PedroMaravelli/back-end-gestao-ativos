var DataTypes = require("sequelize").DataTypes;
var _hardware = require("./hardware");
var _rede = require("./rede");
var _software = require("./software");

function initModels(sequelize) {
  var hardware = _hardware(sequelize, DataTypes);
  var rede = _rede(sequelize, DataTypes);
  var software = _software(sequelize, DataTypes);


  return {
    hardware,
    rede,
    software,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
