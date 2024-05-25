import React from 'react'
import NavBar from '../NavBar'
import pic from '../../images/server-room.jpg'
import Footer from '../Footer'
import { padding } from '@mui/system'

 const About = () => {
   return (
     <div >
             <div style={{ backgroundColor:'#04125E'}}>
                <NavBar></NavBar>
       </div>
       <div className='flex hero-area'><br></br><br></br>
       <center><img src={pic} alt="pic" width="1100px" height="400px" /></center>
       <div style={{paddingTop: '30px', margin:'50px'}}>
        <h1>About Us</h1>
          <p>
          UNI-TECHNOLOGIES Sdn Bhd (UTSB) is a multi-disciplined consultancy company and a Bumiputera contractor with a proven and excellent track record. UTSB is a wholly owned company of Universiti Teknologi Malaysia (UTM) established since 1992.

UTSB has an excellent track record with more than 2,500 completed projects estimating a total of RM 200 million projects cost. Our clients consist of international clients and government clients with over 1,400 satisfied clients that has successfully generated accomplished our profits.

UTSB now and before focusing on specific consultancy, professional services, studies consultancy, training services, special project, and support services. By developing strengths particularly in consulting services and project management consultancy, UTSB is able to fully integrate dynamic client requirements into custom-made projects, solutions and specialized trainings while keeping cost optimization concerns of our clients in mind.
          </p>
       </div>
          <Footer></Footer>

       </div>
        
     </div>
   )
 }

 export default About