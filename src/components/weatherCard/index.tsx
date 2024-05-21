import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid
} from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud'
import WavesIcon from '@mui/icons-material/Waves'
//import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
//import { styled } from "@mui/material/styles";
import { Gauge } from "../gauge";
import {ActionCard }  from "../weatherCard/actionCard";
import { ProgressChart } from "../progressChart/ProgressChart";

type CardData = {
  place: string;
  //riskStatus: "Warning" | "Advisory" | "Watch" | "Medium Risk" | "Low Risk";
  riskStatus: string;
  riskThreshold: number;
  imageURL: string;
  mA1: number;
  mm1: number;
  mA2: number;
  mm2: number;
  threshold_mA1: number;
  threshold_mA2: number;
  threshold_mm1: number;
  threshold_mm2: number;
};

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export const WeatherCard = (props: CardData) => {
  let WarningColor: string ='#78909C' //grey - default color

  if (props.riskThreshold===1){
    WarningColor='#0033FF' //blue
  }
  else if (props.riskThreshold===2){
    WarningColor='#00FF33 ' //green
  }
  else if (props.riskThreshold===3){
    WarningColor='#FFFF33' //yellow
  }
  else if (props.riskThreshold===4){
    WarningColor='#FF9933' //orange
  }
  else if (props.riskThreshold===5){
    WarningColor='#FF0000' //red
  }

//const [showWarningSign, setShowWarningSign]= useState(false)
let showWarningSign = false

  if(props.riskThreshold >= 3){
    showWarningSign = true
  }

  return (
    <div>
      <Grid container spacing={2} padding={"20px"}>
        {/* Location Picture */}
        <Grid item xs={12} md={3}>
          <Card sx={{ color:"black", borderRadius: "20px", height:"230px", bgcolor:`${WarningColor}` }}>
              <CardContent sx={{ padding: "0 0 0 0", backgroundImage:'inherit', alignContent:"center"  }}>
                <Typography sx={{marginLeft: 2}} color={"white"} variant="h6">{props.place}</Typography>
                <CardMedia  sx={{ position: "relative", backgroundColor: "transparent", padding: "0em 0em 0 0em"}}></CardMedia>
                 <img src={props.imageURL} width="100%" height="210px" alt="place"></img>
              </CardContent>
          </Card>
        </Grid>

        {/* Weather Card */}
        <Grid item xs={12} md={6}>
        <Card sx={{ bgcolor:`${WarningColor}`, borderRadius: "20px" }}>
            <CardContent>
            <Stack sx={{ bgcolor:`${WarningColor}` }} direction="row" width="100%">
              <Typography color="white">HEADWATER READ STATUS: HIGH</Typography>
              <Typography color="white" ><time dateTime={new Date().toUTCString()} suppressHydrationWarning={true} /></Typography>
            </Stack>
          <Stack direction="row" sx={{ bgcolor:`${WarningColor}` }}>
            <Typography variant="h3" color="white" sx={{ padding:"10px"}}>{props.riskStatus}</Typography>
            <Stack sx={{ padding:"20px"}}>
              { showWarningSign &&    <img src="../../../images/warning.png" width="50px" height="50px" alt="warning"></img>}
            </Stack>
          </Stack>
          <Stack direction="row" >
              <Stack direction="column">
                  <Typography variant="body1" color="white" >Alert Level 2</Typography>
                  <Typography variant="body1" color="white">Extreme Water Flow</Typography>
              </Stack>
              <Stack>
                  {/* Progress Chart */}
                  <ProgressChart threshold={2}></ProgressChart>
              </Stack>
          </Stack>
          </CardContent>
          <Stack direction={{ xs: 'column', sm:'row'}} >
            {/* chart */}
            <Card sx={{bgcolor:"#F7F9F9" }} >
              <CardContent >
                <Stack direction={{ xs: 'row', sm:'column'}} alignContent={"center"} >
                  <Stack >
                    <Stack sx={{ textAlign:'center', alignContent:'center', alignItems:'center' }}>
                        <CloudIcon fontSize="large"  sx={{ color:' #99A3A4'}}></CloudIcon>
                       <Typography variant="body1" fontWeight={"bold"} noWrap>Rain Rate 1:</Typography>
                       <Typography variant="body2" noWrap>{props.mm1} mm</Typography>
                    </Stack>
                    <Stack sx={{ textAlign:'center'}}>
                      <Typography variant="body1" fontWeight={"bold"} >Treshold: </Typography>
                      <Typography variant="body2">{props.threshold_mm1}</Typography>
                    </Stack>
                  </Stack>
                  <Stack alignContent={"center"} >
                    <Gauge value={props.threshold_mm1/5} />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ bgcolor:"#E5E7E9"}}>
              <CardContent>
              <Stack direction={{ xs: 'row', sm:'column'}}>
                  <Stack>
                    <Stack sx={{ textAlign:'center', alignContent:'center', alignItems:'center' , direction: 'column'}}>
                      <WavesIcon fontSize="large" sx={{ color:' #99A3A4'}}></WavesIcon>
                    <Typography variant="body1" fontWeight={"bold"}>Flow Rate 1: </Typography>
                    <Typography variant="body2" noWrap>{props.mA1} mA</Typography>
                    </Stack>
                    <Stack sx={{ textAlign:'center'}}>
                    <Typography variant="body1" fontWeight={"bold"}>Treshold: </Typography>
                    <Typography variant="body2">{props.threshold_mA1}</Typography>
                    </Stack>
                  </Stack>
                  <Stack >
                  <Gauge value={props.threshold_mA1/5} />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{bgcolor:"#F7F9F9" }}>
              <CardContent>
              <Stack direction={{ xs: 'row', sm:'column'}}>
                  <Stack>
                    <Stack sx={{ textAlign:'center', alignContent:'center', alignItems:'center' , direction: 'column'}}>
                    <CloudIcon fontSize="large"  sx={{ color:' #99A3A4'}}></CloudIcon>
                    <Typography variant="body1" fontWeight={"bold"}>Rain Rate 2: </Typography>
                    <Typography  variant="body2" noWrap>{props.mm2} mm</Typography>
                    </Stack>
                    <Stack sx={{ textAlign:'center'}}>
                    <Typography variant="body1" fontWeight={"bold"}>Treshold: </Typography>
                    <Typography  variant="body2">{props.threshold_mm2}</Typography>
                    </Stack>
                  </Stack>
                  <Stack >
                  <Gauge value={props.threshold_mm2/5} />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ bgcolor:"#E5E7E9"}}>
              <CardContent>
              <Stack direction={{ xs: 'row', sm:'column'}}>
                  <Stack>
                    <Stack sx={{ textAlign:'center', alignContent:'center', alignItems:'center' , direction: 'column'}}>
                    <WavesIcon fontSize="large" sx={{ color:' #99A3A4'}}></WavesIcon>
                    <Typography variant="body1" fontWeight={"bold"}>Flow Rate 2: </Typography>
                    <Typography variant="body2" noWrap>{props.mA2} mA</Typography>
                    <Typography variant="body1" fontWeight={"bold"}>Treshold: </Typography>
                    <Typography  variant="body2">{props.threshold_mA2}</Typography>
                    </Stack>
                  </Stack>
                  <Stack >
                  <Gauge value={props.threshold_mA2/5} />
                  </Stack>
                </Stack>
              </CardContent>           
            </Card>
          </Stack>
          </Card>
        </Grid>

        {/* Action Crad */}
        <Grid item xs={12} md={3}>
        <ActionCard warningLevel={props.riskThreshold}></ActionCard>
          
        </Grid>
      </Grid>


    </div>
  );
};
