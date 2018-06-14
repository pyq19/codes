exception AboutToShutDownException {
    1: string why,
}

service PingService {
    string ping() throws (1:AboutToShutDownException shutdown_exception),
    string win(),
    string sleep(1:double seconds),
}
