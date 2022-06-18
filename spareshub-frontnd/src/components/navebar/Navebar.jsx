import React from 'react'
import "./navebar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBagShopping} from "@fortawesome/free-solid-svg-icons"
function Navebar() {
  return (
    <div>
        <div className='page-header'>
            <div className='panel wrapper'>
                <div className='panel header'>
                    <ul className='links'>
                        <li className='welcome'>WELCOME TO SPARESHUB.COM</li>
                        <li className='contact'>CONTACT US</li>
                        <li></li>
                        <li className='sing'>SIGN OUT</li>
                        <li className='account'>CREATE AN ACCOUNT</li>
                    </ul>
                </div>
            </div>
            <div className='content'>
                    <div className='logo'>
                        <img src='https://spareshub.com/pub/media/logo/stores/1/200x50xlogo.png.pagespeed.ic.3_mBb67eog.webp'></img>
                    </div>
                    <div className='search'>
                        <input type="text" placeholder="Search entire store here..."></input>
                    </div>
                    <div className='details'>
                        <ul className='call-icon'>
                            <li>Call us -919307901479</li>
                            <li>WhatsApp - 919307901479</li>
                            <li>Email-us -  care@spareshub.com</li>
                        </ul>
                    </div>
                    <div className='cart'>
                    <FontAwesomeIcon style={{color:"blue",height:"40px"}} icon={faBagShopping} />
                    </div>
            </div>
            <div className='menu'>
                <ul>
                    <li>
                        BRANDS
                        <div className='sub-manu-1'>
                            <div className='row'>
                                <div className='left-block'>
                                    <div className='imag-box'>
                                        <img src="https://spareshub.com/pub/media/wysiwyg/xbrandnav.png.pagespeed.ic.66n8dmBy5h.webp" alt="" />
                                    </div>
                                    <br />
                                    <br />
                                    <h3>Car Brands</h3>
                                    <p>Get replacement parts for any car brand and model at SparesHub.com...</p>
                                </div>
                                <div className='right-block'>
                                    <ul>
                                        <li>AUDI</li>
                                        <li>BMW</li>
                                        <li>CHEVERLOET</li>
                                        <li>DAEWOO</li>
                                        <li>DATSUN</li>
                                        <li>FIAT</li>
                                        <li>FORCE MOTER</li>
                                        <li>FORD</li>
                                        <li>HONDA</li>
                                        <li>ICML</li>
                                        <li>JAGUAR</li>
                                        <li>MINI</li>
                                        <li>MAHINDRA</li>
                                        <li>MARUTI</li>
                                        <li>MERCEDES</li>
                                        <li>MITSUBISHI</li>
                                        <li>NISSAN</li>
                                        <li>OPEL</li>
                                        <li>PREMIER</li>
                                        <li>RENAULT</li>
                                        <li>SKODA</li>
                                        <li>TATA</li>
                                        <li>TOYOTA</li>
                                        <li>MAHINDRA</li>
                                        <li>GENERAL</li>
                                        <li>VOLKSWAGAN</li>
                                        <li>VOLVO</li>
                                        <li>ALL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>CATEGORIES
                    <div className='sub-manu-1'>
                            <div className='row'>
                                <div className='left-block'>
                                    <div className='imag-box'>
                                        <img src="https://spareshub.com/pub/media/wysiwyg/xcategory_megamenu.png.pagespeed.ic.1v0mmxg-32.webp" alt="" />
                                    </div>
                                    <br />
                                    <br />
                                    <h3>Car Brands</h3>
                                    <p>Get replacement parts for any car brand and model at SparesHub.com...</p>
                                </div>
                                <div className='right-block'>
                                    <ul>
                                        <li>BUSHES</li>
                                        <li>BELTS</li>
                                        <li>BODY PARTS</li>
                                        <li>BRAKING</li>
                                        <li>CLUTCH</li>
                                        <li>ELECTRONICS</li>
                                        <li>ENGINE</li>
                                        <li>FILTER</li>
                                        <li>STEERING</li>
                                        <li>HEATING</li>
                                        <li>LIGHTING</li>
                                        <li>LUBES</li>
                                        <li>SENSORS</li>
                                        <li>SUSPENSION</li>
                                        <li>TRANSMISSION</li>
                                        <li>TURBOCHARGE</li>
                                        <li>UNKNOWN</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>MANUFACTURERS
                    <div className='sub-manu-1'>
                            <div className='row'>
                                <div className='right-block'>
                                    <ul>
                                        <li>BRAVO</li>
                                        <li>BANCO</li>
                                        <li>FORD GENUINE</li>
                                        <li>BANDO</li>
                                        <li>BORGWARNER</li>
                                        <li>BOSCH</li>
                                        <li></li>
                                        <li>FORD</li>
                                        <li>HONDA</li>
                                        <li>ICML</li>
                                        <li>JAGUAR</li>
                                        <li>MINI</li>
                                        <li>MAHINDRA</li>
                                        <li>MARUTI</li>
                                        <li>MERCEDES</li>
                                        <li>MITSUBISHI</li>
                                        <li>NISSAN</li>
                                        <li>OPEL</li>
                                        <li>PREMIER</li>
                                        <li>RENAULT</li>
                                        <li>SKODA</li>
                                        <li>TATA</li>
                                        <li>TOYOTA</li>
                                        <li>MAHINDRA</li>
                                        <li>GENERAL</li>
                                        <li>VOLKSWAGAN</li>
                                        <li>VOLVO</li>
                                        <li>ALL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>FRANCHISE</li>
                    <li>CAREERS</li>
                </ul>

            </div>

        </div>
    </div>
   
  )
}

export default Navebar