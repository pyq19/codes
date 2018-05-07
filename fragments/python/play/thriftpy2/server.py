import thriftpy

u_thrift = thriftpy.load('user.thrift', module_name='u_thrift')
print u_thrift.User

from thriftpy.rpc import make_server


UserClass = u_thrift.User


class Dispatcher(object):
    def getUsers(self):
        u1 = UserClass(userId=1, loginName='user1', password='password1', name='mcc')
        u2 = UserClass(userId=2, loginName='user2', password='password2', name='mcc')
        return [u1, u2]

    def getUser(self, loginName):
        u = UserClass(loginName=loginName)
        return u


server = make_server(u_thrift.UserService, Dispatcher(), '127.0.0.1', 6000)

server.serve()
