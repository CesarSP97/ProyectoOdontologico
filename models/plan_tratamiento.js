'use strict';
module.exports = (sequelize, DataTypes) => {

    const plan_tratamiento = sequelize.define('plan_tratamiento', {

        tratamiento: {
            type: DataTypes.STRING(500)
        },
        precio: {
            type: DataTypes.DECIMAL
        },
        descuento: {
            type: DataTypes.INTEGER
        },
        total: {
            type: DataTypes.DECIMAL
        },
        external_id: {
            type: DataTypes.UUID
        }

    }, { freezeTableName: true });

    plan_tratamiento.associate = function(models) {
        plan_tratamiento.belongsTo(models.historia_clinica, { foreignkey: 'id_historia_clinica' });

    };


    return plan_tratamiento;
};