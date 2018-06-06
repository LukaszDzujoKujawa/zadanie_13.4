var os = require('os');
process.stdin.setEncoding('utf8');

function getUptime(){
  var uptime = os.uptime();
  var uptimeHours = Math.floor(uptime / 3600);
  var uptimeMinutes = Math.floor(uptime % 3600 / 60);
  var uptimeSeconds = Math.floor(uptime % 3600 % 60);
  console.log('Uptime: ' + uptimeHours + " hours " + uptimeMinutes + " min " + uptimeSeconds + " sec");
}

exports.getUptime = getUptime;