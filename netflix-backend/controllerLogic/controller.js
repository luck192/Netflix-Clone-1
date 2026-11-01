const loginModel = require('../modelBlueprint/model');
const bcrypt = require('bcryptjs');

//signUP
createEntry = async (req, res) => {

  try {
    const {username,email,password} = req.body;
    const existingUser = await loginModel.findOne({email});
    
    if(existingUser){
     return res.status(400).json({ 
                success: false, 
                message: "Yeh email pehle se registered hai! Please login karein." 
            });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newEntry = new loginModel({
      name:username,
      email:email,
      password:hashedPassword
    });

    await newEntry.save();
    
    res.status(200).json({
      success:true,
      message:"login krlo signUP hogya"

    })
  } catch (error) {
    res.status(500)
      .json({
        success: false,
        message: "Internal server error"
      })
  }
}
//SIgnIN
checkEntry = async (req, res) => {

  try {
    const {username,email,password} = req.body;
    const user = await loginModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ 
                success: false, 
                message: "User exist nahi karta! Pehle Sign Up karo." 
            });
        }
   const isPasswordValid = await bcrypt.compare(password, user.password);

 if (!isPasswordValid) {
            return res.status(400).json({ 
                success: false, 
                message: "Password galat hai bhai!" 
            });
        }

        // 3. Login Successful
        return res.status(200).json({ 
            success: true, 
            message: "Login successful! Swagat hai." 
        });

    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
module.exports ={createEntry, checkEntry}


