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
        <div style={{padding: '30px', width: '100%', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
            <h2 style={{textAlign: 'left', color: '#fff'}}>Services</h2>
        </div>
        <div className="" style={{padding: '30px'}}>
            <div className="row">
                <div className="row" style={{margin: '0 0 30px 0'}}>
                    <div className="col-md-6">
                    <Fade left>
                        <img src={'/img/service_dryclean.jpg'} style={{width: '100%', maxWidth: '450px', height: 'auto', maxHeight: '270px'}}/>
                    </Fade>
                    </div>
                    <div className="col-md-6" style={{margin: 'auto'}}>
                    <Fade right>
                        <p>
                        It is a cleaning process for clothing and textiles that combines a mechanical action with the efficiency 
                        of a solvent. Several types of solvents are used today. Perchloroethylene and siloxane (silicone) are two 
                        cases in point. A dry cleaning machine is similar to a washing machine, except that it is larger and uses 
                        a closed-loop system: the solvent is recovered, filtered and reused in the next cleaning cycle. Today, the 
                        dry cleaning remains the most efficient method to remove grease stains and other ordinary marks. 
                        This treatment also eases ironing.
                        </p>
                        </Fade>
                    </div>
                </div>

                <div className="row" style={{margin: '0 0 30px 0'}}>
                    <div className="col-md-6 order-md-2 image_service">
                    <Zoom>
                        <img src={'/img/wash_fold.jpg'} style={{width: '100%', maxWidth: '450px', height: 'auto', maxHeight: '270px'}} />
                    </Zoom>
                    </div>
                    <div className="col-md-6 order-md-1"  style={{margin: 'auto'}}>
                        <p>
                        Our stores are equipped with ultra Modern “State of the Art” machines that use ’water’ as the 
                        primary cleaning solution. This process is based on 4 elements, fundamental to the efficiency 
                        of the washing process: the mechanical action, laundry products, temperature and the time allocated 
                        to each washing cycle. We use an exclusive range of laundry products that bleach, purify, de-grease 
                        and soften textiles.
                        </p>
                    </div>
                </div>

                <div className="row" style={{margin: '0 0 30px 0'}}>
                <div className="col-md-6">
                <Zoom>
                    <img src={'/img/ironing.jpg'} style={{width: '100%', maxWidth: '450px', height: 'auto', maxHeight: '270px'}}/>
                </Zoom>
                </div>
                <div className="col-md-6" style={{margin: 'auto'}}>
                    <p>
                    The ironing techniques used exclusively in our stores have been developed by Verinito itself. 
                    Each member of our team receives a comprehensive training on ironing, in order to return your 
                    clothing and household items impeccably ironed, focusing notably on the workstation ergonomics.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
