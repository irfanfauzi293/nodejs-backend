module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        customerNumber: {
            field:'customer_number',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            field:'first_name',
            type: type.STRING
        },
        lastName: {
            field:'last_name',
            type:type.STRING
        },
        birthDate: {
            field:'birth_of_date',
            type:type.DATE
        },
        username: type.STRING,
        password: type.STRING,
        phoneNumber: {
            field:'phone_number',
            type: type.STRING
        },
        phoneType: {
            field:'phone_type',
            type: type.STRING
        }
    }, {

        tableName: 'customer',
        timestamps: false
    })
}