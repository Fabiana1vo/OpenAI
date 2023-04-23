const express  = require("express")
const promptController = require("../controllers/prompet-controller")

const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)

module.exports = routes

// http://localhost:5001/api/prompt