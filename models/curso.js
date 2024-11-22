const Sequelize = require('sequelize')
const database =  require ('../db');

const Curso = database.define('curso', {
    id_curso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    foto: {
        type: Sequelize.TEXT
    },

    nome_curso:{
        type: Sequelize.TEXT
    },

    instituicao:{
        type: Sequelize.TEXT
    },


    empresa_id: {
        type: Sequelize.INTEGER
    }


}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = curso



