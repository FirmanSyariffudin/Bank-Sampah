import React, {Component} from 'react';
import imgLogo from "./img-logo";

class Menu extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <div className="Logo">
                        <img className="img-logo" src={imgLogo} alt="img-logo"></img>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Menu;