// import React, { useState, useEffect } from 'react';

// //FIREBASE
// import firebase from "../utils/firebase/firebase";

// //DISPATCHER AND ACTION
// import { useDispatch } from "react-redux";
// // import { getTopStudent } from "../redux/actions/studentAction";

// export default function GetTopStudent() {
//     //DISPATCHER
//     const dispatch = useDispatch();

//     const db = firebase.firestore();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         let datas = [];
//         let myData = [];
//         const fetchData = () => {
//             db.collection("collection_users").onSnapshot((doc) => {
//                 doc.forEach((c) => {

//                     db.collection("collection_reviews")
//                         .where("student_id", "==", c.id)
//                         .get()
//                         .then((querySnapshot) => {
//                             let counter = 0;
//                             let rating = 0;
//                             querySnapshot.forEach((doc) => {
//                                 rating += doc.data().rate_total;
//                                 counter += 1;
//                             });
//                             let c_rating = (Number(rating) / Number(counter));
//                             datas.push({ ...c.data(), id: c.id, c_reviews: counter, c_rating: c_rating || 0 });
//                         })
//                 });

//                 setTimeout(() => {
//                     myData = datas.sort((a, b) => a.c_rating > b.c_rating ? -1 : 1);
//                     // setStudentList();
//                     setTimeout(() => {
//                         dispatch(getTopStudent(myData.slice(0, 4)));
//                         // console.log(myData.slice(0, 4))
//                         // console.log("putangina ")
//                         setLoading(false)
//                     }, 100)
//                 }, 500)
//             });
//         };
//         fetchData();
//     }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

//     return (
//         <div>

//         </div>
//     )
// }
