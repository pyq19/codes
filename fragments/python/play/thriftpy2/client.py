import thriftpy
u_thrift = thriftpy.load('user.thrift', module_name='u_thrift')

from thriftpy.rpc import make_client

client = make_client(u_thrift.UserService, '127.0.0.1', 6000)

users = client.getUsers()

for u in users:
    print u.userId
    print u.loginName

u = client.getUser(loginName='666')
print u.loginName

# from gen-py.mytest.thrift.ttypes import UserNotFound
