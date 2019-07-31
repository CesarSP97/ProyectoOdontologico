'use strict';
module.exports = (sequelize, DataTypes) => {
  
    var indice_cpo = sequelize.define('Indice_cpo', {
        
        total_cpo:{
            type: DataTypes.INTEGER
        },
        total_ceo:{
            type: DataTypes.INTEGER
        },
        
        external_id: {
            type: DataTypes.UUID
        }

    }, {freezeTableName: true});
    
    indice_cpo.associate = function(models){
          
        indice_cpo.belongsTo(models.historia_clinica, {foreignkey: 'id_historia_clinica'});
        
      };
   
    return indice_cpo;
    };