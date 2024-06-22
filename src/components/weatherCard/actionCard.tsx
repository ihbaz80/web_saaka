import React, {useState} from 'react'
import {Box, Stack,Card, Typography, CardContent} from '@mui/material'
//import CardHeader from '@mui/material/CardHeader';
//import Icon from '@mui/icons-material'
//import { bgcolor } from '@mui/system'

export const ActionCard = (props: {warningLevel:number}) => {
    let warningText1: string=''
    let warningText2: string=''
    let warningText3: string=''
    let warningText4: string=''
    let imageURL1: string='../../../images/'
    let imageURL2: string='../../../images/'
    let imageURL3: string='../../../images/'
    let imageURL4: string='../../../images/'
    let cardColor: string='white'

    const warningText = ()=> {
        if (props.warningLevel===1){ 
            //LOW RISK
            warningText1 = "1. Low Risk for headwater WATER flows are occurring and slippery waterfall is LOW. All water recreational activities is safe"
            warningText2 = "2. Low RAINFALL (0.7mm) were occurring. The risk of slippery forest floor is low. All jungle trekking activities is safe."
            warningText3 = "3. Take care of the cleanliness of the premises, manage your litter and save the environment for future."
            imageURL1 = imageURL1 + "swim.png"
            imageURL2 = imageURL2 + "hiking.png"
            imageURL3 = imageURL3 + "safe.png"
            cardColor="#0033FF"
        }
        else if (props.warningLevel===2){ 
            //MEDIUM RISK
            warningText1 = "1. Moderate WATER flows are occurring. Risk for headwater and slippery waterfall is MODERATE. All water recreational activities is safe."
            warningText2 = "2. Moderate RAINFALL (8.7mm) were occurring. The risk of slippery forest floor is moderate. All jungle trekking activities must be conducted with precautions."
            warningText3 = "3. Precautions should be addressed to the visitors if weather is getting worse."
            warningText4 = "4. Ready to EVACUATE and LEAVE the premises if weather is getting worse."
            imageURL1 = imageURL1 + "swim.png"
            imageURL2 = imageURL2 + "hiking.png"
            imageURL3 = imageURL3 + "exit.png"
            cardColor="#00FF33"
        }
        else if (props.warningLevel===3){
            //WATCH
            warningText1 = "1. Medium WATER flows are occurring. Risk for headwater and slippery waterfall is MODERATE. All water recreational activities must be conducted with precautions."
            warningText2 = "2. Medium RAINFALL (8.7mm) were occurring. The risk of slippery forest floor is moderate. All jungle trekking activities must be conducted with precautions."
            warningText3 = "3. Precautions should be addressed to the visitors."
            warningText4 = "4. Ready to EVACUATE and LEAVE the premises if weather is getting worse."
            imageURL1 = imageURL1 + "swim.png"
            imageURL2 = imageURL2 + "hiking.png"
            imageURL3 = imageURL3 + "noentry.jpg"
            imageURL4 = imageURL4 + "exit.png"
            cardColor="#FFFF33"
        }
        else if (props.warningLevel===4){
            //ADVISORY
            warningText1 = "1. Strong WATER flows are occurring. Risk for headwater and slippery waterfall is HIGH. All water recreational activities, were not encourage."
            warningText2 = "2. Heavy RAINFALL (8.7mm) were occurring. The risk of slippery forest floor is HIGH. All jungle trekking activities were strongly prohibited."
            warningText3 = "3. Avoid to ENTER the premises"
            warningText4 = "4. EVACUATE and LEAVE the premises"
            imageURL1 = imageURL1 + "noswimming.jpg"
            imageURL2 = imageURL2 + "noentry.jpg"
            imageURL3 = imageURL3 + "no-hiking.png"
            imageURL4 = imageURL4 + "exit.png"
            cardColor="#FF9933"
        }
        else if (props.warningLevel===5){
            //WARNING
            warningText1="1. Strong water flow are occuring. Risk for headwater and slippery waterfall is HIGH. All water recreational activities were strongly prohibited."
            warningText2="2. Heavy RAINFALL (8.7 mm) were occuring. The risk of slippery forest floor is HIGH. All jungle activities were strongly prohibited."
            warningText3="3. Avoid to enter the premises."
            warningText4="4. EVACUATE and LEAVE the premises immediately."
            imageURL1 = imageURL1 + "noswimming.jpg"
            imageURL2 = imageURL2 + "noentry.jpg"
            imageURL3 = imageURL3 + "no-hiking.png"
            imageURL4 = imageURL4 + "exit.png"
            cardColor="#FF0000"
        }

       // console.warn("CardColor", cardColor)
       const setImage4 = (warningLevel:number) =>{
            if (warningLevel!==1 && warningLevel!==2)
            {
            return (
                <img src={imageURL4} width="50px" height="60px" alt="iconimage4"/>
            )
            }
       }
    
        return (
            <div>
            <Card sx={{ width: "100%", maxWidth:"500px", borderRadius: "20px", bgcolor:`${cardColor}`, padding:"5px" }} variant="outlined">
              <CardContent>
                <Typography variant='subtitle2'>CURRENT SITUATION DESCRIPTION & RECOMMENDED ACTIONS</Typography>
                    Risk:{props.warningLevel}
                <Stack direction={"row"}>
                    <Stack><Typography variant="body2">{warningText1}</Typography></Stack>
                    <Stack><img src={imageURL1} width="50px" height="60px" alt="iconimage1"></img></Stack>
                </Stack>
                <Stack direction={"row"}>
                    <Stack><Typography variant="body2">{warningText2}</Typography></Stack>
                    <Stack><img src={imageURL2} width="50px" height="60px" alt="iconimage2"></img></Stack>
                </Stack>
                <Stack direction={"row"}>
                    <Stack><Typography variant="body2">{warningText3}</Typography></Stack>
                    <Stack><img src={imageURL3} width="50px" height="60px" alt="iconimage3"></img></Stack>
                </Stack>
                <Stack direction={"row"}>
                    <Stack><Typography variant="body2">{warningText4}</Typography></Stack>
                    <Stack>
                        {setImage4(props.warningLevel)}
                        {/* {(props.warningLevel!==1 && props.warningLevel!==2) ?  <img src={imageURL4} width="50px" height="60px" alt="iconimage4"> </img>:''} */}
                     </Stack>
                </Stack>
              </CardContent>
            
               
            
                
               
            </Card>
            
        <Stack>
            
        </Stack>
        {/* <Stack
            direction={{ xs: "row", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
        </Stack> */}
        </div>
        )
        
    }

    return (
    <div>
        <Box>
                {warningText()}
        </Box>
    </div>
  )
}

export default ActionCard