import builtins  # python2 叫__builtin__
builtins.B = 'B'
print(vars(globals()['__builtins__']) is vars(builtins))  # True

G = 'G'

def enclosing():
    E = 'E'

    def test():
        L = 'L'
        print(L, E, G, B)

    return test


enclosing()()
# L E G B
