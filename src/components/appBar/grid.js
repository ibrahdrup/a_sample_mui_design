import {Grid, useMediaQuery} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

const MyGrid = ({description,heading,Footer,image,imgStart,classname,xs,doubleText}) =>{
    const matches = useMediaQuery('(min-width:600px)')
    let setDoubleText=false
    if(doubleText){
        setDoubleText=true
    }
    console.log(matches)
    const xsVal = (matches)=>{
        if(matches){
            return 6
        }else if(!matches) {
            return 12
        }
        return xs
    }
    const setImgStart = (imgStart) =>{
        if(matches){
            return imgStart
        }
    }
    if(setImgStart(imgStart)){
        if(setImgStart(imgStart)&&setDoubleText){
            if(matches){

            }
            return(
                <Grid container  className={classname}  >
                    <Grid item xs={xsVal(matches)} >
                        <Box sx={{
                            display:'flex',
                            justifyContent:'center',
                            flexDirection:'column',
                            gap:2,
                            // maxHeight:'100vh',
                            p:'20%',
                            mt:'20%'

                        }}>
                            <Typography variant={'h4'}>
                                {heading}
                            </Typography>
                            <Typography variant={'p'}>
                                {description}
                            </Typography>
                            <Typography variant={'h6'} textTransform='uppercase'>
                                {Footer}
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={xsVal(matches)}>
                        <Box sx={{
                            display:'flex',
                            justifyContent:'center',
                            flexDirection:'column',
                            gap:2,
                            // maxHeight:'100vh',
                            p:'20%',
                            mt:'20%'

                        }}>
                            <Typography variant={'h4'}>
                                {heading}
                            </Typography>
                            <Typography variant={'p'}>
                                {description}
                            </Typography>
                            <Typography variant={'h6'} textTransform='uppercase'>
                                {Footer}
                            </Typography>
                        </Box>

                    </Grid>
                </Grid >
            )
        }
        return(
            <Grid container  className={classname}  >

                <Grid item xs={xsVal(matches)} >
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        flexDirection:'column',
                        gap:2,
                        // maxHeight:'100vh',
                        p:'20%'
                        // mt:'20%'

                    }}>
                        <Typography variant={'h4'}>
                            {heading}
                        </Typography>
                        <Typography variant={'p'}>
                            {description}
                        </Typography>
                        <Typography variant={'h6'} textTransform='uppercase'>
                            {Footer}
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={xsVal(matches)}>
                    <Box >
                        {image}
                    </Box>

                </Grid>
            </Grid >
        )
    }else{
        if(matches)
        {
            return(
                <Grid container spacing={0} className={classname}     >
                    <Grid item xs={xsVal(matches)}>
                        <Box>
                            {image}
                            {/*<img src = {image} width={'100%'} />*/}
                        </Box>

                    </Grid>
                    <Grid item xs={xsVal(matches)} >
                        <Box sx={{
                            display:'flex',
                            justifyContent:'center',
                            flexDirection:'column',
                            gap:2,
                            // height:'100%'
                            p:'20%',
                            // mt:'20%'
                            // maxHeight:'100vh',

                        }}>
                            <Typography variant={'h4'}>
                                {heading}
                            </Typography>
                            <Typography variant={'p'}>
                                {description}
                            </Typography>
                            <Typography variant={'h6'} textTransform='uppercase'>
                                {Footer}
                            </Typography>
                        </Box>

                    </Grid>

                </Grid >
            )
        }
        return(
            <Grid container spacing={0} className={classname}   >
                <Grid item xs={xsVal(matches)}>
                    <Box>
                        {image}
                        {/*<img src = {image} width={'100%'} />*/}
                    </Box>

                </Grid>
                <Grid item xs={xsVal(matches)} >
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        flexDirection:'column',
                        gap:2,
                        // height:'100%'
                        p:'20%',
                        mt:'20%'
                        // maxHeight:'100vh',

                    }}>
                        <Typography variant={'h4'}>
                            {heading}
                        </Typography>
                        <Typography variant={'p'}>
                            {description}
                        </Typography>
                        <Typography variant={'h6'} textTransform='uppercase'>
                            {Footer}
                        </Typography>
                    </Box>

                </Grid>

            </Grid >
        )
    }

}

export default MyGrid