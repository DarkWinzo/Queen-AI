var forever = require("forever-monitor");
var child = new forever.Monitor("Connect/function/cilent.js", {
    silent: false,
    });
child.start();
