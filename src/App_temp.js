"use client"

//import styles from "./page.module.css";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';
//import { makeStyles } from '@mui/styles';
import { CardActionArea, CardHeader, Typography } from "@mui/material";
import Card from '@mui/material/Card';
//import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

///import images from "../data/images";
///import CustomSlider from "../components/slider/custom.slider";
import "./style.css";
import "./bootstrap.css";
import UniWeatherCard from './components/UniWeatherCard/UniWeatherCard'
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function App_temp() {
  return (
   <div>
       <CssBaseline />

    <div className="hero_area">

      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="/images/hero-bg.png" alt=""/>
        </div>
      </div>

    <header className="header_section">
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
    </header>

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
      </div>
      </div>
      </section>
      <section className="info_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_contact">
            <h4>
              Address
            </h4>
            <div className="contact_link_box">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="info_social">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_detail">
            <h4>
              Info
            </h4>
            <p>
            Uni-Technologies Sdn. Bhd. is the subsidiary company under Universiti Teknologi Malaysia. We do a comprehensive research to this university in order to help on R&D development.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 mx-auto info_col">
          <div className="info_link_box">
            <h4>
              Links
            </h4>
            <div className="info_links">
              <a className="active" href="index.html">
                Home
              </a>
              <a className="" href="about.html">
                About
              </a>
              <a className="" href="service.html">
                Services
              </a>
              <a className="" href="why.html">
                Why Us
              </a>
              <a className="" href="team.html">
                Team
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
      <section className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://www.saakajohor.com">Uni-Technologies Sdb. Bhd. and Universiti Teknologi Malaysia</a>
      </p>
    </div>
  </section>
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

export default App_temp;
