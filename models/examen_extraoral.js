'use strict';
module.exports = (sequelize, DataTypes) => {

    const examen_extraoral = sequelize.define('examen_extraoral', {
        labios: {type: DataTypes.STRING(45)},
        mejillas: {type: DataTypes.STRING(45)},
        maxilar_superior: {type: DataTypes.STRING(45)},
        maxilar_inferior: {type: DataTypes.STRING(45)},
        lengua: {type: DataTypes.STRING(45)},
        paladar: {type: DataTypes.STRING(45)},
        piso: {type: DataTypes.STRING(45)},
        carrillos: {type: DataTypes.STRING(45)},
        glandulas_salibales: {type: DataTypes.STRING(45)},
        ATM: {type: DataTypes.STRING(45)},
        oro_faringue: {type: DataTypes.STRING(45)},
        ganglios: {type: DataTypes.STRING(45)},
        externa_id: {type: DataTypes.UUID}
    }, {freezeTableName: true});

    examen_extraoral.associate = function (models) {
        examen_extraoral.belongsTo(models.historia_clinica, {foreignkey: 'id_historia_clinica'});
    };
    return examen_extraoral;
};