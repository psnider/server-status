export interface ServerStatus {
    server_name: string
    version: string
    git_commit_id: string
    latest_restart: Date
    // dynamic
    server_uptime: string
    current_rss_memory_mb: number
    max_rss_memory_mb: number
    current_heapUsed_memory_mb: number
    max_heapUsed_memory_mb: number
}

export function udpateServerStatus(status: ServerStatus): void
