import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud'
import WavesIcon from '@mui/icons-material/Waves'
import Box from '@mui/material/Box'
import Axios from 'axios';
//import { styled } from "@mui/material/styles";
import { Gauge } from "../gauge";
import {
    Typography,
    Card,
    CardContent
  } from "@mui/material";
  import Stack from "@mui/material/Stack";
  import { useState, useEffect } from 'react'

  interface ILogData{
    id:number,
    location: string,
    point: string,
    pointX: number,
    pointY: number,
    red: number,
    green: number,
    blue: number,
    mm: number ,
    mA: number,
    wl: number,
    created: string
  }

 export const SubChart = (props:{loc:string, point:string, changeThresholdSubChart:any}) => {
  const [logData, setLogData]= useState<ILogData>()
  // const [oneLogData, setOneLogData]= useState<ILogData>({
  //   id:0,
  //   location: '',
  //   point: '',
  //   pointX: 0,
  //   pointY: 0,
  //   red: 0,
  //   green: 0,
  //   blue: 0,
  //   mm: 0,
  //   mA: 0,
  //   wl: 0,
  //   created: ''
  // })

  let l_mm=0
  // let l_mA=0
  let l_wl=0
  let l_mm_threshold=0
  let l_wl_threshold=0
   let l_risk_threshold=0
   let l_desc=''
   let l_range=''

  //get the latest datalog based on location and point
  useEffect(()=>{
    Axios.get(`https://api.saakajohor.com/datalog/location/${props.loc}/point/${props.point}`).then((response) => {
   // Axios.get(`http://localhost:3001/datalog/location/${props.loc}/point/${props.point}`).then((response) => {
    //console.log(`http://localhost:3001/datalog/location/${props.loc}/point/${props.point}`)
    console.log("API Response:", response.data[0][0])
    setLogData(JSON.parse(JSON.stringify(response.data[0][0])))
        
        // return response.data
    })
   // .then((response)=>console.log("API : ",logData));
  },[]);

  if(logData){
   const l_data:ILogData= JSON.parse(JSON.stringify(logData))
    l_mm = GetMM(logData.red, logData.green, logData.blue) //rain rate
    if (props.loc==="Gunung Pulai"){
      l_wl = 0.4*Math.exp(0.0313*l_mm)
    }else if (props.loc==="Gunung Berlumut"){
      l_wl = 0.3042*Math.exp(0.0356)*l_mm // water level
    }
    

    let L1_min_mm=0
    let L2_min_mm=0
    let L2_max_mm=0
    let L3_min_mm=0
    let L3_max_mm=0
    let L4_min_mm=0
    let L4_max_mm=0
    let L5_max_mm=0

    let L1_min_wl=0
    let L2_min_wl=0
    let L2_max_wl=0
    let L3_min_wl=0
    let L3_max_wl=0
    let L4_min_wl=0
    let L4_max_wl=0
    let L5_max_wl=0

    if (props.loc==="Gunung Pulai"){
      //rain rate
      L1_min_mm=16.2
      L2_min_mm= L1_min_mm
      L2_max_mm=26.5
      L3_min_mm=L2_max_mm
      L3_max_mm=33.2
      L4_min_mm=L3_max_mm
      L4_max_mm=41.1
      L5_max_mm=L4_max_mm

      //water level
      L1_min_wl=1.0
      L2_min_wl=L1_min_mm
      L2_max_wl=1.53
      L3_min_wl=L2_max_mm
      L3_max_wl=1.92
      L4_min_wl=L3_max_mm
      L4_max_wl=2.37
      L5_max_wl=L4_max_mm
    }else if (props.loc==="Gunung Berlumut"){
      //water level
      L1_min_mm=11.4
      L2_min_mm= L1_min_mm
      L2_max_mm=35.1
      L3_min_mm=L2_max_mm
      L3_max_mm=39.8
      L4_min_mm=L3_max_mm
      L4_max_mm=43.9
      L5_max_mm=L4_max_mm

      //rain rate
      L1_min_wl=0.46
      L2_min_wl=L1_min_mm
      L2_max_wl=1.10
      L3_min_wl=L2_max_mm
      L3_max_wl=1.46
      L4_min_wl=L3_max_mm
      L4_max_wl=1.8
      L5_max_wl=L4_max_mm
    }


    if (l_mm<=L1_min_mm){
      l_mm_threshold=1
      l_desc="Low"
      l_range="<80%"
    } 
    else if (l_mm>=L2_min_mm && l_mm<=L2_max_mm){
        l_mm_threshold=2
        l_desc="Moderate"
        l_range="80%-90%"
      }
      else if (l_mm>L3_min_mm && l_mm<=L3_max_mm){
        l_mm_threshold=3
        l_desc="Watch"
        l_range="90%"
      }
      else if (l_mm>L4_min_mm && l_mm<=L4_max_mm){
        l_mm_threshold=4
        l_desc="Advisory"
        l_range="95%"
      }
      else if (l_mm>L5_max_mm){
        l_mm_threshold=5
        l_desc="Warning"
        l_range="98%"
      }

      if (l_wl<=L1_min_wl){
        l_wl_threshold=1
      }
      else if (l_wl>L1_min_wl && l_wl<=L2_max_wl){
        l_wl_threshold=2
      }
      else if (l_wl>L2_min_wl && l_wl<=L3_max_wl){
        l_wl_threshold=3
      }
      else if (l_wl>L3_min_wl && l_wl<=L4_max_wl){
        l_wl_threshold=4
      }
      else if (l_wl>L4_max_wl){
        l_wl_threshold=5
      }

      l_risk_threshold = l_mm_threshold //> l_wl_threshold ? l_mm_threshold : l_wl_threshold

      //pass data to parent
      //console.log("A: ", l_mm_threshold)
      props.changeThresholdSubChart(l_mm_threshold)
    
  }

  function GetMM( red:number, green:number, blue:number){
    let mm=0
    if (red>=green && blue>90) {
      mm = (542-(0.5926*red)-(1.667*green))
    }
    else if (red>=green && blue<50 && blue>=0 && red>=180 && green<50){
      mm= (172-(0.4*red)-0.762*green)
    }
    else if (red>=green && blue<50 && red>=180 && green>=50){
      mm =(-93+(0.52*red)-(0.1438*green))
    }
    else if (green>red && red<100 && blue<100){
      mm = -1.52+(0.0139*green)
    }
    else if (green>red && blue>red && blue>200){
      mm = (-0.07157+(0.000963*red)+(0.001076*green))
    }
    return mm
  }


  return (
     <Box style={{display:'grid', gridTemplateColumns: 'repeat(2, 1fr)'}} >
        {/* <Grid container xs={12} sm={12} md={12}  sx={{flexDirection: { xs: "column", sm:"column", md: "column"} }}> */}
          <Card sx={{bgcolor:"#F7F9F9", width:"auto", alignItems:"center" }} >
                  <CardContent >
                    <Stack direction={{ xs: 'column', sm:'column'}} alignContent={"center"} >
                      <Stack >
                        <Stack sx={{ textAlign:'center', alignContent:'center', alignItems:'center' }}>
                            <CloudIcon fontSize="large"  sx={{ color:' #99A3A4'}}></CloudIcon>
                          <Typography variant="body1" fontWeight={"bold"} noWrap>{props.point}:</Typography>
                          <Typography variant="body2" noWrap>{l_mm.toFixed(2)} mm </Typography>
                        </Stack>
                        <Stack sx={{ textAlign:'center'}}>
                          <Typography variant="body1" fontWeight={"bold"} >Treshold: </Typography>
                          <Typography variant="body2">{l_mm_threshold}</Typography>
                        </Stack>
                      </Stack>
                      <Stack alignContent={"center"} >
                        <Gauge value={(l_mm_threshold/5)} />
                      </Stack>
                    </Stack>
                  </CardContent>
          </Card>
           <Card sx={{ bgcolor:"#E5E7E9", width:"auto", alignItems:"center"}}>
                  <CardContent>
                  <Stack direction={{ xs: 'column', sm:'column'}}>
                      <Stack>
                        <Stack sx={{ textAlign:'center', alignContent:'center', alignItems:'center' , direction: 'column'}}>
                          <WavesIcon fontSize="large" sx={{ color:' #99A3A4'}}></WavesIcon>
                        <Typography variant="body1" fontWeight={"bold"}>Water Level: </Typography>
                        <Typography variant="body2" noWrap>{l_wl.toFixed(2)} m</Typography>
                        </Stack>
                        <Stack sx={{ textAlign:'center'}}>
                        <Typography variant="body1" fontWeight={"bold"}>Treshold: </Typography>
                        <Typography variant="body2">{l_wl_threshold} </Typography>
                        </Stack>
                      </Stack>
                      <Stack >
                      <Gauge value={(l_wl_threshold/5)} />
                      </Stack>
                    </Stack>
                  </CardContent>
          </Card>
        {/* </Grid> */}
    </Box>
  )
}
export default SubChart