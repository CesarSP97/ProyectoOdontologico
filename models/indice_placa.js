module.exports = function (sequelize, Sequelize) {
    var Indice_placa = sequelize.define('indice_placa', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        }

    }, {freezeTableName: true, timestamps: false});
   
    return Indice_placa;
};


