module.exports = function (sequelize, Sequelize) {
    var historia_clinica = require('./historia_clinica');
    var Historia_clinica = new historia_clinica(sequelize, Sequelize);
    
    var Signos_vitales = sequelize.define('signos_vitales', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },

        presion_arterial: {
            type: Sequelize.STRING(45)
        },
        frecuencia_cardiaca: {
            type: Sequelize.STRING(45)
        },
        temperatura: {
            type: Sequelize.INTEGER(10)
        },
        respi_por_min: {
            type: Sequelize.STRING(45)
        }

    }, {freezeTableName: true, timestamps: false});
    
    Signos_vitales.belongsTo(Historia_clinica, {
        foreignKey: 'idHistoria_clinica',
        constraints: false});

    return Signos_vitales;
};

