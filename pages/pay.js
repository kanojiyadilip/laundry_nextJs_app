import Head from 'next/head'
import React from "react";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// var QRCode = require('qrcode.react');

export default function Home() {

  return (
    <>
    <Head>
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
    <div className="main-price">
    <Fade top>
        <div className='pay-div'>
          <Fade right>
            <h2 style={{textAlign: 'left', color: '#fff'}}>Payment</h2>
          </Fade>
        </div>
        </Fade>
        {/* <div style={{height: '400px'}}></div> */}
        {/* <div className="" style={{padding: '30px'}}> */}
            {/* <div className="row"> */}
            <div>
            <Fade bottom>
                <div className="blue-div">
                  <Zoom>
                    <p className="scanpay">Scan & Pay</p>
                  </Zoom>
                </div>
                </Fade>
                <Zoom>
                <div className="qr-code-div">
                  <Zoom>
                    <div className="qr"></div>
                  </Zoom>  
                    {/* <img src={'/img/Dilip_QA.jpeg'} style={{width: '100%', maxWidth: '200px', height: 'auto', left: '0px', right: '0px', margin: 'auto'}}/>  */}
                </div>
                </Zoom>
            </div>    
            {/* </div> */}
        {/* </div> */}
        <div style={{height: '250px'}}></div>
    </div>
    </>
  )
}
