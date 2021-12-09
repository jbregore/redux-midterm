import React, { useState, useEffect } from 'react';

import firebase from '../utils/firebase/firebase';

//DISPATCHER AND ACTION
import { useDispatch } from "react-redux";
import { getList } from "../redux/actions/studentAction";

export default function GetStudentList() {
    //DISPATCHER
    const dispatch = useDispatch();

    const db = firebase.firestore();
    const [studentList, setStudentList] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        let datas = [];
        let myData = [];
        const fetchData = () => {
            db.collection("collection_users").onSnapshot((doc) => {
                doc.forEach((c) => {
                    db.collection("collection_reviews").where("student_id", "==", c.id)
                        .get()
                        .then((querySnapshot) => {
                            let counter = 0;
                            let rating = 0;
                            querySnapshot.forEach((doc) => {
                                rating += doc.data().rate_total;
                                counter += 1;
                            });
                            let c_rating = (Number(rating) / Number(counter));
                            datas.push({ ...c.data(), id: c.id, c_reviews: counter, c_rating: c_rating || 0 });
                        })
                });

                setTimeout(() => {
                    myData = datas.sort((a, b) => a.name > b.name ? 1 : -1);
                    setStudentList(myData);
                    // dispatch(getList(studentList));
                    // console.log(studentList)
                    setLoading(false)
                    // console.log("gago")
                }, 500)

            });
        };
        fetchData();
    }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps


    // const submit = () => {
    //     let datas = [];
    //     const fetchData = () => {
    //         db.collection("collection_users").onSnapshot((doc) => {
    //             doc.forEach((c) => {

    //                 db.collection("collection_reviews").where("student_id", "==", c.id)
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
    //                 setStudentList(datas);
    //                 dispatch(getList(studentList));
    //                 // console.log(datas)
    //             }, 1500)

    //         });
    //     };
    //     fetchData();
    // }

    return (
        <div>
            {/* <button onClick={submit}>gago</button> */}
        </div>
    )
}

