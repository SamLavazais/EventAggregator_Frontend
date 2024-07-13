import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Paper from "@mui/material/Paper";
import OpenInNew from '@mui/icons-material/OpenInNew';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, IconButton, Stack } from "@mui/material";
import RowProps from "../interfaces/RowProps";
import { useState } from "react";
import { Done } from "@mui/icons-material";


function Row({event, deleteEvent, readEvent, editEvent, time}: RowProps) {
    const [date, setDate] = useState('');

    return (
        <div>
            <Paper variant="elevation" elevation={2}>
                <Accordion >

                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Grid container spacing={0}>
                            <Grid xs={6}>
                                <Typography color={time === "past" ? "grey" : ""} fontWeight={event.unread ? 600 : 400}>
                                    {event.title} ({event.id})
                                </Typography>
                            </Grid>
                            <Grid xs={2}>
                                <Typography color={time === "past" ? "grey" : ""} fontWeight={event.unread ? 600 : 200}>
                                    {event.source}
                                </Typography>
                            </Grid>
                            <Grid xs={4}>
                                {event.date
                                    ? <Typography color={time === "past" ? "grey" : ""} fontWeight={event.unread ? 600 : 200}>{event.date}</Typography>
                                    : <Typography color="error" fontWeight={event.unread ? 600 : 200}>
                                        Date manquante
                                    </Typography>
                                }
                            </Grid>
                        </Grid>
                    </AccordionSummary>

                    {/* <Divider variant="middle" sx={{ borderColor:"darkgrey", opacity:1 }}></Divider> */}

                    <AccordionDetails>
                        <Grid container spacing={0}>
                            <Grid xs={8}>
                                <Typography color={time === "past" ? "grey" : ""} paddingRight={9}>
                                    <strong>Notes :</strong> <em>L'utilisateur pourra ajouter une courte description ici s'il le souhaite (remarques, infos complémentaires...)</em>
                                </Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Stack>
                                    <Container>
                                        <Typography>
                                            Indiquer la date : <input type="date" placeholder="Date manquante" value={date} onChange={event => setDate(event.target.value)} />
                                            <IconButton
                                                aria-label="dater"
                                                size="small"
                                                color="success"
                                                onClick={ () => editEvent(event, date) }
                                                >
                                                <Done/>
                                            </IconButton>
                                        </Typography>
                                    </Container>
                                        <Button
                                        sx={{ width: '80%' }}
                                        variant="contained"
                                        color="secondary"
                                        disableElevation
                                        size="large"
                                        endIcon={<OpenInNew/>}
                                        href={event.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={ () => readEvent(event) }
                                        >
                                        Aller sur la page de l'event
                                    </Button>
                                </Stack>
                            </Grid>
                            <IconButton
                                style={{ position: "absolute", right:5, bottom:5}}
                                aria-label="delete"
                                size="small"
                                onClick= {() => deleteEvent(event)}
                                color="error"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </div>
    );
}

export default Row;
