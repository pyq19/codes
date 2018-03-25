(function () {
    'use strict';

    const WebSocketServer = require('ws').Server;
    const ws = new WebSocketServer({
        port: 8282
    });

    ws.on('connection', function (ws) {
        console.log('new client connecting');

        ws.on('message', function (msg) {
            console.log(msg);

            ws.send('this is a message from server');
        });
    });

})();
