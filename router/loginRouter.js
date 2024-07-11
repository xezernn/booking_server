const { getAllUsers, register, getUserByName } = require("../controller/loginController")

const router = require("express").Router()

router.get("/all/users", getAllUsers)
router.post("/all/user", getUserByName)
router.post("/all", register)

module.exports = router