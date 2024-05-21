import React from "react";
import NavBar from "../NavBar";
import pic from "../../images/contact.jpg";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#04125E" }}>
        <NavBar></NavBar>
      </div>
      <div className="container flex hero-area" style={{ margin: "30px" }}>
        <h1>Contact Us</h1>
        <div className="row">
          <div className="col-4">
            <img src={pic} alt="contact-us" width="300px" height="400px"></img>
          </div>
          <div className="col-8">
            <p>We would like to hear your feedback about us!</p>
              <ContactForm/>
          </div>
         <div>
         
        </div>  
        </div>
       
      </div>
    <div><Footer></Footer></div>
    </div>
  );
};

export default Contact;
