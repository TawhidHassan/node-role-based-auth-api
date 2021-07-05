const router = require("express").Router()

//user reg route
router.post("/register-user",async (req,res)=>{});

//admin reg route
router.post("/register-admin",async (req,res)=>{});

//super admin reg route
router.post("/register-super-admin",async (req,res)=>{});

//user login route
router.post("/login-user",async (req,res)=>{});

//admin login route
router.post("/login-admin",async (req,res)=>{});


//super admin login route
router.post("/login-super-admin",async (req,res)=>{});

//user protected route
router.post("/user-ptofile",async (req,res)=>{});

//admin protected route
router.post("/admin-ptofile",async (req,res)=>{});

//super admin protected route
router.post("/super-admin-ptofile",async (req,res)=>{});

module.exports = router;