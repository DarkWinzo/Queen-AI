const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./Connect/language/' + global.language + '.json')) {
    console.log(
        chalk.green.bold('🌻️ Loading ' + global.language + ' language...')
    );
    
    var json = JSON.parse(fs.readFileSync('./Connect/language/' + global.language + '.json'));
} else {
    console.log(
        chalk.red.bold('🌐️ The language you entered is not available here. English language is selected')
    );
    
    var json = JSON.parse(fs.readFileSync('./Connect/language/EN.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}
