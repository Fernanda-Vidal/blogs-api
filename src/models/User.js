const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'users'
    });

    return UserTable;
};

module.exports = UserSchema;