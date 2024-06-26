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
import { IconButton } from "@mui/material";
import RowProps from "../interfaces/RowProps";


function Row({event, deleteEvent, readEvent}: RowProps) {
    
    return (
        <div>
            <Paper variant="outlined" elevation={2}>
                <Accordion >

                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Grid container spacing={0}>
                            <Grid xs={6}>
                                <Typography fontWeight={event.unread ? 600 : 400}>
                                    {event.title} ({event.id})
                                </Typography>
                            </Grid>
                            <Grid xs={2}>
                                <Typography fontWeight={event.unread ? 600 : 200}>
                                    {event.source}
                                </Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Typography color={"#f44336"} fontWeight={event.unread ? 600 : 200}>
                                    {event.date}
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionSummary>

                    {/* <Divider variant="middle" sx={{ borderColor:"darkgrey", opacity:1 }}></Divider> */}

                    <AccordionDetails>
                        <Grid container spacing={0}>
                            <Grid xs={8}>
                                <Typography paddingRight={9}>
                                    <strong>Notes :</strong> Description bla blabla sur les
                                    caractéristiques de l'event. Qques notes que
                                    l'utilisateur a prises pour se rappeler des
                                    éléments omportants concernant cet event.
                                    Description bla blabla sur les
                                    caractéristiques de l'event. Qques notes que
                                    l'utilisateur a prises pour se rappeler des
                                    éléments omportants concernant cet
                                    event.Description bla blabla sur les
                                    caractéristiques de l'event.
                                </Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Button
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
