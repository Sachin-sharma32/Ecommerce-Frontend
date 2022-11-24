import { Fragment } from "react";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <section className="footer bg-main-lightest">
            <div className='footer__container pt-1'>
                <a href="#">
                    <Image
                        src="/img/omnifood-logo.png"
                        width="150px"
                        height="20px"
                        alt="site logo"
                    />
                </a>
                <div className=" flex gap-4">
                    <a href="#">
                        <InstagramIcon />
                    </a>
                    <a href="#">
                        <FacebookIcon />
                    </a>
                    <a href="#">
                        <TwitterIcon />
                    </a>
                </div>
                <div className='footer__text'>
                    Copyright &copy; 2022 by Omnifood, Inc. All rights reserved.
                </div>
            </div>
            <div className='footer__container'>
                <h4 className=" font-bold text-main-gray">Contact us</h4>
                <address className='footer__text'>A-23, Bal Nagar, Kartarpura, Jaipur 302006</address>
                <p className='footer__text text-xs'>91+ 6367212438 <br /> sachin2sharma001@gmail.com</p>
            </div>
            <div className='footer__container'>
                <h4 className=" font-bold text-main-gray">Contact us</h4>
                <a className='footer__text' href="#">Create account</a> <a className="footer__text" href="#">Sign in</a>
                <a className='footer__text' href="#">IOS app</a> <a className="footer__text" href="#">Android app</a>
            </div>
            <div className='footer__container'>
                <h4 className=" font-bold text-main-gray">Company</h4>
                <a className='footer__text' href="#">About Omnifood</a>
                <a className='footer__text' href="#">For Business</a>
                <a className='footer__text' href="#">Cooking partners</a>
                <a className='footer__text' href="#">Careers</a>
            </div>
            <div className='footer__container'>
                <h4 className=" font-bold text-main-gray">Resources</h4>
                <a className='footer__text' href="#">Recipe directory</a>
                <a className='footer__text' href="#">Help center</a>
                <a className='footer__text' href="#">Help center</a>
                <a className='footer__text' href="#">Privacy & terms</a>
            </div>
        </section>
    );
};

export default Footer;
