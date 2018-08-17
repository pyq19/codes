#include <boost/timer.hpp>
#include <iostream>
using namespace boost;
using namespace std;

int main()
{
    timer t;
    cout << "max timespan:"
         << t.elapsed_max() / 3600 << "h" << endl;
    cout << "min timespan:"
         << t.elapsed_min() << "s" << endl;
    cout << "now time elapsed:"
         << t.elapsed() << "s" << endl;
}
/*
max timespan:5.1241e+09h
min timespan:1e-06s
now time elapsed:9.2e-05s
*/