import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ENV_HOME, ENV_PROCESO, ENV_RAM, ENV_CPU } from '../Config/env'
import './css/Navbar.css';

function Navbar(props){

    const [isActivate0, setIsActivate0] = useState(true);
    const [isActivate1, setIsActivate1] = useState(false);
    const [isActivate2, setIsActivate2] = useState(false);
    const [isActivate3, setIsActivate3] = useState(false);

    return(
         <div className="navbar">

            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNav">
                         <ul className="navbar-nav mx-left">

                            <li className="">
                            <Link  
                                className={`${ isActivate0 ? "active nav-activate" : "active nav-deactivate"}`} 
                                to={ENV_HOME} 
                                onClick={ () => {
                                    setIsActivate0(true);
                                    setIsActivate1(false);
                                    setIsActivate2(false);
                                    setIsActivate3(false);
                                }}  
                            > S1P2 </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link 
                                className={`${ isActivate1 ? "active nav-activate" : "active nav-deactivate"}`} 
                                to={ENV_PROCESO}

                                onClick={ () => {
                                    setIsActivate0(false);
                                    setIsActivate1(true);
                                    setIsActivate2(false);
                                    setIsActivate3(false);
                                }} 
                                > Procesos </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className={`${ isActivate2 ? "active nav-activate" : "active nav-deactivate"}`} 
                                to={ENV_CPU}

                                onClick={ () => {
                                    setIsActivate0(false);
                                    setIsActivate1(false);
                                    setIsActivate2(true);
                                    setIsActivate3(false);
                                }} 
                                > CPU </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className={`${ isActivate3 ? "active nav-activate" : "active nav-deactivate"}`} 
                                to={ENV_RAM}

                                onClick={ () => {
                                    setIsActivate0(false);
                                    setIsActivate1(false);
                                    setIsActivate2(false);
                                    setIsActivate3(true);
                                }} 
                                > RAM </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <center>
            <h1 className="footer">________________________________________________________________________________________________________________________________________________________________________________________</h1>
            </center>
            <br />
                    
        </div> 
    );

    

}

export default Navbar;