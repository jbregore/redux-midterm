import React, { useState, useEffect } from 'react';
import {
    Box,
    Grid,
    CardMedia,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@mui/material';
import { useParams } from 'react-router-dom';

//SELECTOR
import { useSelector } from "react-redux";

//STAR RATING
import StarRatings from 'react-star-ratings';

//DISPATCHER AND ACTION
import { useDispatch } from "react-redux";
import { setViewStudent } from "../redux/actions/studentAction";

export default function StudentProfile(props) {

    //DISPATCHER
    const dispatch = useDispatch();

    const student = useSelector((state) => state.student);

    const [viewOne, setViewOne] = useState({});
    const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     if (student.viewOneStudent === undefined) {
    //         if (loading) {
    //             dispatch(setViewStudent("EQLbqWTXIx6Yq3pUsE6p"));
    //             // alert("putangina ka gago ka")
    //             setLoading(false);
    //         }
    //     } else {
    //         setLoading(false)
    //         setViewOne(student.viewOneStudent);
    //         // console.log(student.viewOneStudent);
    //     }
    // }, [student.viewOneStudent])

    useEffect(() => {
        if (student.viewOneStudent === undefined) {

        } else {
            console.log(student.viewOneStudent)
            setViewOne(student.viewOneStudent);
            setLoading(false);
        }
        console.log(loading)
    }, [student.viewOneStudent])
    // eslint-disable-line react-hooks/exhaustive-deps

    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    // }

    // const rows = [
    //     createData('Gender: ', viewOne.gender, 'Teamwork:', 3.0),
    //     createData('Birthday:', viewOne.birthday, 'Creativity:', 4.0),
    //     createData('Address:', viewOne.address, 'Adaptability:', 1.0),
    //     createData('Nickname:', viewOne.nickName, 'Leadership:', 2.0),
    //     createData('Skills / Language:', viewOne.skills, 'Persuasion:', 3.9),
    // ];

    // useEffect(() => {
    //     //IF ELSE KASE DIKO MA FORCE YUNG RERENDER HAHAA
    //     //DAMI PANG DAPAT PRAKTISIN 
    //     if (student.viewOneStudent === {}) {
    //     } else {
    //         setViewOne(student.viewOneStudent);
    //         console.log(viewOne)
    //     }
    // }, [student.viewOneStudent])

    // useEffect(() => {
    //     if (student.viewOneStudent === undefined) {
    //     } else {
    //         setViewOne(student.viewOneStudent);
    //         console.log(viewOne)
    //     }
    // }, [student.viewOneStudent])

    const Profiles = () => {
        return (
            <Box sx={{ flexGrow: 1 }} style={{
                backgroundColor: '#1E1F20', height: 300,
                border: '1px solid #303336', borderRadius: 10
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={5} >
                        <Box style={{
                            display: 'flex', width: '100%',
                            flexDirection: 'column',
                            height: 300, alignItems: 'center', justifyContent: 'center'
                        }}>
                            <CardMedia
                                style={{
                                    height: 100, width: 100, objectFit: 'cover',
                                    marginBottom: 20, border: '2px solid #fff', borderRadius: 10
                                }}
                                component="img"
                                image={viewOne.profile_photo}
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                <StarRatings
                                    rating={viewOne.c_rating}
                                    starRatedColor="#26CE8D"
                                    // changeRating={changeRating}
                                    numberOfStars={5}
                                    starDimension="25px"
                                    starSpacing="0px"
                                    isSelectable="false"
                                    starHoverColor="#26CE8D"
                                    starEmptyColor="#696969"
                                />

                            </Box>
                            <Typography style={{ color: '#D1D4C9', fontSize: 12 }} component="div">
                                <span style={{ fontSize: 18 }}>{viewOne.c_rating}</span> Overall Rating
                                <span style={{ fontSize: 18, marginLeft: 10 }}>{viewOne.c_reviews}</span> Reviews
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={7}>
                        <Box style={{
                            display: 'flex', width: '100%',
                            flexDirection: 'column',
                            height: 300, paddingTop: 20
                        }}>
                            {/* name and section */}
                            <Typography style={{ color: '#D1D4C9', fontSize: 12, paddingLeft: 16 }} component="div">
                                <span style={{ fontSize: 14, marginRight: 10 }}>{viewOne.name}</span> {viewOne.section}
                            </Typography>

                            {/* table info*/}
                            <TableContainer>
                                <Table sx={{ minWidth: '100%' }} size="small" aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Gender:
                                            </TableCell>
                                            <TableCell align="right" style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.gender}</TableCell>
                                            <TableCell align="right" style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Teamwork</TableCell>
                                            <TableCell align="right" style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#26CE8D', padding: 5,
                                                    borderRadius: 8, color: '#fff'
                                                }}>
                                                    3.0
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Birthday:
                                            </TableCell>
                                            <TableCell align="right" style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.birthday}</TableCell>
                                            <TableCell align="right" style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Creativity</TableCell>
                                            <TableCell align="right" style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#26CE8D', padding: 5,
                                                    borderRadius: 8, color: '#fff'
                                                }}>
                                                    3.0
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Address:
                                            </TableCell>
                                            <TableCell align="right" style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.address}</TableCell>
                                            <TableCell align="right" style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Adaptability</TableCell>
                                            <TableCell align="right" style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#26CE8D', padding: 5,
                                                    borderRadius: 8, color: '#fff'
                                                }}>
                                                    3.0
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Nickname:
                                            </TableCell>
                                            <TableCell align="right" style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.nickname}</TableCell>
                                            <TableCell align="right" style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Leadership</TableCell>
                                            <TableCell align="right" style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#26CE8D', padding: 5,
                                                    borderRadius: 8, color: '#fff'
                                                }}>
                                                    3.0
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Skills Language:
                                            </TableCell>
                                            <TableCell align="right" style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.skills}</TableCell>
                                            <TableCell align="right" style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Persuasion</TableCell>
                                            <TableCell align="right" style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#26CE8D', padding: 5,
                                                    borderRadius: 8, color: '#fff'
                                                }}>
                                                    3.0
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Box sx={{
                                display: 'grid',
                                gap: 1.3,
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                marginLeft: 2,
                                marginTop: 1,
                                width: '65%'
                            }}>

                                {/* SOCIAL GITHUB  */}
                                {viewOne.social_github === "" ? (
                                    <Typography style={{ fontSize: 14, color: '#62666D' }}>
                                        Github
                                    </Typography>
                                ) : (
                                    <Typography style={{ fontSize: 14 }}>
                                        <a target="_blank" rel="noreferrer" href={viewOne.social_github} style={{ color: '#26CE8D', textDecoration: 'none' }}
                                        >Github</a>
                                    </Typography>
                                )}

                                {/* SOCIAL FACEBOOK  */}
                                {viewOne.social_facebook === "" ? (
                                    <Typography style={{ fontSize: 14, color: '#62666D' }}>
                                        Facebook
                                    </Typography>
                                ) : (
                                    <Typography style={{ fontSize: 14 }}>
                                        <a target="_blank" rel="noreferrer" href={viewOne.social_facebook} style={{ color: '#26CE8D', textDecoration: 'none' }}
                                        >Facebook</a>
                                    </Typography>
                                )}

                                {/* SOCIAL LINKEDIN  */}
                                {viewOne.social_linkedIn === "" ? (
                                    <Typography style={{ fontSize: 14, color: '#62666D' }}>
                                        LinkedIn
                                    </Typography>
                                ) : (
                                    <Typography style={{ fontSize: 14 }}>
                                        <a target="_blank" rel="noreferrer" href={viewOne.social_linkedIn} style={{ color: '#26CE8D', textDecoration: 'none' }}
                                        >LinkedIn</a>
                                    </Typography>
                                )}

                                {/* SOCIAL TWITTER  */}
                                {viewOne.social_twitter === "" ? (
                                    <Typography style={{ fontSize: 14, color: '#62666D' }}>
                                        Twitter
                                    </Typography>
                                ) : (
                                    <Typography style={{ fontSize: 14 }}>
                                        <a target="_blank" rel="noreferrer" href={viewOne.social_twitter} style={{ color: '#26CE8D', textDecoration: 'none' }}
                                        >Twitter</a>
                                    </Typography>
                                )}

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        )
    }

    return (
        <>
            {loading ? (<div></div>) : <Profiles />}
        </>
    );
}
