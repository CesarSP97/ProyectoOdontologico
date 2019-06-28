module.exports = function (sequelize, Sequelize) {
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

    return Signos_vitales;
};

