import thriftpy
import thrift_connector.connection_pool as connection_pool

service = thriftpy.load("pingpong.thrift")
pool = connection_pool.ClientPool(
    service.PingService,
    'localhost',
    6000,
    connection_class=connection_pool.ThriftPyCyClient
)

print "Sending Ping..."
print "Receive:", pool.ping()
print "Winning the match..."
print "Receive:", pool.win()