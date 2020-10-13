function rewriteConsoleLog() {
    // 取得原来的
    const log = console.log
    console.log = function () {
        // log.bind(this, new Date().toLocaleString()).apply(this, arguments)
        // or
        log(new Date().toLocaleString(), ...arguments)
    }
}

function rewriteConsoleLog() {
    // 取得原来的
    const log = console.log
    Object.defineProperty(console, 'log', {
        get() {
            return function () {
                log(new Date().toLocaleString(), ...arguments)
            }
        }
    })
}

rewriteConsoleLog()

console.log('hello');