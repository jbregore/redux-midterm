import * as actionTypes from "../types";
import firebase from "../../utils/firebase/firebase";


const db = firebase.firestore();

export const setList = () => async (dispatch) => {
    let datas = [];
    let myData = [];
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
            // setStudentList(myData);
            // dispatch(getList(studentList));
            // console.log(studentList)
            // setLoading(false)
            // console.log("gago")
        }, 500)

    });

    setTimeout(() => {
        try {
            dispatch({
                type: actionTypes.SET_LIST,
                payload: myData
            })
        } catch (err) {
            dispatch({
                type: actionTypes.ON_ERROR,
                payload: err
            })
        }
    }, 700)

};

export const setTopStudent = () => async (dispatch) => {
    let datas = [];
    let myData = [];
    db.collection("collection_users").onSnapshot((doc) => {
        doc.forEach((c) => {

            db.collection("collection_reviews")
                .where("student_id", "==", c.id)
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
            myData = datas.sort((a, b) => a.c_rating > b.c_rating ? -1 : 1);
        }, 500)
    });

    setTimeout(() => {
        console.log(myData)
        try {
            dispatch({
                type: actionTypes.SET_TOPSTUDENT,
                payload: myData.slice(0, 4)
            })
        } catch (err) {
            dispatch({
                type: actionTypes.ON_ERROR,
                payload: err
            })
        }
    }, 700);

};

// export const getList = (studentList) => async (dispatch) => {
//     try {
//         await dispatch({
//             type: actionTypes.GET_LIST,
//             payload: studentList
//         })
//     } catch (err) {
//         await dispatch({
//             type: actionTypes.ON_ERROR,
//             payload: err
//         })
//     }
// };

export const goSearch = (search, sortBy, filterBy) => async (dispatch) => {
    let studentList = [];
    const db = firebase.firestore();

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
                //TRIGGER WARNING BULOK CODE USING REDUX-SEARCH AHEAD
                //MANO MANO YAN GAWAIN NG MALALAKAS UMABSENT

                myData = datas.sort((a, b) => a.name > b.name ? 1 : -1);
                if (search === "") {
                    //NAME
                    if (sortBy === "ASC" && filterBy === "NAME") {
                        //FILTER BY NAME ASC
                        myData = datas.sort((a, b) => a.name > b.name ? 1 : -1);
                    } else if (sortBy === "DESC" && filterBy === "NAME") {
                        //FILTER BY NAME DESC
                        myData = datas.sort((a, b) => a.name > b.name ? -1 : 1);
                    }

                    //SECTION
                    if (sortBy === "ASC" && filterBy === "SECTION") {
                        //FILTER BY SECTION ASC
                        myData = datas.sort((a, b) => a.section > b.section ? 1 : -1);
                    } else if (sortBy === "DESC" && filterBy === "SECTION") {
                        //FILTER BY SECTION DESC
                        myData = datas.sort((a, b) => a.section > b.section ? -1 : 1);
                    }

                    //REVIEWS
                    if (sortBy === "ASC" && filterBy === "REVIEWS") {
                        //FILTER BY SECTION ASC
                        myData = datas.sort((a, b) => a.c_reviews > b.c_reviews ? -1 : 1);
                    } else if (sortBy === "DESC" && filterBy === "REVIEWS") {
                        //FILTER BY SECTION DESC
                        myData = datas.sort((a, b) => a.c_reviews > b.c_reviews ? 1 : -1);
                    }

                    //RATING
                    if (sortBy === "ASC" && filterBy === "RATING") {
                        //FILTER BY SECTION ASC
                        myData = datas.sort((a, b) => a.c_rating > b.c_rating ? -1 : 1);
                    } else if (sortBy === "DESC" && filterBy === "RATING") {
                        //FILTER BY SECTION DESC
                        myData = datas.sort((a, b) => a.c_rating > b.c_rating ? 1 : -1);
                    }

                    studentList = myData;
                } else {
                    let newData = [];
                    for (let row of myData) {
                        if (search === "") {
                        } else if (row.name.toLowerCase().includes(search)) {
                            newData.push({ ...row })
                        }
                    }
                    setTimeout(() => {
                        studentList = newData;
                    }, 200)
                }

                // console.log(result)

                // const items = myData.filter((data)=>{
                //     if(search == null){

                //     }
                //     else if(data.name.toLowerCase().includes(search.toLowerCase()) ||
                //      data.name.toLowerCase().includes(search.toLowerCase())){
                //         console.log("tae")
                //         return data;
                //     }
                // });

                // setTimeout(()=> {
                //     console.log(items)
                // }, 1000)


                // studentList = myData;
                // dispatch(getList(studentList));
                // console.log(studentList)
                // console.log("tangina")
            }, 500)

        });
    };
    fetchData();

    setTimeout(() => {
        try {
            dispatch({
                type: actionTypes.SET_GOSEARCH,
                payload: studentList
            })
        } catch (err) {
            dispatch({
                type: actionTypes.ON_ERROR,
                payload: err
            })
        }
    }, 1000)

};

export const setViewStudent = (id) => async (dispatch) => {
    console.log(id)
    let singleData = {
        name: "",
        section: "",
        gender: "",
        birthday: "",
        address: "",
        nickname: "",
        skills: "",
        profile_photo: "",
        c_reviews: "",
        c_rating: 0,
        social_github: "",
        social_facebook: "",
        social_linkedIn: "",
        social_twitter: "",

    };
    let datas = [];
    const db = firebase.firestore();
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
                for (let row of datas) {
                    if (id === "") {

                    } else if (row.id === id) {
                        singleData.name = row.name;
                        singleData.gender = row.gender;
                        singleData.birthday = row.birthday;
                        singleData.address = row.address;
                        singleData.nickname = row.nickname;
                        singleData.skills = row.skills;

                        singleData.profile_photo = row.profile_photo;
                        singleData.section = row.section;
                        singleData.c_reviews = row.c_reviews;
                        singleData.c_rating = row.c_rating;

                        singleData.social_github = row.social_github;
                        singleData.social_facebook = row.social_facebook;
                        singleData.social_linkedIn = row.social_linkedIn;
                        singleData.social_twitter = row.social_twitter;

                        break;
                    }
                }
            }, 500)

        });
    };
    fetchData();

    setTimeout(() => {
        try {
            dispatch({
                type: actionTypes.VIEW_ONE_STUDENT,
                payload: singleData
            })
        } catch (err) {
            dispatch({
                type: actionTypes.ON_ERROR,
                payload: err
            })
        }
    }, 1000)


};