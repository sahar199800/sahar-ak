import React from 'react';
import "../style/FirstSection.css";
import { Grid, Typography } from "@mui/material";


const FirstSection = () => {
    return (
        
            <Grid>
                <Grid style={{display:'flex', width:'100%', flexWrap:'wrap', paddingTop:100}}>
                    <Grid style={{display:'flex', justifyContent:'center', width:'100%'}}>
                        <Typography component={"h1"} variant="h1" style={{ color: 'white' }}>
                            Developer
                        </Typography>
                    </Grid>
                    <Grid style={{display:'flex', justifyContent:'center', width:'100%', paddingTop:50}}>
                        <Typography component={"p"} variant="p" style={{ color: '#C69749', fontFamily:'Holiday', fontSize:'1.5rem' }}>
                            I've been started codding since 2020
                        </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    
                </Grid>
            </Grid>
        
    );
};

export default FirstSection;