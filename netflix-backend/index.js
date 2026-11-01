// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const cors = require('cors');
// const app = express();
// app.use(express.json()); // Frontend se aane wale JSON data ko read karne ke liye
// app.use(cors());
// // ================= 1. User Schema & Model =================
// const userSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true } // Yahan hashed password store hoga
// });

// const User = mongoose.model('User', userSchema);

// // ================= 2. Sign Up Route (POST) =================
// // Naye user ko register karne aur database mein save karne ke liye
// app.post('/api/signup', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check karo ki email pehle se registered toh nahi hai
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: "Yeh email pehle se registered hai! Please login karein." 
//             });
//         }

//         // Password ko securely hash karna (bcrypt se)
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Naya user create karke database mein save karna
//         const newUser = new User({
//             email,
//             password: hashedPassword
//         });

//         await newUser.save();

//         return res.status(201).json({ 
//             success: true, 
//             message: "Sign Up successful! Ab aap login kar sakte hain." 
//         });

//     } catch (err) {
//         res.status(500).json({ success: false, error: err.message });
//     }
// });

// // ================= 3. Login Route (POST) =================
// // User ki email check karne aur password verify karne ke liye
// app.post('/api/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // 1. Check karo ki user database mein exist karta hai ya nahi
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: "User exist nahi karta! Pehle Sign Up karo." 
//             });
//         }

//         // 2. User mil gaya, ab plain password ko hashed password ke sath match karo
//         const isPasswordValid = await bcrypt.compare(password, user.password);
        
//         if (!isPasswordValid) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: "Password galat hai bhai!" 
//             });
//         }

//         // 3. Login Successful
//         return res.status(200).json({ 
//             success: true, 
//             message: "Login successful! Swagat hai." 
//         });

//     } catch (err) {
//         res.status(500).json({ success: false, error: err.message });
//     }
// });

// // ================= 4. Database Connection & Server Start =================
//  mongoose.connect('mongodb+srv://lakshaygoyal222_db_user:3thn3Ytk0nf93aD2@clusterone.dzmvf7o.mongodb.net/loginpage')
//     .then(() => {
//         console.log('Connected to MongoDB successfully!');
//         app.listen(3000, () => {
//             console.log('Server is running on port 3000');
//         });
//     })
//     .catch(err => console.log('Database connection failed:', err));
const dotenv=require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const connectDB = require('./databselogic/db');
app.use(express.json());
const cors = require('cors');
app.use(cors());

console.log("m backend m hu");
const routing = require('./routes/routing');
app.use('/api', routing);

//connect to database
connectDB();

const PORT = process.env.PORT;



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


