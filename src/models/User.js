const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('User', {
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'users'
    });

    // UserTable.associate = (models) => {
    //     UserTable.hasMany()
    // }

    return UserTable;
};

module.exports = UserSchema;