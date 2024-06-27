import Row from "./Row";
import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
// import { Paper } from "@mui/material";
import Symposium from "../interfaces/Symposium";
import useSWR from "swr";
import dayjs from "dayjs";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));

function fetcher(url: string) {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => date_parser(data));
}

function date_parser(data: Array<Symposium>): Array<Symposium> {
    for (let record of data) {
        record.date = record.date
            ? dayjs(record.date).format("YYYY-MM-DD")
            : null;
    }
    return data;
}

function EventList() {
    const {
        data: events,
        error: error,
        isLoading: isLoading,
        mutate: mutateList,
    } = useSWR("http://localhost:5001/events", fetcher);

    async function deleteEvent(event: Symposium) {
        await fetch(`http://localhost:5001/events/${event.id}`, {
            method: "DELETE",
        });
        mutateList();
    }

    async function readEvent(event: Symposium) {
        let formData = new FormData();
        formData.append("unread", "");

        let options = {
            method: "PATCH",
            body: formData,
        };
        await fetch(`http://localhost:5001/events/${event.id}`, options);
        mutateList();
    }

    async function editEvent(event: Symposium, date: string) {
        let formData = new FormData();
        formData.append("date", date);

        let options = {
            method: "PATCH",
            body: formData,
        };
        await fetch(`http://localhost:5001/events/${event.id}`, options);
        mutateList();
    }

    // Handles error and loading state
    if (error) return <div className="failed">failed to load</div>;
    if (isLoading) return <div className="Loading">Loading...</div>;

    return (
        <Stack spacing={2}>
            {(events as Array<Symposium>)
                .filter((event) => !event.date)
                .map((event: Symposium) => {
                    return (
                        <Row
                            event={event}
                            key={event.id}
                            deleteEvent={(event) => deleteEvent(event)}
                            readEvent={(event) => readEvent(event)}
                            editEvent={(event, date) => editEvent(event, date)}
                        />
                    );
                })}
            {(events as Array<Symposium>)
                .filter((event) => event.date)
                .toSorted((a: Symposium, b: Symposium) => dayjs(a.date).isBefore(dayjs(b.date)) ? -1 : 1)
                .map((event: Symposium) => {
                    return (
                        <Row
                            time={dayjs(event.date).isBefore(dayjs()) ? "past" : "future"}
                            event={event}
                            key={event.id}
                            deleteEvent={(event) => deleteEvent(event)}
                            readEvent={(event) => readEvent(event)}
                            editEvent={(event, date) => editEvent(event, date)}
                        />
                    );
                })}
        </Stack>
    );
}

export default EventList;
