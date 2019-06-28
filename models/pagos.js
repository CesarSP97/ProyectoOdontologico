module.exports = function (sequelize, Sequelize) {
    var Pagos = sequelize.define('pagos', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        }

    }, {freezeTableName: true, timestamps: false});
    return Pagos;
};


