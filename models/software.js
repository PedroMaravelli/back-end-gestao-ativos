const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('software', {
    id_software: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    versao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fornecedor: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    codigo_licenca: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    data_aquisicao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_expiracao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    departamento: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'software',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_software" },
        ]
      },
    ]
  });
};
