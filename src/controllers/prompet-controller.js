const { json } = require("express")

module.exports = {
    async sendText(request, response) {
    return response.status(200).json({
        message: "caio castro chegou no rolê"
    })
    }
}