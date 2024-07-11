const { getAllNews, addNews, getNewsById, deleteNews } = require("../controller/newsController");
const router = require("express").Router()

router.get("/all", getAllNews)
router.get('/all/:id', getNewsById);
router.post('/all', addNews);
router.delete('/all/:id', deleteNews);

module.exports = router