import Head from 'next/head'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React from "react";
// import Slider from "react-slick";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// var React = require('react');
// var QRCode = require('qrcode.react');

export default function Home() {

    // const [key, setKey] = useState('home');


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
        <div style={{textAlign: 'center', padding: '30px'}}>
        {/* <img src={'/img/Dilip_QA.jpeg'} style={{width: '100%', maxWidth: '200px', height: 'auto'}}/>     */}
        {/* <QRCode value="dilip.1093@okaxis" /> */}
            <h2>Price List</h2>
            <p>Free Pick & Drop on orders above 500 Rs</p>
        </div>
        <div className="nav-price">
        <Tabs defaultActiveKey="Men" id="uncontrolled-tab-example">
            <Tab eventKey="Men" title="Men's">
                
            <div className="container">
            {/* <h2>Basic Table</h2> */}
            {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>             */}
            <table className="table">
                <thead>
                <tr>
                    <th>Items</th>
                    <th>Dry Cleaning</th>
                    <th>Wash & Fold</th>
                    <th>Ironing</th>
                    {/* <th>Email</th> */}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    {/* <td>john@example.com</td> */}
                </tr>
                </tbody>
            </table>
            </div>                

            </Tab>
            <Tab eventKey="Women" title="Women's">
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="Chhildren" title="Chhildren's">
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="Household" title="Household">
                
            </Tab>
        </Tabs>
        </div>
        {/* <div style={{textAlign: 'center', padding: '30px'}}>
            <img src={'/img/Dilip_QA.jpeg'} style={{width: '100%', maxWidth: '200px', height: 'auto'}}/> 
        </div> */}
        <div id="terms-conditions" style={{padding: '30px'}}>
            <h4>Terms & Conditions</h4>
            <p>
                These prices are subject to change. Up charges apply to certain fabrics, special finishing, and expedited service.
                Express Delivery will be done in 12hrs with additional charges.
            </p>
            <b>Sorry but we cannot be liable for:</b>
            <p>(a) Any item which suffers colour loss / shrinkage/ damage, during the cleaning process, whereby the manufacturer’s care label instructions have been adhered to.</p>
            <p>(b) For breakage of buttons, hooks, beads, trimmings during the course of normal processing.</p>
            <p>(c) We will always of course attempt to remove stains, however it is not always physically possible to remove all types of stains from all types of fabrics and we will not waive charges due to our inability to remove a stain.</p>
            <p>(d) Customers are requested to examine their garments before taking delivery and we are not responsible for any damage reported after delivery.</p>
            <p>Compensation for any loss or damaged at our processing facility will not be more than 10x of our service charge for purticular item or maximum of Rs 2000 whichever is lower (normal wear and tear is a fact of life, which is not covered).</p>
            <p>(e) For delay, loss or damage to any arising from unforeseen circumstances or from causes beyond control.</p>
            <p>(f) We accept no liability for garments that have missing or removed Care Labels.</p>
            <p>(g) We exercise utmost care in cleaning and processing garments entrusted to us and use such processes which, in our opinion, are best suited to the nature and conditions of each individual garment. Nevertheless, we cannot assume responsibility for inherent weaknesses or defects in materials (such as sun fading on curtains) which may result in tears or the development of small holes in fabric that are not readily apparent prior to processing. In dry-cleaning and laundering we can not guarantee against colour loss, colour bleeding, and shrinkage; or against damage to weak and tender fabrics.</p>
            <p>(h) Given the delicate nature of some leathers and suedes, all leather and suede garments are cleaned entirely at your own risk, and we do not accept any responsibility or liability for any damage or fading as a result of the dry-cleaning process.</p>
        </div>
    </div>
    </>
  )
}
