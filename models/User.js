const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const  { isStrongPassword } = require('validator');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            },
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isStrongPass(value){
                    const strongPasswordOptions={
                        minlenght: 8,
                        minLowercase: 1,
                        minUppercase: 1,
                        minNumbers: 1,
                        minSymbols: 1,
                    };
                    if(!isStrongPassword(value, strongPasswordOptions)){
                        throw new Error('Password is not strong enough');
                    }
            },
        },
    },
    
    hooks:{
        beforeCreate: async (newUserData) =>{
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
    }
    );

    module.exports = User;