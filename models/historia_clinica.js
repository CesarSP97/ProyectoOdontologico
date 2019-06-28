module.exports = function (sequelize, Sequelize) {
    var Historia_clinica = sequelize.define('historia_clinica', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },

        fecha_creacion: {
            type: Sequelize.DATE
        },
        n_historia: {
            type: Sequelize.INTEGER(6).ZEROFILL
        }

    }, {freezeTableName: true, timestamps: false});
    return Historia_clinica;
};
