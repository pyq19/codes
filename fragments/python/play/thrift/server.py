import socket
import sys
sys.path.append('./gen-py')
from helloworld import HelloWorld
from helloworld.ttypes import *
from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol
from thrift.server import TServer

class HelloWorldHandler:
    def ping(self):
        return "pong"
    def say(self, msg):
        res = "received: " + msg
        print res
        return res


handler = HelloWorldHandler()
processor = HelloWorld.Processor(handler)

transport = TSocket.TServerSocket("localhost", 9090)

tfactory = TTransport.TBufferedTransportFactory()

pfactory = TBinaryProtocol.TBinaryProtocolFactory()

server = TServer.TSimpleServer(processor, transport, tfactory, pfactory)

print 'start'
server.serve()

print 'done'
