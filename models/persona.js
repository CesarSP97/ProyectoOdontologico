module.exports = function (sequelize, Sequelize) {
    var usuario = require('./usuario');
    var Usuario = new usuario(sequelize, Sequelize);
    var Persona = sequelize.define('persona', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },

        nombres: {
            type: Sequelize.STRING(50)
        },
        Apellidos: {
            type: Sequelize.STRING(50)
        },
        edad: {
            type: Sequelize.INTEGER(4)
        },
        fecha_nac: {
            type: Sequelize.DATE
        },
        motivo_cons: {
            type: Sequelize.STRING(200)
        },
        telefono: {
            type: Sequelize.STRING(20)
        },
        correo: {
            type: Sequelize.EMAIL(50)
        },
        enf_asite: {
            type: Sequelize.STRING(200)
        },
        sector: {
            type: Sequelize.STRING(100)
        },
        calle_principal: {
            type: Sequelize.STRING(100)
        },
        calle_secundaria: {
            type: Sequelize.STRING(100)
        },
        referencia: {
            type: Sequelize.STRING(50)
        },
        alergia_antibiotico: {
            type: Sequelize.STRING(50)
        },
        alergia_anestesia: {
            type: Sequelize.STRING(50)
        },
        hemorragias: {
            type: Sequelize.STRING(50)
        },
        VIH_SIDA: {
            type: Sequelize.STRING(50)
        },
        tuberculosis: {
            type: Sequelize.STRING(50)
        },
        asma: {
            type: Sequelize.STRING(50)
        },
        diabetes: {
            type: Sequelize.STRING(50)
        },
        hipertencion: {
            type: Sequelize.STRING(50)
        },
        enfermedades_cardicadas: {
            type: Sequelize.STRING(50)
        },
        medicamentos: {
            type: Sequelize.STRING(50)
        },
        otros: {
            type: Sequelize.STRING(50)
        }
        
    }, {freezeTableName: true, timestamps: false});
    Persona.belongsTo(Usuario, {
        foreignKey: 'idUsuario'
    });
    
    Persona.associate = function (models) {
        models.hasMany(models.historia_clinica, {
            foreignKey: 'idPersona'
        });
    };
    return Persona;
};