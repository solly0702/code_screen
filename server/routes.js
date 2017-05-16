controller = require("./controller.js")

module.exports = function(app, express) {
    var api = express.Router()

    api.post("/fib", controller.fib)

    app.use("/api", api);
}
