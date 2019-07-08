module.exports = function (sequelize, Sequelize) {
    var historia_clinica = require('./historia_clinica');
    var Historia_clinica = new historia_clinica(sequelize, Sequelize);
    
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
    Plan_tratamiento.belongsTo(Historia_clinica, {
        foreignKey: 'idHistoria_clinica',
        constraints: false});
    return Plan_tratamiento;
};

