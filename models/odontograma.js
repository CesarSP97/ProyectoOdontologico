module.exports = function (sequelize, Sequelize) {
    var historia_clinica = require('./historia_clinica');
    var Historia_clinica = new historia_clinica(sequelize, Sequelize);
    
    var Odontograma = sequelize.define('odontograma', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },


    }, {freezeTableName: true, timestamps: false});
    
    Odontograma.belongsTo(Historia_clinica, {
        foreignKey: 'idHistoria_clinica'
    });
    
    return Odontograma;
};

