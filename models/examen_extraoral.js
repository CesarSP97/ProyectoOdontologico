module.exports = function (sequelize, Sequelize) {
    var historia_clinica = require('./historia_clinica');
    var Historia_clinica = new historia_clinica(sequelize, Sequelize);
    
    var Examen_extraoral = sequelize.define('examen_extraoral', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },

        labios: {
            type: Sequelize.STRING(45)
        },
        mejillas: {
            type: Sequelize.STRING(45)
        },
        maxilar_superior: {
            type: Sequelize.STRING(45)
        },
        maxilar_inferior: {
            type: Sequelize.STRING(45)
        },
        lengua: {
            type: Sequelize.STRING(45)
        },
        paladar: {
            type: Sequelize.STRING(45)
        },
        piso: {
            type: Sequelize.STRING(45)
        },
        carrillos: {
            type: Sequelize.STRING(45)
        },
        glandulas_salibales: {
            type: Sequelize.STRING(45)
        },
        ATM: {
            type: Sequelize.STRING(45)
        },
        oro_faringue: {
            type: Sequelize.STRING(45)
        },
        ganglios: {
            type: Sequelize.STRING(45)
        }

    }, {freezeTableName: true, timestamps: false});
    
    Examen_extraoral.belongsTo(Historia_clinica, {
        foreignKey: 'idHistoria_clinica',
        constraints: false});
    
    return Examen_extraoral;
};

