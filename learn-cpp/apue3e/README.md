<<UNIX环境高级编程（第三版）>>
Kindle

ubuntu 18.04 编译 apue.h libapue.a
0. wget http://www.apuebook.com/src.3e.tar.gz
1. tar -xvzf src.3e.tar.gz
2. sudo apt-get install libbsd-dev
3. make
4. sudo cp ./include/apue.h /usr/include
sudo cp ./lib/libapue.a /usr/local/lib
5. gcc 1.3.c -lapue