const Sequelize = require("sequelize")


const db = {}
const sequelize = new Sequelize("d1mqp1mgr1obg7", "dcblmxgfivlrwk", "121f619bb3fc157b86d13ef6a6a88aeddd8a23d34795c226e5322c50952425b8", {
    host: 'ec2-54-83-36-37.compute-1.amazonaws.com',
    dialect: 'postgres',
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db;