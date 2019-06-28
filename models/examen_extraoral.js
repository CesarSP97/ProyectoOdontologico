module.exports = function (sequelize, Sequelize) {
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
    
    return Examen_extraoral;
};

