export class ApiExamples {
    socketExample() {
        wx.connectSocket({
            url: 'ws://127.0.0.1:8282',
            success: function () {
                console.log('client connecting success');
            }
        });

        // 发送数据必须在微信小程序api onSocketOpen 即在socket已经打开并处于监听状态
        wx.onSocketOpen(function () {
            wx.sendSocketMessage({
                data: 'this is a message from client',
            });

            wx.onSocketMessage(function (msg) {
                console.log(msg.data);
            });
        });
    };
}
