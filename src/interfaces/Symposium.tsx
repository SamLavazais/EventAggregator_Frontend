export default interface Symposium {
    id: number,
    title: string,
    date: string | null,
    url: string,
    source: string | null,
    unread: boolean,
    deleted_at: string
}