const Login = require("../models/loginSchema")


async function getAllUsers(req, res) {
    try {
        const data = await Login.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            "xeta": "Server Erroru bas verdi!",
            error
        })
    }
}


async function getUserByName(req, res) {
    try {
        const { username, password } = req.body
        const [user] = await Login.find({ username: username })
        if (user?.username === username && user?.password === password) {
            console.log(user);
            res.status(200).json({ "status": true })
        } else res.status(200).send({ "status": true })
    } catch (error) {
        res.status(500).send({
            "xeta": "Server Erroru bas verdi!",
            error
        })
    }
}

async function register(req, res) {
    try {
        const regUser = new Login(req.body)
        const saveUser = await regUser.save()
        res.status(201).json(saveUser)
    } catch (error) {
        res.status(500).send({
            "xeta": "Server Erroru bas verdi!",
            error
        })
    }

}

module.exports = {
    getAllUsers, register, getUserByName
}
