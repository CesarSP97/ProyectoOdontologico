module.exports = function (sequelize, Sequelize) {
    var Plan_tratamiento = sequelize.define('plan_tratamiento', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },

        plan_tratamiento: {
            type: Sequelize.STRING(500)
        }

    }, {freezeTableName: true, timestamps: false});
    return Plan_tratamiento;
};

