import Users from "../models/User.js";
import bycript from "bcrypt";

export const GetUsers = async (req,res) =>{
    try{
        const users = await Users.findAll();
        res.json(users)
    }catch(err){
        console.loh(err)
    }
}
export const Register = async (req,res) =>{
    const {name,email,password,confPassword} = req.body;
    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // const confPassword = req.body.confPassword;
    if (password != confPassword) return res.status(400,).json({message : "Password and confirm password not same"});
    const salt = await bycript.genSalt();
    const hashPassword = await bycript.hash(password,salt);
    try{
        await Users.create({
            name : name,
            email : email,
            password : hashPassword
        });
        res.json({message : "reguster successfull"});
    } catch (err){
        console.log(err)
    }
}