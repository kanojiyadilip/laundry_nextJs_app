import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";


// import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';

export default function Header({}){

    const [currentPage, setCurrentPage] = useState()

    const router = useRouter();
    // console.log("router==================================>", router);

    useEffect(()=>{
        
    // let routerr = useRouter();
        // console.log("router==============client====================>", router);
        setCurrentPage(router.pathname);
    })

    function hideHeader(e){
        console.log("eeeeeeeeeeeeeeeeeeeeee.target>", document.getElementById('basic-navbar-nav').classList);
        document.getElementById('basic-navbar-nav').classList.remove('show');
    }

    return(<>
        <div className="fixed-header">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
            <h4>Company</h4>
                {/* <img src={"https://vmspreprod.jetprivilege.com/hotels/assets/img/seo-intermiles-logo-01.svg"} alt="me" /> */}
            </Navbar.Brand>

            <span className="contact-header" onClick={(e)=>hideHeader(e)} style={{cursor: 'auto'}}>
                <Link href="tel:919833353610" style={{cursor: 'pointer'}}>
                <i className="fa fa-phone phone-icon"></i>
                </Link>
                <span className="divider" style={{fontSize:'20px', padding: '0px', fontWeight: '600'}}>
                |
                </span>
                <Link href="https://wa.me/9833353610?text=Hello%20CompanyName" style={{cursor: 'pointer'}}>
                <i className="fa fa-whatsapp whatsapp" style={{fontSize:'20px', padding: '10px 5px 0px 5px', color: '#2bb13e', cursor: 'pointer'}}><span className="cont-number">9833353610</span></i>
                </Link>
            </span>  


            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav.Link onClick={(e)=>hideHeader(e)}>
                    <Link href="/">
                        {(currentPage=='/')?<span className="selected">Home</span>:<span className="unselected">Home</span>}
                    </Link>
                </Nav.Link>

                <Nav.Link onClick={(e)=>hideHeader(e)} >
                    <Link href="/services">
                        {(currentPage=='/services')?<span className="selected">Services</span>:<span className="unselected">Services</span>}
                        
                    </Link>
                </Nav.Link>

                <Nav.Link onClick={(e)=>hideHeader(e)}>
                    <Link href="/price">
                    {(currentPage=='/price')?<span className="selected">Price List</span>:<span className="unselected">Price List</span>}
                    </Link>
                </Nav.Link>

                <Nav.Link onClick={(e)=>hideHeader(e)} >
                    <Link href="/pay"><span className="unselected">Pay</span></Link>
                </Nav.Link>

                <Nav.Link onClick={(e)=>hideHeader(e)} style={{cursor: 'auto'}}>
                    <Link href="tel:919833353610" style={{cursor: 'pointer'}}>
                    <i className="fa fa-phone phone-icon"></i>
                    </Link>
                    <span className="divider" style={{fontSize:'20px', padding: '0px', fontWeight: '600'}}>
                    |
                    </span>
                    <Link href="https://wa.me/9833353610?text=Hello%20CompanyName" style={{cursor: 'pointer'}}>
                    <i className="fa fa-whatsapp whatsapp" style={{fontSize:'20px', padding: '10px 5px 0px 5px', color: '#2bb13e', cursor: 'pointer'}}>
                        <span className="cont-number">9833353610</span>
                    </i>
                    </Link>
                </Nav.Link>  
            </Navbar.Collapse>
            </Navbar> 
        </div>
        {/* <div style={{width: '100%', height:'30px'}}></div> */}
        </>
    )

}