import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LowRisk from '../../images/Low-Risk.jpg'
import MediumRisk from '../../images/Medium-Risk.jpg';
import Watch from '../../images/Watch.jpg';
import Advisory from '../../images/Advisory.jpg'
import Warning from '../../images/Warning.jpg'

const Guide = () => {
  return (
    <div className="container">
        <h4>Guide for Alert</h4>
<div className='row'>
    <div style={{padding:'20px'}}>
<Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={LowRisk}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            LOW RISK
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
                <li>
                    Low Risk for headwater WATER flows are occurring and slippery waterfall is LOW. All water recreational activities is safe
                </li>
                <li>
                    Low RAINFALL (0.7mm) were occurring. The risk of slippery forest floor is low. All jungle trekking activities is safe.
                </li>
                <li>Take care of the cleanliness of the premises, manage your litter and save the environment for future.</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
</Card>
    </div>
    <div style={{padding:'20px'}}>
<Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={MediumRisk}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MEDIUM RISK
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
                <li>Moderate WATER flows are occurring. Risk for headwater and slippery waterfall is MODERATE. All water recreational activities is safe.</li>
                <li>Moderate RAINFALL (8.7mm) were occurring. The risk of slippery forest floor is moderate. All jungle trekking activities must be conducted with precautions.</li>
                <li>Precautions should be addressed to the visitors if weather is getting worse.</li>
                <li>Ready to EVACUATE and LEAVE the premises if weather is getting worse.</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
</Card>
</div>
<div style={{padding:'20px'}}>
<Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Watch}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WATCH
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <ul>
                <li>Medium WATER flows are occurring. Risk for headwater and slippery waterfall is MODERATE. All water recreational activities must be conducted with precautions.</li>
                <li>Medium RAINFALL (8.7mm) were occurring. The risk of slippery forest floor is moderate. All jungle trekking activities must be conducted with precautions.</li>
                <li>Precautions should be addressed to the visitors.</li>
                <li>Ready to EVACUATE and LEAVE the premises if weather is getting worse</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
</Card>
</div>
<div style={{padding:'20px'}}>
<Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Advisory}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ADVISORY
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <ul>
                <li>Strong WATER flows are occurring. Risk for headwater and slippery waterfall is HIGH. All water recreational activities, were not encourage.</li>
                <li>Heavy RAINFALL (8.7mm) were occurring. The risk of slippery forest floor is HIGH. All jungle trekking activities were strongly prohibited.</li>
                <li>Avoid to ENTER the premises</li>
                <li>EVACUATE and LEAVE the premises</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
</Card>
</div>
<div style={{padding:'20px'}}>
<Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Warning}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WARNING
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <ul>
                <li>Strong water flow are occuring. Risk for headwater and slippery waterfall is HIGH. All water recreational activities were strongly prohibited.</li>
                <li>Heavy RAINFALL (8.7 mm) were occuring. The risk of slippery forest floor is HIGH. All jungle activities were strongly prohibited.</li>
                <li>Avoid to enter the premises.</li>
                <li>EVACUATE and LEAVE the premises immediately.</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
</Card>
</div>
</div>
    </div>
  )
}

export default Guide