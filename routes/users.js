const router = require("express").Router()
//bring in auth.js reg function
const {userRegister, userLogin,} = require("../utils/Auth"); 


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

// Users Login Route
router.post("/login-user", async (req, res) => {
    await userLogin(req.body, "user", res);
  });
  
  // Admin Login Route
  router.post("/login-admin", async (req, res) => {
    await userLogin(req.body, "admin", res);
  });
  
  // Super Admin Login Route
  router.post("/login-super-admin", async (req, res) => {
    await userLogin(req.body, "superadmin", res);
  });
  

//profile route 
router.get('/profile', async(req, res) => {
    console.log(req.user)
});


//user protected route
router.post("/user-protedted",async (req,res)=>{});

//admin protected route
router.post("/admin-protedted",async (req,res)=>{});

//super admin protected route
router.post("/super-admin-protedted",async (req,res)=>{});

module.exports = router;