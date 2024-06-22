import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Paper from "@mui/material/Paper";
import OpenInNew from '@mui/icons-material/OpenInNew';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Row() {
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
                                    Conférence sur le handicap
                                </Typography>
                            </Grid>
                            <Grid xs={2}>
                                <Typography>Le 24/06/2024</Typography>
                            </Grid>
                            <Grid xs={4}>
                            </Grid>
                        </Grid>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Grid container spacing={0}>
                            <Grid xs={8}>
                                <Typography paddingRight={9}>
                                    Description bla blabla sur les
                                    caractéristiques de l'event. Qques notes que
                                    l'utilisateur a prises pour se rappeler des
                                    éléments omportants concernant cet event.
                                    Description bla blabla sur les
                                    caractéristiques de l'event. Qques notes que
                                    l'utilisateur a prises pour se rappeler des
                                    éléments omportants concernant cet
                                    event.Description bla blabla sur les
                                    caractéristiques de l'event. Qques notes que
                                    l'utilisateur a prises pour se rappeler des
                                    éléments omportants concernant cet event.
                                </Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disableElevation
                                    size="large"
                                    endIcon={<OpenInNew/>}
                                    href="https://www.has-sante.fr/jcms/p_3520038/fr/webinairehas-diabete-de-type-2-de-l-adulte-quelles-strategies-therapeutiques"
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
