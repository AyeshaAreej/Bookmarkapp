const express= require("express")
const bookmarkController= require('../controllers/bookmarkController')

const route = express.Router()

//post routes
route.get('/',bookmarkController.home);

route.get("/detail/:id",bookmarkController.detail);
route.post("/add", bookmarkController.add);
route.delete("/delete/:id", bookmarkController.deleteBookmark);


module.exports = route;