module.exports = function (sequelize, Sequelize) {
    var Cita = sequelize.define('cita', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        }

        
    }, {freezeTableName: true, timestamps: false});
    return Cita;
};


