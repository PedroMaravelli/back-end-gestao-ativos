const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hardware', {
    id_hardware: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero_ativo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    processador: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ram: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    armazenamento: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    data_aquisicao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fornecedor: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    localizacao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    usuario_responsavel: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hardware',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hardware" },
        ]
      },
    ]
  });
};
