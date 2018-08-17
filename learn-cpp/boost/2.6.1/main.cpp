#include <boost/date_time/gregorian/gregorian.hpp>
#include <iostream>
using namespace boost::gregorian;
using namespace std;

int main()
{
    date d(2018, 8, 18);
    // 下面三个方法会报错？
    // cout << to_simple_string(d) << endl;
    // cout << to_iso_string(d) << endl;
    // cout << to_iso_extended_string(d) << endl;
    cout << d << endl;

    cin >> d;
    cout << d;

    return 0;
}