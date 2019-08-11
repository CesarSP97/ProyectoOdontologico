'use strict';
module.exports = (sequelize, DataTypes) => {
    
    const persona = sequelize.define('persona', {
        
        numero_historia: {
            type : DataTypes.STRING
        },
        fecha_creacion:{
            type: DataTypes.DATE
        },
        nombres: {
            type: DataTypes.STRING(50)
        },
        Apellidos: {
            type: DataTypes.STRING(50)
        },
        edad: {
            type: DataTypes.INTEGER(4)
        },
        genero:{
            type: DataTypes.STRING
        },
        fecha_nac: {
            type: DataTypes.DATE
        },
        motivo_cons: {
            type: DataTypes.STRING(200)
        },
        telefono: {
            type: DataTypes.STRING(20)
        },
        telefono_emer: {
            type: DataTypes.STRING(20)
        },
        correo: {
            type: DataTypes.STRING(50)
        },
        enf_asite: {
            type: DataTypes.STRING(200)
        },
        sector: {
            type: DataTypes.STRING(100)
        },
        calle_principal: {
            type: DataTypes.STRING(100)
        },
        calle_secundaria: {
            type: DataTypes.STRING(100)
        },
        referencia: {
            type: DataTypes.STRING(50)
        },
        alergia_antibiotico: {
            type: DataTypes.STRING(50)
        },
        alergia_anestesia: {
            type: DataTypes.STRING(50)
        },
        hemorragias: {
            type: DataTypes.STRING(50)
        },
        VIH_SIDA: {
            type: DataTypes.STRING(50)
        },
        tuberculosis: {
            type: DataTypes.STRING(50)
        },
        asma: {
            type: DataTypes.STRING(50)
        },
        diabetes: {
            type: DataTypes.STRING(50)
        },
        hipertencion: {
            type: DataTypes.STRING(50)
        },
        enfermedades_cardicadas: {
            type: DataTypes.STRING(50)
        },
        medicamentos: {
            type: DataTypes.STRING(50)
        },
        otros: {
            type: DataTypes.STRING(50)
        },
        external_id:{
            type: DataTypes.UUID
        }
        
    }, {freezeTableName: true});
    
        persona.associate = function (models) {

        persona.belongsTo(models.usuario, {foreignkey: 'id_usuario'});
        persona.hasMany(models.cita,{foreignkey:'id_persona', as:'cita'});
        persona.hasOne(models.historia_clinica, {foreignkey:'id_persona', as:'historia_clinica'});

    };
    
    return persona;
};