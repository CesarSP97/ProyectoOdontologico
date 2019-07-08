module.exports = function (sequelize, Sequelize) {
    var historia_clinica = require('./historia_clinica');
    var Historia_clinica = new historia_clinica(sequelize, Sequelize);
    
    var Indice_placa = sequelize.define('indice_placa', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        }

    }, {freezeTableName: true, timestamps: false});
    
    Indice_placa.belongsTo(Historia_clinica, {
        foreignKey: 'idHistoria_clinica',
        constraints: false});
   
    return Indice_placa;
};


