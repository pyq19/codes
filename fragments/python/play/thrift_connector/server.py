import os
import time
import thriftpy
from thriftpy.thrift import TProcessor

thrift_service = thriftpy.load(os.path.join(os.path.dirname(__file__), "pingpong.thrift"), "pingpong_thrift")  # noqa
service = thrift_service.PingService


class PingpongServer(object):
    def ping(self):
        if os.environ.get('about_to_shutdown') == '1':
            raise service.AboutToShutDownException
        return "pong"

    def win(self):
        return "Yes, you win"

    def sleep(self, seconds):
        time.sleep(seconds)
        return 'good morning'

from thriftpy.rpc import make_server

server = make_server(service, PingpongServer(), '127.0.0.1', 6000)
server.serve()
