module.exports=(function() {
    return {
        // api routes
        fib: function(req, res) {
            var user_input = req.body.user_input
            if (!isValid(user_input)) {
                res.status(400).json({ error: "Invalid input was provided to server, CODE: 400"})
            }
            var a = 0
            var b = 1
            var temp
            fibs = []

            for(var i=0; i<user_input; i++) {
                fibs.push(a)
                temp = a+b
                a = b
                b = temp
            }
            res.json({payload: fibs})
        },
    }
})()

function isValid(user_input) {
    return /^\d+$/.test(user_input)
}
