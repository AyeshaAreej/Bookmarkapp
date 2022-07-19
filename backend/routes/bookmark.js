const express= require("express")
const bookmarkController= require('../controllers/bookmarkController')

const route = express.Router()

//post routes
route.get('/',bookmarkController.home);




module.exports = route;