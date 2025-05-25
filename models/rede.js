const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rede', {
    id_rede: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_equipamento: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    numero_serie: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    endereco_ip: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    endereco_mac: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    localizacao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    versao_firmware: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    responsavel: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rede',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_rede" },
        ]
      },
    ]
  });
};
