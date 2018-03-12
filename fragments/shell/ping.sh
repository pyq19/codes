# MacOS wifi显示正常却无法上网/频繁断网问题
# 参考:
# https://discussions.apple.com/thread/7417150?start=30&tstart=0
# https://unix.stackexchange.com/questions/190513/shell-scripting-proper-way-to-check-for-internet-connectivity

while sleep 2
do
    if ping -q -c 1 -W 1 101.132.123.117 >/dev/null; then
        echo "IPv4 is up"
        continue
    else
        echo "IPv4 is down"
        echo "add State:/Network/Interface/en0/RefreshConfiguration temporary" | sudo scutil
        continue
    fi
done
