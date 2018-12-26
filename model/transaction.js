module.exports = (sequelize,type) => {
    return sequelize.define('transaction', {
        transactionNumber : {
            field:'id_transaction',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            field:'type',
            type:type.STRING
        },
        amount : {
            field:'amount',
            type:type.INTEGER
        },
        amountSign : {
            field:'amount_sign',
            type:type.STRING
        },
        account_number: {
            type:type.INTEGER,
            onDelete: 'CASCADE',

            reference: {
                model:'account',
                key: 'account_number'
            }
        }
    }, {
        tableName: 'transaction',
        timestamps: false
    })
}