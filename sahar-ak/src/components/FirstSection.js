import React from 'react';
import "../style/FirstSection.css";
import { Grid, Typography } from "@mui/material";
import Me from "../img/me.jpg";


const FirstSection = () => {
    return (

        <Grid>
            <Grid style={{ display: 'flex', width: '100%', flexWrap: 'wrap', paddingTop: 100 }}>
                <Grid style={{ display: 'flex', justifyContent: 'center', width: '100%', alignContent:'center', alignSelf:'center' }}>
                    <Typography component={"p"} variant="p">
                        <span style={{ color: '#434242', fontSize:'6rem', fontWeight:600 }}>
                            &lt;
                        </span>
                        <span style={{fontSize:'5rem'}} className='slashStyle'>
                        /
                        </span>
                        
                        <span style={{fontSize: '5rem',color: 'white' }}>
                            Developer
                        </span>
                        <span style={{ color: '#434242', fontSize:'6rem', fontWeight:600 }}>
                            &gt;
                        </span>
                    </Typography>
                </Grid>
                <Grid style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingTop: 50 }}>
                    <Typography component={"p"} variant="p" style={{ color: '#C69749', fontFamily: 'Holiday', fontSize: '1.5rem' }}>
                       // I've been started codding since 2020. //
                    </Typography>
                </Grid>
            </Grid>
            <Grid>
                <Typography component={"h1"} variant="h1" style={{ color: 'white' }} id='name' className='aos-init aos-animate'>
                    Sahar
                    <Typography component={"h1"} variant="h1" className='disb'>
                        Akhzari
                    </Typography>
                </Typography>
                <Grid>
                    <Typography component={"img"} src={Me} style={{ width: 50, height: 50 }}>

                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default FirstSection;