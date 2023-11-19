const {Model,DataTypes}= require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
    {
id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
},
content :{
    type:DataTypes.STRING,
    allowNull:false,
},
user_name: {
    type:DataTypes.STRING,
    references: {
        model:'User',
        key: 'username'
    },
},
date_created:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue:DataTypes.NOW,
  }  ,      
sequelize,
timestamps:false,
freezeTableName:true,
// underscored:true
modelName:'Comment'
}
);
module.exports= Comment