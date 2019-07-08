module.exports = function (sequelize, Sequelize) {
    var historia_clinica = require('./historia_clinica');
    var Historia_clinica = new historia_clinica(sequelize, Sequelize);
    
    var Diagnostico = sequelize.define('diagnostico', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },

        diagnostico: {
            type: Sequelize.STRING(500)
        }

    }, {freezeTableName: true, timestamps: false});
    
    Diagnostico.belongsTo(Historia_clinica, {
        foreignKey: 'idHistoria_clinica'
    });
    
    return Diagnostico;
};