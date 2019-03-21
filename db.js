const Sequelize = require('sequelize')
const connectionToDb = process.env.DATABASE_URL || 'postgres://postgres:shop@localhost:5432/postgres'
const sequelize = new Sequelize(connectionToDb, {define: {timestamp:false}})


sequelize.sync()
    .then(() => {
        console.log('Sequlize ')
    })

module.exports = sequelize