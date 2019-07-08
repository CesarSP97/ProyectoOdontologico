module.exports = function (sequelize, Sequelize) {
    var persona = require('./persona');
    var Persona = new persona(sequelize, Sequelize);
    var Cita = sequelize.define('cita', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },
        calendario_citas:{
            type:Sequelize.DATE
        },
        fecha:{
            type:Sequelize.DATE
        },
        hora:{
            type:Sequelize.TIMESTAMPS
        }

        
    }, {freezeTableName: true, timestamps: false});
    
    Cita.belongsTo(Persona, {
        foreignKey: 'idPersona'
    });
    
    Cita.associate = function (models) {
        models.hasMany(models.pago_cita, {
            foreignKey: 'idCita'
        });
    };
    return Cita;
};


