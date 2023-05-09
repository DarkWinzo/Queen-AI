var forever = require("forever-monitor");
var child = new forever.Monitor("Connect/module/cilent.js", {
    silent: false,
    });
child.start();
