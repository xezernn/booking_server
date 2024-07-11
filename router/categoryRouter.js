const { getAllCategory, addCategory, getCategoryById, deleteCategory } = require("../controller/categoryModel");
const router = require("express").Router()

router.get("/all", getAllCategory)
router.get('/all/:id', getCategoryById);
router.post('/all', addCategory);
router.delete('/all/:id', deleteCategory);



module.exports = router