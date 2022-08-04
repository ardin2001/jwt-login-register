import { Sequelize } from "sequelize";

const DB = new Sequelize('auth_db','root','',{
    host :"localhost",
    dialect : "mysql"
})
export default DB