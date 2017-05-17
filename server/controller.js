var bigInt = require('big-integer')

module.exports=(function() {
    return {
        // api routes
        fib: function(req, res) {
            var user_input = req.body.user_input
            if (!isValid(user_input)) {
                res.status(400).json({ error: "Invalid input was provided to server, CODE: 400"})
                return res.send()
            }
            var a = bigInt(0);
            var b = bigInt(1);
            var temp = bigInt();
            fibs = []

            for(var i=0; i<user_input; i++) {
                fibs.push(a.toString())
                temp = a.add(b)
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
