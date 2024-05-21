import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid
  } from "@mui/material";

//import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { ActionCard } from "../weatherCard/actionCard";
import { ProgressChart } from "../progressChart/ProgressChart";
import  SubChart  from './subChart';
//import { error } from "console";
//import { Directions } from "@mui/icons-material";

  // const subData =[{"id":6,"place":"Sungai A","pointX":100,"pointY":131,"red":255,"green":255,"blue":0,"mm":"40.00","mA":"2.00","wl":"2.00","loc_name":"Gunung Pulai","created":"2024-03-01T00:30:00.000Z"},
  // {"id":3,"place":"Sungai B","pointX":255,"pointY":255,"red":0,"green":55,"blue":255,"mm":"42.00","mA":"12.00","wl":"3.00","loc_name":"Gunung Pulai","created":"2024-03-01T00:00:00.000Z"}]


function UniWeatherCard  (props: {location:string})  {
   // let WarningColor: string ='#78909C' //grey - default color
    let riskThreshold: number=1
    let imageURL: string='../../../img/'
    // let loc: string= props.location
    // let arr:string[]=[]
    // let bgcolor='#78909C'

    interface ILocationData {
      id: number,
      name: string,
      point: string,
      imageURL: string
    }

    const location=props.location
    const [points, setPoints] = useState([])
    //const [logData, setLogData] = useState([])
    const [locationData, setLocatioData] = useState<ILocationData[]>()
    const [riskNumber, setRiskNumber]= useState(0)
    const [warningColor, setWarningColor]=useState('#78909C')
    const [thresholdValue, setThresholdValue]= useState(1)
    const [riskStatus, setRiskStatus]=useState('')
    const [showWarningSign, setShowWarningSign]= useState(false)
    const [riskDesc, setRiskDesc]=useState('')
    //const [headWaterStatus, setHeadWaterStatus]=useState('')

    function setWarningStyle(riskNo: number) {
      //console.log("Func: getWarningColor, param riskNo:", riskNo)
    if (riskNo === 1) {
      setWarningColor('#0033FF'); //blue
      setRiskStatus('LOW RISK')
      setRiskDesc('Safe water flow')
    }
    else if (riskNo === 2) {
      setWarningColor('#00FF33'); //green
      setRiskStatus('MEDIUM RISK')
      setRiskDesc('Safe water flow')
    }
    else if (riskNo === 3) {
      setWarningColor('#FFFF33'); //yellow
      setRiskStatus('WATCH')
      setShowWarningSign(true)
      setRiskDesc('Moderate water flow')
    }
    else if (riskNo === 4) {
      setWarningColor('#FF9933'); //orange
      setRiskStatus('ADVISORY')
      setShowWarningSign(true)
      setRiskDesc('High water flow')
    }
    else if (riskNo === 5) {
      setWarningColor('#FF0000'); //red
      setRiskStatus('WARNING')
      setRiskDesc('Extreme water flow')
      setShowWarningSign(true)
    }
   // console.log("Func: getWarningColor, param bgcolor:", bgcolor)

  } 

  useEffect(()=>{
    if (riskThreshold === 1) {
      setWarningColor('#0033FF'); //blue
     // bgcolor='#0033FF'
    }
    else if (riskThreshold === 2) {
      setWarningColor('#00FF33'); //green
      //bgcolor='#00FF33'
    }
    else if (riskThreshold === 3) {
      setWarningColor('#FFFF33'); //yellow
      //bgcolor='#FFFF33'
    }
    else if (riskThreshold === 4) {
      setWarningColor('#FF9933'); //orange
      //bgcolor='#FF9933'
    }
    else if (riskThreshold === 5) {
      setWarningColor('#FF0000'); //red
      //bgcolor='#FF0000'
    }

    Axios.get('https://api.saakajohor.com/location').then((response)=>{
    // Axios.get('http://localhost:3001/location').then((response)=>{
      console.log("API LOCATION:",response.data)
      setLocatioData(response.data)
    })
   

    Axios.get(`https://api.saakajohor.com/points/${props.location}`).then((response) => {
    //Axios.get(`http://localhost:3001/points/${props.location}`).then((response) => {
           setPoints(response.data)
           return response.data
      })
     .then((data)=>console.log("API points: ",data[0]));

  },[]);

    // const getLogData = async(location: string, point: string) => {
    //     try{
    //         const data = await Axios.get(`http://localhost:3001/datalog/location/${location}/point/${point}`)
    //         .then(function(response){ return response.data})
    //         setLogData(data[0][0])
    //         console.log("Data:", data)
    //     }
    //     catch(error) {
    //         //console.log(error)
    //     }
    // }


    // useEffect(()=>{
    //   try{
    //     Axios.get('https://api.saakajohor.com/location').then((response)=>{
    //     //Axios.get('http://localhost:3001/location').then((response)=>{
    //     console.log("API LOCATION:",response.data)
    //     setLocatioData(response.data)
    //   })
    //   }catch(error){
    //     console.warn("Reading Location err:", error)
    //   }
    // },[]);

     if (locationData){
      console.log("LOCATION DATA:", locationData)
      
      const data:ILocationData[] = JSON.parse(JSON.stringify(locationData))
      //console.log("IMAGE URL:", data.imageURL)
      data.map((d)=>{
        if (d.name===props.location){
          imageURL = d.imageURL
        }
      });
     }

    // useEffect(()=>{
    //   Axios.get(`https://api.saakajohor.com/points/${props.location}`).then((response) => {
    //   //Axios.get(`http://localhost:3001/point/${props.location}`).then((response) => {
    //        setPoints(response.data)
    //        return response.data
    //   })
    //  .then((data)=>console.log("API points: ",data[0]));

    // },[]);

    //if (!points) return null

    interface PointItemsProp{
      point: string,
      changeThresholdValue:any
    }   
    
    //components
    const PointItems: React.FC<PointItemsProp>=({point, changeThresholdValue})=>{
      const handleRiskChild = (data:number) => {
      //console.log("B: ",data)
      changeThresholdValue(data)
     }
      
    return (
        <SubChart loc={location} point={point} changeThresholdSubChart={handleRiskChild}></SubChart>
      )
    }

    interface ShowPointsProps{
      points: string[], //sub location
      getRiskGrade:any //function property
    }

    const ShowPoints: React.FC<ShowPointsProps>=(props) =>{
      var  collectRisk: Array<number>=[0]

      var getMaxRisk = (riskNo:number) => {
        let maxVal=0
        collectRisk= [...collectRisk,riskNo]  
        collectRisk.map((val)=>{
          maxVal = Math.max(maxVal,val)
        });
    
     return maxVal
    }

    let temp:number=0

    const handleThresholdValue = (riskNo:number) =>{
      //console.log("C: ", riskNo)
      setThresholdValue(getMaxRisk(riskNo))
      //console.log("D: ",thresholdValue)
      setWarningStyle(thresholdValue)
    }

    //Get points after calling from API 
    console.log("POINTS: ", props.points) //OK {id: 1, point: 'Station P1', pointX: 458, pointY: 400, location: 'Gunung Pulai'}
    const dataPoints=props.points.map((listPoints, index)=>{
      console.log("LIST POINTS",listPoints)
      const obj:PointItemsProp = JSON.parse(JSON.stringify(listPoints))
      console.log("Obj:", obj) //Output: Sungai A
    
       return (
        <Grid sx={{flexDirection: { xs: "column", sm:"column", md: "column"} }} xs={12} sm={6} md={6} key={index}  >
             <PointItems key={index} point={obj.point} changeThresholdValue={handleThresholdValue}/> 
       </Grid>
       ) 
     });
 //props.getRiskGrade(temp)

     return(
     <>
       {dataPoints}       
      </>
      )
  } //End ShowPoints
   
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Grid container spacing={2} padding={"20px"}>
    {/* Location Picture */}
    <Grid item xs={12} md={3}>
    <Card sx={{borderRadius: "20px", height:"230px", bgcolor:`${warningColor}`  }}>
          <CardContent sx={{ padding: "0 0 0 0", backgroundImage:'inherit', alignContent:"center"  }}>
            <Typography sx={{marginLeft: 2}} color={"white"} variant="h6">{props.location}</Typography>
            <CardMedia  sx={{ position: "relative", backgroundColor: "transparent", padding: "0em 0em 0 0em"}}></CardMedia>
             <img src={`../../../images/${imageURL}`} width="100%" height="210px" alt="place"></img>
          </CardContent>
      </Card>
    </Grid> 

    {/* Weather Card */}
    <Grid item xs={12} md={6}>
    <Card sx={{ bgcolor:`${warningColor}`, borderRadius: "20px" }}>
        <CardContent>
        <Stack sx={{ bgcolor:`${warningColor}` }} direction="row" width="100%">
          <Typography color="white">HEADWATER READ STATUS: {riskStatus}</Typography>
          <Typography color="white" >{new Date().toUTCString()}</Typography>
        </Stack>
      <Stack direction="row" sx={{ bgcolor:`${warningColor}` }} >
        <Typography variant="h3" color="white" sx={{ padding:"10px"}}>{riskStatus}</Typography>
        <Stack sx={{ padding:"20px"}}>
          { showWarningSign &&    <img src="../../../images/warning.png" width="50px" height="50px" alt="warning"></img>}
        </Stack>
      </Stack>
      <Stack direction="row" >
          <Stack direction="column">
              <Typography variant="body1" color="white" >Alert Level {riskNumber}</Typography>
              <Typography variant="body1" color="white">{riskDesc}</Typography>
          </Stack>
          <Stack>
              {/* Progress Chart */}
              <ProgressChart threshold={thresholdValue}></ProgressChart>
          </Stack>
      </Stack>
      </CardContent>
      <Grid container sx={{ flexDirection: { xs: "column", sm:"column", md: "row"} }}>

        {/* chart - return 1 or 2 point of locations based on database*/}
      {<ShowPoints points={points} getRiskGrade={(riskNo:number)=>{
        if (riskNumber!==riskNo){
          setRiskNumber(riskNo)
          setWarningStyle(riskNo)
        }
        }}/>}
      </Grid>
      </Card>
    </Grid>

    {/* Action Crad */}
    <Grid item xs={12} md={3}>
    <ActionCard warningLevel={thresholdValue}></ActionCard>
      
    </Grid>
  </Grid>
  )
}

export default UniWeatherCard