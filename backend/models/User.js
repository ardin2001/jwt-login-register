import { Sequelize } from "sequelize";
import DB from "./db.js";
const {DataTypes} = Sequelize;

const Users = DB.define('users',{
    name : {type : DataTypes.STRING},
    email : {type : DataTypes.STRING},
    password : {type : DataTypes.STRING},
    refresh_token : {type : DataTypes.TEXT}
})
export default Users;