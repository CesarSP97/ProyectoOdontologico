'use strict';
module.exports = (sequelize, DataTypes) => {
  
    
    const plan_tratamiento = sequelize.define('plan_tratamiento', {
        
        fecha: {
            type: DataTypes.DATE
        },
        diagnostico:{
            type: DataTypes.STRING
        },
        tratamiento_realizado:{
            type: DataTypes.STRING
        },
        abono: {
            type: DataTypes.DECIMAL
        },
        external_id:{
            type: DataTypes.UUID
        }

    }, {freezeTableName: true});
    
    plan_tratamiento.associate = function(models){
          
        plan_tratamiento.belongsTo(models.cita, {foreignkey: 'id_cita'});
          
      };
   
    return plan_tratamiento;
};



