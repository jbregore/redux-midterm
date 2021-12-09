import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  Star as StarIcon
} from '@mui/icons-material';

import StudentProfile from "../components/StudentProfile";
import FilterArea from "../components/FilterArea";
import CommentCard from "../components/CommentCard";
import StudentTablePagination from "../components/StudentTablePagination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RateCard from "../components/RateCard";

import { useDispatch } from "react-redux";
import { setViewStudent } from "../redux/actions/studentAction";


export default function StudentEvaluation(props) {
  //DISPATCHER
  const dispatch = useDispatch();

  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);

  console.log(id)
  if(id === ""){
    alert("gago ka")
  }

  useEffect(() => {
    setTimeout(() => {
      
      dispatch(setViewStudent(id));
      setLoading(false);
    }, 400)
  }, [loading])


  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#131414', width: '100%' }} >
      <Navbar />

      <br /><br /><br />

      {/* body */}
      <Box style={{ width: '70%', margin: 'auto', marginBottom: 120 }}>

        <Box>
          <StudentProfile id={id} />
        </Box>

        <Box style={{
          marginTop: 40, display: 'flex',
          alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
        }}>
          <Typography style={{ color: '#D1D4C9', fontSize: 20, marginBottom: 5 }}>
            Add your Rating
          </Typography>
          <Box sx={{
            display: 'grid',
            gap: .1,
            gridTemplateColumns: 'repeat(5, 1fr)',
            cursor: 'pointer'
          }}>
            <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
            <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
            <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
            <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
            <StarIcon style={{ color: '#2C2F31', width: 35, height: 35 }} />
          </Box>

          <RateCard />

        </Box>

        {/* filter component  */}
        <Box style={{ marginTop: 20, marginRight: -20 }}>
          <FilterArea />
        </Box>

        <Box style={{ marginTop: 100 }}>
          <CommentCard />
          <Box style={{ textAlign: 'center', width: 300, margin: 'auto' }}>
            <StudentTablePagination />
          </Box>
        </Box>

      </Box>


      <Box style={{
        width: '100%', height: 180, backgroundColor: '#131414',
        borderTop: '1px solid #515456'
      }}>
        <Footer />
      </Box>

    </Box>
  );
}
