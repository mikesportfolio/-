import React from "react";
import {Link} from "react-scroll";

const Experiences = () => {

    return (
        <>
            <div id="about-us">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md">
                            <div className="section-title">
                                <h2 className="section-title">Experiences</h2>
                                <hr/>
                            </div>
                            <p className="innerText"></p>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="row">
                        <div className="col-md-12 col-sm-10">
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="team">
                                        <h4>Megabyte Limted</h4>
                                        <p className="small"> Java Software Developer</p>
                                        <p className="small"><i> Nov 2019 - Present</i></p>
                                        <p className="small"><i> Malta</i></p>

                                        <hr/>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="team">
                                        <h4>Sword Group</h4>
                                        <p className="small"> Consultant (VB & Excel)</p>
                                        <p className="small"><i> Oct 2019 - Feb 2020</i></p>
                                        <p className="small"><i> Greece</i></p>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="team">
                                        <h4>Global Capital Insurance</h4>
                                        <p className="small"> Solutions and Software Developer</p>
                                        <p className="small"><i> Nov 2018 - Nov 2019</i></p>
                                        <p className="small"><i> Malta</i></p>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="team">
                                        <h4>Tek-Experts</h4>
                                        <p className="small">Technical Team Lead & Level 2</p>
                                        <p className="small"><i> Mar 2017 - Nov 2018</i></p>
                                        <p className="small"><i> Malta</i></p>
                                        <hr/>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4">
                                    <div className="team">
                                        <h4>Aurea Software</h4>
                                        <p className="small">Customer Support Engineer (L2)</p>
                                        <p className="small"><i> Mar 2016 - Aug 2016</i></p>
                                        <p className="small"><i> Austin, TX </i></p>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="team">
                                        <h4>Senior Software Devloper</h4>
                                        <p className="small"> GNL Systems</p>
                                        <p className="small"><i> Oct 2012 - Mar 2016</i></p>
                                        <p className="small"><i> Lagos, Nigeria</i></p>
                                        <hr/>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="text-center">

                        <Link className="down-btn page-scroll" href="#"
                              activeClass="active"
                              to="contact"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                        > <span className="fa fa-angle-down"/> </Link>

                    </div>

                </div>
            </div>
        </>)
}

export default Experiences;