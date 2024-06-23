import Row from "./Row";
import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
// import { Paper } from "@mui/material";
import Symposium from "../interfaces/Symposium";
import useSWR from "swr";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));

function fetcher(url: string) {
    return fetch(url).then((res) => res.json());
}

function EventList() {
    const {
        data: events,
        error,
        isValidating,
    } = useSWR("http://localhost:5001/events", fetcher);


    // Handles error and loading state
    if (error) return <div className="failed">failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;

    return (
        <Stack spacing={2}>
            {events.map((event: Symposium) => {
                return <Row event={event} key={event.id} />;
            })}
        </Stack>
    );
}

export default EventList;
