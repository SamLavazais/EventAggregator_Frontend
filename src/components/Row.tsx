import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Paper from "@mui/material/Paper";
import OpenInNew from '@mui/icons-material/OpenInNew';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Symposium from "../interfaces/Symposium"
// import { Divider } from "@mui/material";

function Row({event}: {event: Symposium}) {
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
                                <Typography>
                                    {event.title}
                                </Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Typography>{event.date}</Typography>
                            </Grid>
                            <Grid xs={2}>
                                {event.source}
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
                                >
                                    Aller sur la page de l'event
                                </Button>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </div>
    );
}

export default Row;
