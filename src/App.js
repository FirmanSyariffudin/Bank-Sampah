import React, { Component } from "react";
import {  HashRouter } from "react-router-dom";
import "./App.css"
import imgLogo from "./img-logo/img-logo.png";
import anut from "./img-logo/ANUT.png";
import basah from "./img-logo/BASAH.png";
import merchant from "./img-logo/MERCHANT.png";
import mitraPengepul from "./img-logo/MITRA PENGEPUL.png";
import franchise from "./img-logo/FRANCHISE.png";
import carbon from "./img-logo/CARBON.png";
import replanting from "./img-logo/REPLANTING.png";
import terapi from "./img-logo/TERAPI.png";
import MallSampah from "./img-logo/MALL SAMPAH.png";
import rupiah from "./img-logo/RUPIAH.png";
import crowtdhFunding from "./img-logo/CROWTDH FUNDING.png";
import investor from "./img-logo/INVESTOR.png";
import Footer from "./Footer";


class App extends Component {
    render() {
        return (
            <HashRouter>
                {/* <div className="container">
                    <div className="title">
                        <div className="title-text">
                            <div className="title-box"></div>
                            &nbsp;  bank sampah
                        </div>
                    </div>
                    <div className="auth-notice-bottom-box">
                        <div className="auth-notice-bottom-box-background">
                            <div className="white-button-on-white">Log In</div>
                            <div className="blue-button-on-white">Join Us</div>
                        </div>
                    </div>
                    <div className="join-us">
                        Join Us to<br /><b>Make Earth Cleaner<br />In Smarter Way</b>
                        <div className="white-button-on-blue">Learn How</div>
                    </div>
                    <div className="background">
                        <div className="bg-circle"></div>
                        <img className="illust" src={illust} alt="illust"></img>
                    </div>
                </div> */}
                    <Footer/>
                <div className="Menu">
                    <div className="logo" >
                        <img className="img-logo" src={imgLogo} alt="img-logo"></img>
                    </div>

                    <div className="sub-menu" >
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={anut} alt="img-logo"></img><p>ANUT</p></div>
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={basah} alt="img-logo"></img><p>Basah</p></div>
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={merchant} alt="img-logo"></img><p>Merchant</p></div>
                    </div>
                    <div className="sub-menu" >
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={mitraPengepul} alt="img-logo"></img><p>Mitra Pengepul</p></div>
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={franchise} alt="img-logo"></img><p>Franchise</p></div>
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={carbon} alt="img-logo"></img><p>Carbon</p></div>
                    </div>
                    <div className="sub-menu" >
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={replanting} alt="img-logo"></img><p>Replanting</p></div>
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={terapi} alt="img-logo"></img><p>Terapi</p></div>
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={MallSampah} alt="img-logo"></img><p>Mall Sampah</p></div>
                    </div>
                    <div className="sub-menu" >
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={rupiah} alt="img-logo"></img><p>Rupiah</p></div>
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={crowtdhFunding} alt="img-logo"></img><p>Crowtdh Funding</p></div>
                        <div className="pg-sub-menu"><img className="img-sub-menu" src={investor} alt="img-logo"></img><p>Investor</p></div>
                    </div>
                    <div style={{height:"90px"}}></div>
                </div>
            </HashRouter>
        );
    }
}

export default App;