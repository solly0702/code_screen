// TODO: how to use jsdom
const jsdom = require("jsdom")
const JSDOM = jsdom.JSDOM
const _$ = require("jquery")
const fs = require("fs")

const window = new JSDOM("<!doctype html><html><body><p>hello world<p></body></html>").window
// console.log(window.document.querySelector("p").textContent);

global.window = window
global.document = window.window
const $ = _$(global.window)

module.exports = function(domElement) {
    return $(domElemnt)
}
