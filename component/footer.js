import Link from 'next/link'

export default function Footer({}){
    return(
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-6" style={{padding:''}}>
                        <h6>Contact Us</h6>
                        <p className="text-justify" style={{padding: '0 80px 0 0'}}>
                            Near, Golibar Rd, Sarvodayan Hospital, L.B.S Marg, Ghatkopar West, Mumbai, Maharashtra 400087</p>
                        {/* <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p> */}
                        <i className="fa fa-phone phone-icon"></i><span> +91 9833353610</span>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Usefuk links</h6>
                        <ul className="footer-links">
                        <li><Link href="/?scroll=book"><span className="unselected">Book</span></Link></li>
                        <li><Link href="/price"><span className="unselected">price</span></Link></li>
                        <li><Link href="/pay"><span className="unselected">Pay</span></Link></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            {/* <li><Link href="/?scroll=book"><span className="unselected">Book</span></Link></li> */}
                            <li><Link href="/?scroll=process"><span className="unselected">Our Process</span></Link></li>
                            <li><Link href="/?scroll=about-us"><span className="unselected">About us</span></Link></li>
                            {/* <li><Link href="/price"><span className="unselected">price</span></Link></li> */}
                            <li><Link href="/price?scroll=terms-conditions"><span className="unselected">Terms & Conditions</span></Link></li>
                            {/* <li><Link href="/pay"><span className="unselected">Pay</span></Link></li> */}

                        {/* <li><a href="http://scanfcode.com/about/">About Us</a></li>
                        <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                        <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                        <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li> */}
                        </ul>
                    </div>
                    </div>
                    {/* <hr> */}
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by  
                    <a href="#"> Whitecoller</a>.
                        </p>
                    </div>

                    {/* <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                        </ul>
                    </div> */}
                    </div>
                </div>
            </footer>
    )
}