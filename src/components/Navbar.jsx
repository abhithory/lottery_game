import React from 'react'
import { Link } from 'react-router-dom';

import "../css/Navbar.css"
export default function Navbar(props) {

    const { ConnectAccount, account } = props;

    return (
        <nav className='navbar  navbar-expand-xl navbar-dark glassNav'>
            <div className="container-fluid px-md-5">
                <Link className="navbar-brand mx-xl-0 mx-auto " to="/">
                    {/* <img className="ml-xl-0 ml-5 img-fluid" src="img/logo2.png" alt="" /> */}
                    <h3>Lottery</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="fontPara navbar-nav me-auto ms-auto mb-2 mb-lg-0 ">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/how-to-play">
                                <h4 className="nav-link">How to play</h4>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/winner-history">
                                <h4 className="nav-link">Winner History</h4>
                            </Link>
                        </li>

                    </ul>
                    <button onClick={ConnectAccount} className="btn btn-dark btn-lg">{account ? `${account.substring(0, 3)}...${account.substring(account.length - 4, account.length)} ` : 'Connect'}</button>
                </div>

            </div>
        </nav>
    )
}
