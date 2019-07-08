module.exports = function (sequelize, Sequelize) {
    var persona = require('./persona');
    var Persona = new persona(sequelize, Sequelize);
    
    var Historia_clinica = sequelize.define('historia_clinica', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },

        fecha_creacion: {
            type: Sequelize.DATE
        },
        n_historia: {
            type: Sequelize.INTEGER(6).ZEROFILL
        }

    }, {freezeTableName: true, timestamps: true});
    
    Historia_clinica.associate = function (models) {
        models.hasMany(models.examen_extraoral, {
            foreignKey: 'idHistoria_clinica'
        });
    };
    
    Historia_clinica.associate = function (models) {
        models.rol.hasMany(models.signos_vitales, {
            foreignKey: 'idHistoria_clinica'
        });
    };
    
    Historia_clinica.associate = function (models) {
        models.hasMany(models.indice_placa, {
            foreignKey: 'idHistoria_clinica'
        });
    };
    
    Historia_clinica.belongsTo(Persona, {
        foreignKey: 'idPersona',
        constraints: false});
    
    Historia_clinica.associate = function (models) {
        models.hasMany(models.plan_tratamiento, {
            foreignKey: 'idHistoria_clinica'
        });
    };
    return Historia_clinica;
};
