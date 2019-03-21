const Sequelize = require('sequelize')
const sequelize = require('../db')

const Ad = sequelize.define('ads', {
    title:{
        type:Sequelize.STRING,
        field:'title',
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        field:'description',
        allowNull:false
    },
    picture:{
        type:Sequelize.STRING,
        field:'picture',
        allowNull:true
    },
    price: {
        type:Sequelize.DOUBLE,
        field:'price',
        allowNull:false
    },
    email: {
        type:Sequelize.STRING,
        field:'email',
        allowNull:false
    },
    phone:{
        type:Sequelize.STRING,
        field:'phone',
        allowNull:false
    }
}, {
    timestamp:false,
    tableName:'ads'
});

module.exports = Ad