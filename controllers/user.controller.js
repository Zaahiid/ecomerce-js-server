import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/user.model.js";


const createUser = asyncHandler(async(req,res)=>{
    const {username, email, password} = req.body

    if (!username || !email || !password) {
        throw new Error("Please fill all the inputs.");
      }

      const userExists = await User.findOne({ email });
      if (userExists) res.status(400).send("User already exists");

      const newUser = new User({ username, email, password });
      console.log("New user: ", newUser);
      return

      try {
        await newUser.save();
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400)
        throw new Error("Invalid user data");
      }

})

export {createUser}