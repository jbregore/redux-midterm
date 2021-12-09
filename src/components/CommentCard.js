import * as React from 'react';
import {
    Star as StarIcon,
    ChatBubbleOutline as ChatBubbleOutlineIcon,
    ReportGmailerrorred as ReportGmailerrorredIcon,
    Reply as ReplyIcon
} from '@mui/icons-material';
import { Button, Typography, CardMedia, Grid, Box, } from '@mui/material';
import { TextField, } from "@material-ui/core";
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

export default function CommentCard() {
    return (
        <Box style={{
            backgroundColor: '#1E1F20', minHeight: 210,
            border: '1px solid #303336', borderRadius: 10,
            paddingTop: 30, paddingLeft: 10, marginTop: 20
        }}>
            <Grid container style={{ width: 240 }}>
                <Grid item xs={4} style={{}}>
                    <Box style={{
                        display: 'flex', width: '100%',
                        flexDirection: 'column',
                        height: 40, alignItems: 'center', justifyContent: 'center',
                    }}>
                        <CardMedia
                            style={{
                                height: 40, width: 40, objectFit: 'cover', borderRadius: '50%'
                            }}
                            component="img"
                            image="https://www.denofgeek.com/wp-content/uploads/2019/10/one_piece_stampede_movie_review_anime.jpg?fit=1200%2C707"
                            alt="Live from space album cover"
                        />
                    </Box>
                </Grid>
                <Grid item xs={8} style={{}}>
                    <Typography style={{ color: '#D1D4C9', fontSize: 14 }}>gago@gmail.com</Typography>
                    <Typography style={{ color: '#62666D', fontSize: 12 }}>Posted 3 hours ago</Typography>
                </Grid>
            </Grid>

            <Box style={{
                marginTop: 20,
                paddingLeft: 80, paddingRight: 40,
                paddingBottom: 50
            }}>
                <Box sx={{
                    display: 'grid',
                    gap: .1,
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    width: 100,
                }}>
                    <StarIcon style={{ color: '#26CE8D', width: 20, height: 20 }} />
                    <StarIcon style={{ color: '#26CE8D', width: 20, height: 20 }} />
                    <StarIcon style={{ color: '#26CE8D', width: 20, height: 20 }} />
                    <StarIcon style={{ color: '#26CE8D', width: 20, height: 20 }} />
                    <StarIcon style={{ color: '#26CE8D', width: 20, height: 20 }} />
                </Box>

                <Typography style={{ color: '#D1D4C9', fontSize: 14, marginTop: 5 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ultricies integer quis auctor elit sed vulputate.
                    Ac turpis egestas sed tempus urna et pharetra pharetra.
                </Typography>

                <Box style={{ height: 30, marginTop: 30, width: 280, float: 'right', }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <ChatBubbleOutlineIcon style={{ marginRight: 7, color: '#86888A' }} />
                            <Typography style={{ color: '#86888A', fontSize: 14 }}>10 Comments</Typography>
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <ReportGmailerrorredIcon style={{ marginRight: 7, color: '#86888A', marginTop: -2 }} />
                            <Typography style={{ color: '#86888A', fontSize: 14 }}>Report</Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* comment area */}
                <Box style={{
                    backgroundColor: '#2C2F31', minHeight: 120, marginTop: 80,
                    borderRadius: 10, border: '1px solid #303336',
                    paddingBottom: 15, paddingTop: 15
                }}>
                    <Grid container style={{ width: 240, }}>
                        <Grid item xs={2} style={{}}>
                            <Box style={{
                                display: 'flex', width: '100%',
                                flexDirection: 'column',
                                height: 30, alignItems: 'center', justifyContent: 'center',
                            }}>
                                <ReplyIcon style={{ marginRight: 0, color: '#86888A' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={9} style={{}}>
                            <Box style={{
                                display: 'flex', width: '100%',
                                flexDirection: 'column',
                                height: 30, alignItems: 'flex-start', justifyContent: 'center',
                                textAlign: 'left'
                            }}>
                                <Typography style={{ color: '#86888A', fontSize: 14 }}>Add your comment</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container style={{ width: '100%', marginTop: 10, paddingLeft: 40 }}>
                        <Grid item xs={8} style={{}}>
                            <Box style={{
                                display: 'flex', width: '100%',
                                flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                paddingRight: 20
                            }}>
                                <StyledTextField
                                    variant="standard"
                                    placeholder="Write your comment..."
                                    multiline
                                    minRows={2}
                                    maxRows={10}
                                    style={{
                                        width: '100%', paddingTop: 5,
                                        backgroundColor: '#131414', color: '#fff',
                                        borderRadius: 5,
                                    }}

                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: 3 }}>
                            <Box style={{
                                display: 'flex', width: '100%',
                                flexDirection: 'column',
                                height: 30, alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Button variant="contained" style={{ width: '80%', backgroundColor: '#20C284' }}>Submit</Button>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>

                {/* comments */}
                <Box style={{
                    backgroundColor: '#2C2F31', minHeight: 120, marginTop: 20,
                    borderRadius: 10, border: '1px solid #303336',
                    paddingBottom: 15, paddingTop: 15
                }}>
                    <Grid container style={{ width: 320, }}>
                        <Grid item xs={2} style={{}}>
                            <Box style={{
                                display: 'flex', width: '100%',
                                flexDirection: 'column',
                                height: 30, alignItems: 'center', justifyContent: 'center',
                            }}>
                                <ReplyIcon style={{ marginRight: 7, color: '#86888A' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={9} style={{}}>
                            <Box style={{
                                display: 'flex', width: '100%',
                                flexDirection: 'column',
                                height: 30, alignItems: 'flex-start', justifyContent: 'center',
                                textAlign: 'left'
                            }}>
                                <Typography style={{ color: '#86888A', fontSize: 14, marginLeft: -13 }}>tarantado@gmail.com <span style={{ marginLeft: 10 }}>3 hours ago</span></Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box style={{
                        marginTop: 13,
                        paddingLeft: 38, paddingRight: 38,
                        paddingBottom: 10
                    }}>
                        <Typography style={{ color: '#D1D4C9', fontSize: 14, marginTop: 5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ultricies integer quis auctor elit sed vulputate.
                            Ac turpis egestas sed tempus urna et pharetra pharetra.
                        </Typography>
                    </Box>

                </Box>

                {/* load more */}
                <Box style={{ textAlign: 'center', marginTop: 15 }}>
                    <Typography style={{ color: '#22B77E', fontSize: 14, marginTop: 5 }}>
                        Load more comments ...
                    </Typography>
                </Box>


            </Box>
        </Box>
    );
}
