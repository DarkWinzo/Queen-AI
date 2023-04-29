var forever = require("forever-monitor");

var child = new forever.Monitor("Connect/lib/cilent.js", {
  silent: false,
});
child.start();
