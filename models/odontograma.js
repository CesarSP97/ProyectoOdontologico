module.exports = function (sequelize, Sequelize) {
    var Odontograma = sequelize.define('odontograma', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },


    }, {freezeTableName: true, timestamps: false});

    return Odontograma;
};

