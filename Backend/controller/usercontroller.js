import User from "../models/usermodel.js";
import bcryptjs from 'bcryptjs'

export const signup = async(req,res)=>{
      try{
           
        const { fullname,email,password } = req.body;
        const user = await User.findOne({email});
        if(user){
          return res.status(400).json({massage:"User already exit"})
        }
        const hashPassword = await bcryptjs.hash(password,10);
        const createdUser = new User({
            fullname: fullname,
           email: email,
            password: hashPassword,
        })
       await createdUser.save();
        res.status(201).json({massage:"User created successfully",user:{
          _id: createdUser._id,
          fullname: createdUser.fullname,
          email: createdUser.email,
        }})

        

      }catch(err){
        res.status(500).json({massage: "Internal errror"})

           

      }
};

export const login = async (req,res)=>{
    try{
       const {email,password} = req.body;
       const user = await User.findOne({email});
       const isMatch = await bcryptjs.compare(password, user.password)
       if(!user || !isMatch){
        return res.status(400).json({massage:"Invalid username"})
       }else{
            res.status(200).json({message: "Login successfull",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
       }
    } catch(err){
          console.log("Error: " + err.massage)
          res.status(500).json({massage:"internal server error"})
    }
}
