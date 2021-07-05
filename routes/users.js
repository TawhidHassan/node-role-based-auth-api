const router = require("express").Router()
//bring in auth.js reg function
const {userRegister} = require("../utils/Auth"); 


//user reg route
router.post("/register-user",async (req,res)=>{
    await userRegister(req.body, "user", res);
});

//admin reg route
router.post("/register-admin",async (req,res)=>{
    await userRegister(req.body, "admin", res);
});

//super admin reg route
router.post("/register-super-admin",async (req,res)=>{
    await userRegister(req.body, "superadmin", res);
});

//user login route
router.post("/login-user",async (req,res)=>{});

//admin login route
router.post("/login-admin",async (req,res)=>{});


//super admin login route
router.post("/login-super-admin",async (req,res)=>{});

//profile route 
router.get('profile', async(req, res) => {});


//user protected route
router.post("/user-protedted",async (req,res)=>{});

//admin protected route
router.post("/admin-protedted",async (req,res)=>{});

//super admin protected route
router.post("/super-admin-protedted",async (req,res)=>{});

module.exports = router;