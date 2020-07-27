import React, { Component } from "react";
import "./Footer.css"
import {FaHome, FaHistory, FaAt, FaShoppingCart, FaComments} from "react-icons/fa"

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer1">
                    <p> <FaHome color='white' size='1.25rem' /><br></br>Home </p>
                </div>
                <div className="Footer2">
                    <p> <FaHistory color='white' size='1.25rem' /><br></br>History </p>
                </div>
                <div className="Footer3">
                    <p> <FaAt color='white' size='1.25rem' /><br></br>Follow </p>
                </div>
                <div className="Footer4">
                    <p> <FaComments color='white' size='1.25rem' /><br></br>Comment </p>
                </div>
                <div className="Footer5">
                    <p> <FaShoppingCart color='white' size='1.25rem' /><br></br>Cart </p>
                </div>
            </div>
        );
    }
}

export default Footer;