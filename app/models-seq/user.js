module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        last_login: {
            type: DataTypes.DATE
        },

        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    }
        // { //User has many Classes
        //     classMethods: {
        //         associate: function(models) {
        //             User.hasMany(models.Class, {
        //                 //if a user is deleted, delete all their classes too
        //                 onDelete: "cascade"
        //             });
        //         }
        //     }
        // }
    );
    return User;
};