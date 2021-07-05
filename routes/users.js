const router = require("express").Router()
//bring in auth.js reg function
const {userRegister, userLogin,userAuth,checkRole,serializeUser} = require("../utils/Auth"); 


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
router.get("/profile", userAuth, async (req, res) => {
    return res.json(serializeUser(req.user));
  });
  


// Users Protected Route
router.get("/user-protectd",userAuth,checkRole(["user"]),
    async (req, res) => {
      return res.json("Hello User");
    }
  );
  
  // Admin Protected Route
  router.get("/admin-protectd",userAuth,checkRole(["admin"]),
    async (req, res) => {
      return res.json("Hello Admin");
    }
  );
  
  // Super Admin Protected Route
  router.get("/super-admin-protectd",userAuth,checkRole(["superadmin"]),
    async (req, res) => {
      return res.json("Hello Super Admin");
    }
  );

// Super Admin Protected Route
router.get(
    "/super-admin-and-admin-protectd",
    userAuth,
    checkRole(["superadmin", "admin"]),
    async (req, res) => {
      return res.json("Super admin and Admin");
    }
  );

module.exports = router;