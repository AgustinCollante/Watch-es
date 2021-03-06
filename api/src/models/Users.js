const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('users', {
      name:{
        type: DataTypes.STRING,
        allowNull:true
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:true
        }
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      },
      image:{
        type: DataTypes.TEXT,
        allowNull: true
      },
      isAdmin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      resetLink: { //token
        type: DataTypes.STRING,
        allowNull: true
      },
      google: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  };
  
  