import Symposium from "./Symposium";

export default interface RowProps {
    event: Symposium;
    deleteEvent: (event: Symposium) => Promise<void>;
    readEvent: (event: Symposium) => Promise<void>;
    editEvent: (event: Symposium, date: string) => Promise<void>;
    time?: "past" | "future";
}
