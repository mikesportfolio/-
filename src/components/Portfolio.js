import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

class Portfolio extends Component {

    render() {
        return (
            <div>
                <div id="works">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-title">
                                    <h2>Our Latest Projects</h2>
                                    <hr/>
                                </div>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident.</p>
                            </div>
                        </div>
                        <div className="space"></div>
                    </div>

                    <div className="container">
                        <Carousel>
                            <div>
                                <img src="../img/portfolio/01.jpg"/>
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src="../img/portfolio/02.jpg"/>
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="../img/clients/04.png"/>
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </div>


                    <div className="space"></div>
                    <div className="text-center">
                        <a href="#" className="btn read-more-btn">Check on Dribbble</a>
                        <br/>
                        <a href="#about-us" className="down-btn page-scroll"><span className="fa fa-angle-down"></span></a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Portfolio;