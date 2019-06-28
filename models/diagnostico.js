module.exports = function (sequelize, Sequelize) {
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
    return Diagnostico;
};