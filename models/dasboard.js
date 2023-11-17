const {Model , DataTypes} =require ('sequelize');
 const sequelize =requiere('../config/connection');

 class Dashboard extends Model{}

 Dashboard.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false
        },
        user_name:{
            type:DataTypes.STRING,
            references:{
                model:'user',
                key:'username'
            }
        },
      date_created:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:DataTypes.NOW,
      }  ,
      sequelize,
      timestamps:false,
      freezeTableName: true,
      
    }
 );
 module.exports= Dashboard;

 