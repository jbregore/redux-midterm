import * as React from 'react';
import { Typography, Box } from '@mui/material';
import {
    Twitter as TwitterIcon,
    Facebook as FacebookIcon,
    HelpOutlineOutlined as HelpOutlineOutlinedIcon
} from '@mui/icons-material';

export default function Footer() {
    return (
        <Box style={{ textAlign: 'center', paddingTop: 30, }}>

            <Box style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center',
                margin: 'auto', width: 100,
            }}>
                <TwitterIcon style={{
                    color: '#00FF9D', width: 25, height: 25,
                }} />
                <span className="material-icons blue-color" style={{
                    color: '#00FF9D', width: 25, height: 25,
                }}> discord</span>
                <FacebookIcon style={{
                    color: '#00FF9D', width: 25, height: 25,
                }} />
            </Box>
            <Typography style={{ fontSize: 14, color: '#7C7E83', marginTop: 8 }}>
                Contact us <span style={{ color: '#22B77E', textDecoration: 'underline' }}>support@studentreview.com</span>
            </Typography>
            <Typography style={{ fontSize: 14, color: '#7C7E83', marginTop: 8 }}>
                &#9400; 2021 Student Review. All Rights Reserved
            </Typography>
            <Typography style={{ fontSize: 14, color: '#22B77E', marginTop: 8 }}>
                Terms of Service | Privacy Policy
            </Typography>

            <Box style={{
                position: 'fixed', bottom: 40, right: 40, cursor: 'pointer',
                // float: 'right', marginTop: -20, marginRight: 40,
                width: 80, height: 30, backgroundColor: '#22B77E', borderRadius: 30,
                display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
            }}>
                <HelpOutlineOutlinedIcon style={{ fontSize: 18, color: '#fff', marginRight: 3 }} />
                <Typography style={{ fontSize: 14, color: '#fff', }}>
                    Help
                </Typography>
            </Box>


        </Box>
    );
}