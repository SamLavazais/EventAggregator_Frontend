import Row from "./Row";
import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
// import { Paper } from "@mui/material";
import Symposium from "../interfaces/Symposium";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));

function EventList({events}: {events: Array<Symposium>}) {
    return (
        <Stack spacing={2}>
            {events.map((event) => {
                return <Row event={event} key={event.id}/>
            })}
        </Stack>
    );
}


export default EventList;
