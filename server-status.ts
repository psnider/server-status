import {ServerStatus} from './server-status.d'


const BYTES_PER_MEGABYTE = 1048576


function elapsedTimeToString(elapsed_ms: number): string {
    function getTimeString(elapsed_ms: number) {
        function zeroPad(milliseconds: number) {
            var prefix = ''
            if (milliseconds <= 9) {
                prefix = '00'
            } else if (milliseconds <= 99) {
                prefix = '0'
            }
            var s = prefix + milliseconds.toString()
            return s
        }
        var milliseconds_str = zeroPad(elapsed_ms % 1000)
        var date_string = new Date(elapsed_ms).toLocaleString('en-US', {hour12: false})
        var time_index = date_string.length - 8
        var time_string = `${date_string.slice(time_index)}.${milliseconds_str}`
        return time_string
    }
    var time_str = getTimeString(elapsed_ms)
    const MILLISECONDS_PER_DAY = 24 * 3600 * 1000
    var days = Math.floor(elapsed_ms / MILLISECONDS_PER_DAY)
    if (days > 0) {
        return`${days} days ${time_str}`
    } else {
        return time_str
    }
}


export function udpateServerStatus(status: ServerStatus): void {
    let server_uptime_ms = Date.now() - status.latest_restart.getTime()
    status.server_uptime = elapsedTimeToString(server_uptime_ms)
    var mem = process.memoryUsage()
    status.current_rss_memory_mb = Math.round(mem.rss / BYTES_PER_MEGABYTE)
    if (status.current_rss_memory_mb > status.max_rss_memory_mb) {
         status.max_rss_memory_mb = status.current_rss_memory_mb
    }
    status.current_heapUsed_memory_mb = Math.round(mem.heapUsed / BYTES_PER_MEGABYTE)
    if (status.current_heapUsed_memory_mb > status.max_heapUsed_memory_mb) {
        status.max_heapUsed_memory_mb = status.current_heapUsed_memory_mb
    }
    setTimeout(() => {
        udpateServerStatus(status)
    }, 1000)
}

