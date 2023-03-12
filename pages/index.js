import Head from 'next/head'
// import "slick-carousel/slick/C.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {useRouter} from 'next/router';
import Form from '../component/form';
import swal from 'sweetalert2';
// window.Swal = swal;


const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    // window.Swal = swal;
    // Swal.fire('Message Send Successfully.', 'We will contact soon you.','success');
    // window.Swal = swal;
    // swal("Hello world!");
  //   let pid = router.query
  //   document.getElementById(pid.scroll)?setTimeout(()=>{document.getElementById(pid.scroll).scrollIntoView()},50):'';
  })

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    prevArrow: false,
    nextArrow: false
  };

  return (
    <>
    <Head>
    {/* <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> */}
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    </Head>
    <div className="index-main">
    <div className="home-top">
    <Slider {...settings}>
      <div className="dark-img">
        <span className="banner-text">
        <Fade left><h3 className="monts-font" >Now our laundry plateform is online for over all mumbai</h3></Fade>
        <Fade right><h3>It's our online laundry startup platform</h3></Fade>
        </span>
        <img className="main-carsoler" src={'/img/slider5.png'} />
      </div>
      <div className="dark-img">
        <span className="banner-text">
        <Fade bottom><h3 className="monts-font" >we are try to provide best laundry service.</h3></Fade>
        </span>
        <img className="main-carsoler" src={'/img/slider4.jpg'} />
      </div>
      {/* <div>
      <img className="main-carsoler" src={'https://uclean.in/images/items/banner/8CTSiwHHWorgrBGco0C8.png'} />
      </div>
      <div>
      <img className="main-carsoler" src={'https://uclean.in/images/items/banner/U0Gq1XFY3bb6CFXGw047.png'} />
      </div> */}
    </Slider>
    </div>
    <div>
      <h2 style={{textAlign:'center', padding: '40px 0'}}>Services</h2>
      <Fade bottom>
      <div>
      <div className="row bh-h" style={{margin: '0px'}} >
        <div className="col-md-4" style={{textAlign:'center'}}>
          <Zoom>
          <div style={{borderRadius: '50%', backgroundColor: '#94deefcf', height: '200px', width: '200px', margin: 'auto'}}>
            <img src={'/img/iron.png'} style={{width:'100%', padding:'30px'}} />
          </div>
          <h3 className="service-title">Iron</h3>
          </Zoom>
        </div>
        <div className="col-md-4" style={{textAlign:'center'}}>
          <Zoom>
          <div style={{borderRadius: '50%', backgroundColor: '#94deefcf', height: '200px', width: '200px', margin: 'auto'}}>
            <img src={'/img/dryclean.png'} style={{width:'100%', padding:'30px'}} />
          </div>
          <h3 className="service-title">Dryclean</h3>
          </Zoom>
        </div>
        <div className="col-md-4" style={{textAlign:'center'}}>
          <Zoom>
          <div style={{borderRadius: '50%', backgroundColor: '#94deefcf', height: '200px', width: '200px', margin: 'auto'}}>
            <img src={'/img/wash.svg'} style={{width:'100%', padding:'30px'}} />
          </div>
          <h3 className="service-title">Wash</h3>
          </Zoom>
        </div>
      </div>
      </div>
      </Fade>
      {/* <Form /> */}

      <Fade right>
      <div id="about-us" className="about_us_div">
        <p className="about_title">About Us</p>
        <div style={{maxWidth: '900px'}}>
        <Fade left>
        <p className="about_us_p">
        We at companyName! love to see the smile on your face. 
        We offer a world class dry cleaning system that involves a vast range of services from stain removal to a luscious fragrance finish. 
        'companyName' is a Spanish expression that means 'everything's great!'. 
        It is not meant to convey the state of affairs but rather a way of doing things. 
        This is the core philosophy of companyName!
        </p>
        </Fade>
        <Fade left>
        <p className="about_us_p">
          companyName! aspires to meet your standards of service and fabric care and truly believes in ensuring customer delight each and every time.
        </p>
        </Fade>
        <Fade left>
        <p className="about_us_p">
          companyName! is the preferred choice of fashion stylists, celebrities & fashion designers across 
          the city for our proven expertise in designer wear, pret and couture. Don't risk your favorite 
          clothes with anybody else!        
        </p>
        </Fade>
        </div>
      </div>
      </Fade>

      <div  id="process" class="botline">
      <p className="our_process">Our Process</p>

          <div className="row" style={{margin: '0px', padding: '50px 0'}}>
              <div  className="col-md-3" style={{textAlign:'center'}}>
                <Fade left>
                <img src={'/img/schedule4.jpg'} style={{width: '100px'}}/>
                </Fade>
                <hr/>
                <div>
                  <p>1. Schedule a Pickup</p>
                </div>
              </div>
              <div  className="col-md-3" style={{textAlign:'center'}}>
                <Fade left>
                <img src={'/img/pickup1.png'} style={{width: '100px'}} />
                </Fade>
                <hr/>
                <div>
                  <p>2. We collect your cloths</p>
                </div>
              </div>
              <div  className="col-md-3" style={{textAlign:'center'}}>
                <Fade left>
                <img src={'/img/washing_machine2.png'} style={{width: '100px'}} />
                </Fade>
                <hr/>
                <div>
                  <p>3. We clean your clothes</p>
                </div>
              </div>
              <div  className="col-md-3" style={{textAlign:'center'}}>
                <Fade left>
                <img src={'/img/delivery4.png'} style={{width: '100px', height: '70px',  margin: '15px 0'}} />
                </Fade>
                <hr/>
                <div>
                  <p>4. Return your clean clothes</p>
                </div>
              </div>
          </div>
      </div>

      <div id="book">
        <Form />
      </div>  
    </div>
    </div>
    </>
  )
}
