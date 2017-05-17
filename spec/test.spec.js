var request = require("request")
var server = require("../server/server.js")
// TODO: need to figure out how to use jquery with jasmine
// var $ = require("./support/test_helper.js")

var base_url = "http://localhost:8000/"

describe("Async", function() {
    describe("GET / with", function() {
        it("status code 200", function(done) {
            request.get(base_url, function(err, res, body) {
                expect(res.statusCode).toBe(200)
                done()

            })
        })

        it("form", function(done) {
            request.get(base_url, function(err, res, body) {
                expect(body).toContain("form")
                done()
            })
        })

        it("input", function(done) {
            request.get(base_url, function(err, res, body) {
                expect(body).toContain("input")
                done()
            })
        })
    })

    describe("POST / with", function() {
        api_url = base_url + "api/fib/"
        it("status code 400", function(done) {
            request({url: api_url, method: "POST", json: {user_input: ""}}, function(err, res, body) {
                expect(res.statusCode).toBe(400)
                done()
            })
        })

        it("warining message of server issue", function(done) {
            request({url: api_url, method: "POST", json: {user_input: "a"}}, function(err, res, body) {
                expect(body.error).toContain("Invalid input was provided")
                done()
            })
        })
        
        it("status code 200", function(done) {
            request({url: api_url, method: "POST", json: {user_input: "5"}}, function(err, res, body) {
                expect(res.statusCode).toBe(200)
                done()
            })
        })

        it("fibonacci up to but not including fib(5)", function(done) {
            request({url: api_url, method: "POST", json: {user_input: "5"}}, function(err, res, body) {
                expect(body).toEqual({ payload: [ '0', '1', '1', '2', '3' ] })
                server.closeServer()
                done()
            })
        })
    })

})
