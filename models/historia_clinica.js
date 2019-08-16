'use strict';
module.exports = (sequelize, DataTypes) => {

    const historia_clinica = sequelize.define('historia_clinica', {

        fecha_creacion: {
            type: DataTypes.DATE
        },
        n_historia: {
            type: DataTypes.STRING
        },
        external_id: {
            type: DataTypes.UUID
        }

    }, { freezeTableName: true });

    historia_clinica.associate = function(models) {

        historia_clinica.belongsTo(models.persona, { foreignkey: 'id_persona' });
        historia_clinica.hasMany(models.diagnostico, {foreignkey:'id_historia_clinica', as:'diagnostico'});    
        historia_clinica.hasMany(models.signos_vitales, {foreignkey:'id_historia_clinica', as:'signos_vitales'});
        historia_clinica.hasMany(models.examen_extraoral, {foreignkey:'id_historia_clinica', as:'examen_extraoral'});
        historia_clinica.hasMany(models.odontograma, {foreignkey:'id_historia_clinica', as:'odontograma'});

    };

    return historia_clinica;
};