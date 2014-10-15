var exec = require("child_process").exec;
var socket = require('socket.io-client')('http://ehdhana.sacheendra.me');

socket.on('connect', function(){
    socket.on('sendmessage', function(data){
    	exec("sudo ./codesend " + data, function(err, stdout, stderr) {console.log(stdout)});
    });
});