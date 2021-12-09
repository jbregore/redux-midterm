import * as React from 'react';
import {
    Box,
    Card,
    CardContent,
    Button,
    Typography, 
    Grid
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { TextField } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const StyledTextField = withStyles((theme) => ({
    root: {
        width: 300,
        "& .MuiInputBase-root": {
            color: '#D1D4C9',
            paddingLeft: 10,
            paddingRight: 10,
        }
    }
}))(TextField);

export default function BasicCard() {
    return (
        <Card sx={{
            minWidth: 375, marginTop: 2,
            backgroundColor: '#1E1F20', border: '1px solid #303336'
        }}>

            <CardContent>
                <Box style={{ textAlign: 'center' }}>
                    <Typography style={{ color: '#D1D4C9', fontSize: 14 }}>
                        Rating
                    </Typography>
                </Box>

                <Box style={{ marginTop: 20, cursor: 'pointer' }}>
                    <Grid container spacing={2} style={{}}>
                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', }}>
                            <Typography style={{ color: '#D1D4C9', fontSize: 14 }}>TeamWork</Typography>
                        </Grid>
                        <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Box sx={{
                                display: 'grid',
                                gap: .1,
                                gridTemplateColumns: 'repeat(5, 1fr)',
                                width: 200,
                            }}>
                                <StarIcon style={{ color: '#26CE8D', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#26CE8D', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#26CE8D', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#26CE8D', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} style={{}}>
                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', }}>
                            <Typography style={{ color: '#D1D4C9', fontSize: 14 }}>Creativity</Typography>
                        </Grid>
                        <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Box sx={{
                                display: 'grid',
                                gap: .1,
                                gridTemplateColumns: 'repeat(5, 1fr)',
                                width: 200,
                            }}>
                                <StarIcon style={{ color: '#26CE8D', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#26CE8D', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#26CE8D', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} style={{}}>
                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', }}>
                            <Typography style={{ color: '#D1D4C9', fontSize: 14 }}>Adaptability</Typography>
                        </Grid>
                        <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Box sx={{
                                display: 'grid',
                                gap: .1,
                                gridTemplateColumns: 'repeat(5, 1fr)',
                                width: 200,
                            }}>
                                <StarIcon style={{ color: '#E03E65', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} style={{}}>
                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', }}>
                            <Typography style={{ color: '#D1D4C9', fontSize: 14 }}>Leadership</Typography>
                        </Grid>
                        <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Box sx={{
                                display: 'grid',
                                gap: .1,
                                gridTemplateColumns: 'repeat(5, 1fr)',
                                width: 200,
                            }}>
                                <StarIcon style={{ color: '#E03E65', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#E03E65', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} style={{}}>
                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', }}>
                            <Typography style={{ color: '#D1D4C9', fontSize: 14 }}>Persuasion</Typography>
                        </Grid>
                        <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Box sx={{
                                display: 'grid',
                                gap: .1,
                                gridTemplateColumns: 'repeat(5, 1fr)',
                                width: 200,
                            }}>
                                <StarIcon style={{ color: '#E03E65', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#E03E65', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                                <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box style={{ textAlign: 'center', marginTop: 30 }}>
                    <Typography style={{ color: '#D1D4C9', fontSize: 14 }}>
                        Share us your thoughts!
                    </Typography>

                    <Box style={{ marginTop: 20 }}>
                        <StyledTextField
                            variant="standard"
                            multiline
                            minRows={4}
                            maxRows={10}
                            style={{
                                width: '100%', paddingTop: 5,
                                backgroundColor: '#131414', color: '#fff',
                                borderRadius: 8, border: '1px solid #303336'
                            }}

                        />
                    </Box>

                    <Box style={{
                        display: 'flex', width: '100%',
                        flexDirection: 'column',
                        height: 30, alignItems: 'center', justifyContent: 'center',
                        marginTop: 30
                    }}>
                        <Button variant="contained" style={{ width: '50%', backgroundColor: '#20C284' }}>Submit</Button>
                    </Box>
                </Box>

            </CardContent>

        </Card>
    );
}
