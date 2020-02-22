#include <iostream>

class Tricycle
{
public:
    Tricycle(int initialSpeed);
    ~Tricycle();
    int getSpeed() const { return speed; } // 如果用 const 将成员函数声明为常量函数，则表明它不会修改任何类成员的值
    void setSpeed(int speed);
    void pedal()
    {
        setSpeed(speed + 1);
        std::cout << "\nPedaling " << getSpeed() << " mph\n";
    }
    void brake()
    {
        setSpeed(speed - 1);
        std::cout << "\nPedaling " << getSpeed() << " mph\n";
    }

private:
    int speed;
};