//import styles from "./page.module.css";
import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import SettingsIcon from '@mui/icons-material/Settings';
//import { makeStyles } from '@mui/styles';
//import { CardActionArea, CardHeader, Typography } from "@mui/material";
//import Card from '@mui/material/Card';
//import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';
//import { Ropa_Sans } from "next/font/google";

///import images from "../data/images";
///import CustomSlider from "../components/slider/custom.slider";
import "../../App.css";
import "../../bootstrap.css";
import UniWeatherCard from '../../components/UniWeatherCard/UniWeatherCard';
//import Divider from '@mui/material/Divider';
//import Avatar from '@mui/material/Avatar';
//import Stack from '@mui/material/Stack';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants';
import Axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Guide from '../../components/Guide/Guide';
import RGBColorReader from '../../components/RGBColorReader';


function Home() {
    // useEffect(() => {
    //     Axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
    //     .then(function (response) {
    //         if(response.status !== 200){
    //           redirectToLogin()
    //         }
    //     })
    //     .catch(function (error) {
    //       redirectToLogin()
    //     });
    //   },[])

    //   function redirectToLogin() {
    //     props.history.push('/login');
    //     }

  return (
   <div>
    <RGBColorReader location="Gunung Pulai" point="Station P1" pointX={458} pointY={400} ></RGBColorReader>
    <RGBColorReader location="Gunung Pulai" point="Station P2" pointX={457} pointY={398} ></RGBColorReader>
    <RGBColorReader location="Gunung Pulai" point="Station B1" pointX={429} pointY={395} ></RGBColorReader>
    <RGBColorReader location="Gunung Pulai" point="Station B2" pointX={432} pointY={397} ></RGBColorReader>
    
       <CssBaseline /> 
       <div style={{ backgroundColor:'#04125E'}}>
                <NavBar></NavBar>
       </div>

    <div className="hero_area">

      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="/images/hero-bg.png" alt=""/>
        </div>
      </div>

    {/* <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>
              SAAKA JOHOR
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html"> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="service.html">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="why.html">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="team.html">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Login</a>
              </li>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header> */}

    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail-box">
                    <h1>
                      SAAKA JOHOR<br/>
                      SISTEM AMARAN AWAL KEPALA AIR JOHOR
                    </h1>
                    <p>
                     Kami membantu mengenalpasti aliran kepala air di dua kawasan di Johor iaitu Gunung Pulai dan Gunung Berlumut bagi menjaga keselamatan para pengunjung.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container ">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail-box">
                    <h1>
                        SAAKA JOHOR<br/>
                        SISTEM AMARAN AWAL KEPALA AIR JOHOR
                      </h1>
                    <p>
                        Kami membantu mengenalpasti aliran kepala air di dua kawasan di Johor iaitu Gunung Pulai dan Gunung Berlumut bagi menjaga keselamatan para pengunjung.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail-box">
                    <h1>
                        SAAKA JOHOR<br/>
                        SISTEM AMARAN AWAL KEPALA AIR JOHOR
                      </h1>
                    <p>
                        Kami membantu mengenalpasti aliran kepala air di dua kawasan di Johor iaitu Gunung Pulai dan Gunung Berlumut bagi menjaga keselamatan para pengunjung.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>

    <section className="service_section layout_padding">
    <div className="service_container">
      <div className="container ">
        <div className="heading_container heading_center">
          <h2>
            Head Water <span>Monitoring System</span>
          </h2>
          <p>
            We are monitoring 2 locations of head water in Johor as below:
          </p>
        </div>
        <div className="row">
          <UniWeatherCard location="Gunung Pulai"></UniWeatherCard> 
        </div>
        <div className="row">
          <UniWeatherCard location="Gunung Berlumut"></UniWeatherCard>      
        </div>
        <div className="row">
          <Guide></Guide>
        </div>
      </div>
      </div>
    </section>
    

    
    <Footer></Footer>

    </div>
  </div>
  );
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Home;
