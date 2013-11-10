var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../web'));
app.use(express.bodyParser());

var meetings = {
	"mashery": {
		users: {
			'1111-2222-3333-4444': {
                id: '1111-2222-3333-4444',
				name: "Kelly",
				hasEstimated: false,
				estimate: "medium",
			},
			'1111-2222-3333-5555': {
                id: '1111-2222-3333-5555',
				name: "Kelly",
				hasEstimated: false,
				estimate: "medium",
			}
		}
	},
	"medhub": {
		users: {
			"1111-2222-3333-4444": {
                id: '1111-2222-3333-4444',
				name: "Kelly",
				hasEstimated: true,
				estimate: "medium",
			},
			'1111-2222-3333-4445': {
                id: '1111-2222-3333-4445',
				name: "Kelly",
				hasEstimated: false,
				estimate: "medium",
			}
		}
	}
};

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
var io = require('socket.io').listen(5001);

var SocketAPI = require('./socket-api.js');
var RestAPI = require('./rest-api.js');

var socketApi = new SocketAPI(io, meetings);
socketApi.connect();