import React, { useState, useEffect } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

//STAR RATING
import StarRatings from 'react-star-ratings';

//SELECTOR
import { useSelector } from "react-redux";

//ROUTING
import { useHistory } from "react-router-dom";

//DISPATCHER AND ACTION
import { useDispatch } from "react-redux";
import { setViewStudent, setTopStudent } from "../redux/actions/studentAction";

export default function TopStudentCard() {

    const student = useSelector((state) => state.student);
    const [topStudents, setTopStudents] = useState([]);

    //DISPATCHER
    const dispatch = useDispatch();

    //NAVIGATION
    const history = useHistory();

    useEffect(() => {
        if(student.topStudent === undefined){
            dispatch(setTopStudent());
        }else{
            setTopStudents(student.topStudent)
        }
    }, [student.topStudent])

    const navigatePage = (id) => {
        dispatch(setViewStudent(id));
        setTimeout(() => {
            // history.push('/studentevaluation');
            history.push({pathname:"/studentevaluation",state: {id: id}});
        }, 1000)
    }


    // useEffect(()=>{
    //     console.log(student.topStudent)
    // }, [student.topStudent])

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

    //                 db.collection("collection_reviews")
    //                     .where("student_id", "==", c.id)
    //                     .get()
    //                     .then((querySnapshot) => {
    //                         let counter = 0;
    //                         let rating = 0;
    //                         querySnapshot.forEach((doc) => {
    //                             rating += doc.data().rate_total;
    //                             // doc.data() is never undefined for query doc snapshots
    //                             // console.log(doc.id, " => ", doc.data());
    //                             counter += 1;
    //                         });
    //                         let c_rating = (Number(rating) / Number(counter));
    //                         datas.push({ ...c.data(), id: c.id, c_reviews: counter, c_rating: c_rating || 0 });
    //                     })
    //             });

    //             setTimeout(() => {
    //                 myData = datas.sort((a, b) => a.c_rating > b.c_rating ? -1 : 1);
    //                 setStudentList(myData.slice(0, 4));
    //                 // console.log(myData.slice(0,4));
    //                 // console.log(studentList)
    //             }, 500)
    //             // setTimeout(() => {
    //             //     setStudentList(datas);
    //             //     // console.log(datas)
    //             //     // console.log(studentList)


    //             // }, 500)

    //         });
    //     };
    //     fetchData();
    // }, []);

    return (
        <>
            {topStudents.map((row) => (
                <Card key={row.name} sx={{
                    display: 'flex', width: 210, height: 120,
                    backgroundColor: '#1E1F20', border: '1px solid #303336',
                    boxSizing: 'border-box',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.4)',
                    borderRadius: 2, cursor: 'pointer',
                    '&:hover': {
                        background: "#292929",
                    }
                }} onClick={() => navigatePage(row.id)}>
                    <CardMedia
                        component="img"
                        sx={{ width: '35%' }}
                        image={row.profile_photo}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" style={{ fontSize: 12, color: '#D1D4C9' }}>
                                {row.name}
                            </Typography>
                            <Typography style={{ color: '#7C7E83', fontSize: 12 }} component="div">
                                {row.c_reviews} reviews
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
                            {/* <Box sx={{
                                    display: 'grid',
                                    gap: .1,
                                    gridTemplateColumns: 'repeat(5, 1fr)',
                                }}>
                                    <StarIcon style={{ color: '#26CE8D', width: 18, height: 18 }} />
                                    <StarIcon style={{ color: '#26CE8D', width: 18, height: 18 }} />
                                    <StarIcon style={{ color: '#26CE8D', width: 18, height: 18 }} />
                                    <StarIcon style={{ color: '#26CE8D', width: 18, height: 18 }} />
                                    <StarIcon style={{ color: '#26CE8D', width: 18, height: 18 }} />
                                </Box> */}
                            <StarRatings
                                rating={row.c_rating}
                                starRatedColor="#26CE8D"
                                // changeRating={changeRating}
                                numberOfStars={5}
                                starDimension="18px"
                                starSpacing="0px"
                                isSelectable="false"
                                starHoverColor="#26CE8D"
                                starEmptyColor="#696969"
                            />
                        </Box>
                    </Box>

                </Card>
            ))}

        </>
    );
}
