import Header from '../component/header';
import Footer from '../component/footer';
import React, { useState, useEffect } from "react";
import Zoom from 'react-reveal/Zoom';
import {useRouter} from 'next/router';

export default function Layout({ children }){
    const router = useRouter();

    useEffect(()=>{
      let pid = router.query;
      console.log("pid==============pid====================>", pid);
      document.getElementById(pid.scroll)?setTimeout(()=>{
        // document.getElementById(pid.scroll).scrollIntoView();

        var element = document.getElementById(pid.scroll)
        var headerOffset = 65;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });  

        },50):'';
    })
    useEffect(()=>{

                //Get the button
        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }

    })

    
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            window.scroll({top: 0, left: 0, behavior: 'smooth' }) 
        }

    return(
        <div style={{width: '100%'}}>
            <Header />
            <div style={{width: '100%'}}>
                <div style={{paddingTop: '65px'}}>
                    {children}
                    <Zoom>
                    <button onClick={(e) => topFunction()} id="myBtn" title="Go to top">
                        <span></span>
                    </button>
                    </Zoom>

                    {/* <button onClick={(e) => topFunction()} id="myBtnMore" title="Go to top">
                        <span></span>
                    </button> */}

                    <Footer />
                </div>
            </div>
        </div>
    )
}    