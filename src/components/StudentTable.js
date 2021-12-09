import React, { useState, useEffect } from 'react';
import {
    styled,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    CardMedia,
    Typography,
    Box
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom";

//DISPATCHER AND ACTION
import { useDispatch } from "react-redux";
import { setViewStudent, setList } from "../redux/actions/studentAction";

//STAR RATING
import StarRatings from 'react-star-ratings';

//SELECTOR
import { useSelector } from "react-redux";

//ROUTING
import { useHistory } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#131414',
        color: '#62666D',
        border: 'none',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        color: '#62666D',
        border: 'none',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    backgroundColor: '#1E1F20',
    height: 18,
    borderRadius: 15,
    marginTop: 100,
    '&:hover': {
        background: "#292929",
    }
    // hide last border
    // '&:last-child td, &:last-child th': {
    //     border: 0,
    // },
}));


export default function StudentTable() {
    //SELECTOR
    const student = useSelector((state) => state.student);
    const [loading, setLoading] = useState(true);

    //DISPATCHER
    const dispatch = useDispatch();

    //NAVIGATION
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            dispatch(setList());
            setLoading(false);
        }, 400)
        // console.log(student.studentList)
    }, [loading])

    // useEffect(() => {
    //     dispatch(getList());
    //     setStudentList(student.studentList)
    // }, [student.studentList])
    // console.log(student.studentList)


    // ere ******************
    // const db = firebase.firestore();
    // const [studentList, setStudentList] = useState([]);
    // useEffect(() => {
    //     let datas = [];
    //     let myData = [];
    //     const fetchData = () => {
    //         db.collection("collection_users").onSnapshot((doc) => {
    //             doc.forEach((c) => {
    //                 // console.log(c.id)
    //                 // console.log(c.data());
    //                 // datas.push({ ...c.data(), id: c.id });

    //                 db.collection("collection_reviews").where("student_id", "==", c.id)
    //                     .get()
    //                     .then((querySnapshot) => {
    //                         let counter = 0;
    //                         let rating = 0;
    //                         querySnapshot.forEach((doc) => {
    //                             rating += doc.data().rate_total;
    //                             // doc.data() is never undefined for query doc snapshots
    //                             console.log(doc.id, " => ", doc.data());
    //                             counter += 1;
    //                         });
    //                         let c_rating = (Number(rating) / Number(counter));
    //                         datas.push({ ...c.data(), id: c.id, c_reviews: counter, c_rating: c_rating || 0 });
    //                     })
    //             });

    //             setTimeout(() => {
    //                 // setStudentList(datas);
    //                 myData = datas.sort((a, b) => a.c_reviews > b.c_reviews ? 1 : -1);
    //                 setStudentList(myData);
    //                 // console.log(datas)
    //             }, 500)

    //         });
    //     };
    //     fetchData();
    // }, []);

    //HANDLE CHANGE RATING
    // const [rating, setRating] = useState(3);
    // const changeRating = (newRating) => {
    //     setRating(newRating)
    // }

    const navigatePage = (id) => {
        dispatch(setViewStudent(id));
        setTimeout(() => {
            // history.push('/studentevaluation');
            // history.push({pathname:"/studentevaluation",state: {id: id}});
        }, 1000)
    }

    return (
        <TableContainer style={{
            marginTop: -50,
            width: '100%',

        }}>
            <Table sx={{
                minWidth: 700,
            }} style={{
                borderCollapse: 'separate',
                borderSpacing: '0 .7em',
            }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left" style={{ width: 270 }}>Name</StyledTableCell>
                        <StyledTableCell align="center">Year & Section</StyledTableCell>
                        <StyledTableCell align="center">Reviews</StyledTableCell>
                        <StyledTableCell align="center" style={{ width: 120 }}>Rating</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ width: '100%', }}>
                    {student.studentList.map((row) => (
                        <StyledTableRow id={row.id} key={row.name} style={{ cursor: 'pointer' }} onClick={() => navigatePage(row.id)}>
                            <StyledTableCell align="left" style={{
                                borderTopLeftRadius: 15, borderBottomLeftRadius: 15,
                                border: '1px solid #303336', borderRight: 'none',
                            }} >
                                <Box style={{
                                    display: 'flex', flexDirection: 'row',
                                    justifyContent: 'flex-start', alignItems: 'center',
                                }}>
                                    <Box style={{ width: 45, marginRight: 20 }}>
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: 45, height: 45,
                                                border: "3px solid #646566",
                                                // border: "3px solid #646566",
                                                borderRadius: 15
                                            }}
                                            image={row.profile_photo}
                                        />
                                    </Box>
                                    <Typography style={{ fontSize: 14, color: "#D1D4C9" }}>
                                        <Link to={`studentevaluation/${row.id}`}>{row.name}</Link>
                                    </Typography>
                                </Box>

                            </StyledTableCell>
                            <StyledTableCell align="center" style={{
                                border: '1px solid #303336',
                                borderLeft: 'none', borderRight: 'none', fontSize: 14
                            }}>{row.section}</StyledTableCell>
                            <StyledTableCell align="center" style={{
                                border: '1px solid #303336',
                                borderLeft: 'none', borderRight: 'none', fontSize: 14,
                                color: "#D1D4C9"
                            }}>{row.c_reviews}</StyledTableCell>
                            <StyledTableCell align="center" style={{
                                borderTopRightRadius: 15, borderBottomRightRadius: 15,
                                border: '1px solid #303336', borderLeft: 'none', fontSize: 14,
                            }}>
                                <StarRatings
                                    rating={row.c_rating}
                                    starRatedColor="#26CE8D"
                                    // changeRating={changeRating}
                                    numberOfStars={5}
                                    starDimension="20px"
                                    starSpacing="0px"
                                    isSelectable="false"
                                    starHoverColor="#26CE8D"
                                    starEmptyColor="#696969"
                                />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
