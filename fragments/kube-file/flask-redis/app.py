import os

import redis
from flask import Flask

DEBUG = bool(int(os.environ.get('DEBUG', '0')))
REDIS_HOST = os.environ.get('REDIS_HOST', 'localhost')

app = Flask(__name__)

rd = redis.Redis(REDIS_HOST)

@app.route('/')
def hello_world():
    hit = rd.get('hit')
    if not hit:
        hit = 0
        rd.set('hit', 0)
    else:
        rd.incr('hit')
    res = 'TEST' if DEBUG else 'PROD'
    return 'hello from %s, this is %s mode, hit redis %s times.\n' % (os.uname()[1], res, hit)

app.run('0.0.0.0', 8000)