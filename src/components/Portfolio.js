import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel'
import excelImage1 from '../img/portfolio/excel1Image.jpg'
import image2 from '../img/portfolio/rostering/Screenshot 2020-05-18 at 20.08.34.png'
import image3 from '../img/portfolio/dspace/dspace_1.JPG'
import image4 from '../img/portfolio/koha/Koha_1.JPG'
import image5 from '../img/portfolio/camunda/Screenshot 2020-05-19 at 22.15.28.png'
import PopoutCarousel from "./PopoutCarousel";
import {Link} from "react-scroll";


class Portfolio extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        carouselTitle: '',
        carouselDisplay: false
    };


    handleStateChange = (value) => {
        this.setState(() => {
            return {
                carouselDisplay: value,
                carouselTitle: ''
            }
        });
    }

    modalPop = () => {
        if (this.state.carouselDisplay) {
            return (<div>
                <PopoutCarousel portfolioProps={this.state} handleStateChange={this.handleStateChange}/>
            </div>)
        }
    }


    handleCarouselClick = (value) => {

        switch (value) {
            case 'excel':
                this.setState(() => {
                    return {
                        carouselTitle: value,
                        carouselDisplay: true,
                    }

                })
            case 'dspace':
                this.setState(() => {
                    return {
                        carouselTitle: value,
                        carouselDisplay: true,
                    }

                })
            case 'rostering':
                this.setState(() => {
                    return {
                        carouselTitle: value,
                        carouselDisplay: true,
                    }

                })

            case 'koha':
                this.setState(() => {
                    return {
                        carouselTitle: value,
                        carouselDisplay: true,
                    }

                })
            case 'camunda':
                this.setState(() => {
                    return {
                        carouselTitle: value,
                        carouselDisplay: true,
                    }

                })

        }


    }

    render() {
        return (
            <div>
                <div id="works">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md">
                                <div className="section-title">
                                    <h2 className="section-title">Portfolio</h2>
                                    <hr/>
                                </div>
                                <p className="innerText">
                                    Below are some of the projects i have
                                    developed and also some open source applications i have developed different plugins
                                    on different scales.
                                    <br/>
                                    <b><i className="extraSmallText">Click the green box below to see individual project
                                        details</i></b>
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-8 offset-2">
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 carouselImg"
                                            src={excelImage1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <div className="container-md project-caption" title="Excel"
                                                 onClick={() => this.handleCarouselClick("excel")}>

                                                <div className="row justify-content-center">
                                                    <h3 className="project-caption-header">Excel Report Project</h3>
                                                </div>
                                                <div className="row justify-content-center">
                                                   <span
                                                       className="project-caption-subheader"> Click to view project ...</span>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <p
                                                        className="project-caption-subheader"> Project Properties</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col offset-1 text-left project-properties-text">
                                                        <ul>
                                                            <li>Excel Visual Basic</li>
                                                            <li>Dynamic Reporting</li>
                                                            <li>Excel file upload</li>
                                                            <li>Traffic light report indicator</li>
                                                            <li>Consume excel files</li>
                                                            <li>Integration with database</li>
                                                            <li>Integration with Power BI</li>

                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 carouselImg"
                                            src={image2}
                                            alt="Rostering Application"
                                        />
                                        <Carousel.Caption>
                                            <div className="container-md project-caption" title="Rostering"
                                                 onClick={() => this.handleCarouselClick("rostering")}>

                                                <div className="row justify-content-center">
                                                    <h3 className="project-caption-header">Rostering Project</h3>
                                                </div>
                                                <div className="row justify-content-center">
                                                   <span
                                                       className="project-caption-subheader"> Click to view project ...</span>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <p
                                                        className="project-caption-subheader"> Project Properties</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col offset-1 text-left project-properties-text">
                                                        <ul>
                                                            <li>Dynamic Roster</li>
                                                            <li>Employee shift</li>
                                                            <li>Open source project</li>
                                                            <li>Java backend & React Frontend</li>
                                                            <li>Optaplanner and Optaweb</li>


                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 carouselImg"
                                            src={image3}
                                            alt="Dspace Management"
                                        />
                                        <Carousel.Caption>
                                            <div className="container-md project-caption" title="dspace"
                                                 onClick={() => this.handleCarouselClick("dspace")}>

                                                <div className="row justify-content-center">
                                                    <h3 className="project-caption-header">Digital Asset Management
                                                        Project</h3>
                                                </div>
                                                <div className="row justify-content-center">
                                                   <span
                                                       className="project-caption-subheader"> Click to view project ...</span>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <p
                                                        className="project-caption-subheader"> Project Properties</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col offset-1 text-left project-properties-text">
                                                        <ul>
                                                            <li>Digital Asset Management</li>
                                                            <li>OCR Image/PDF to text</li>
                                                            <li>Task Curation</li>
                                                            <li>Scan Asset for virus</li>
                                                            <li>Plugin Development</li>
                                                            <li>Java Backend</li>

                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 carouselImg"
                                            src={image4}
                                            alt="Library Management"
                                        />
                                        <Carousel.Caption>
                                            <div className="container-md project-caption" title="koha"
                                                 onClick={() => this.handleCarouselClick("koha")}>

                                                <div className="row justify-content-center">
                                                    <h3 className="project-caption-header">Library Management</h3>
                                                </div>
                                                <div className="row justify-content-center">
                                                   <span
                                                       className="project-caption-subheader"> Click to view project ...</span>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <p
                                                        className="project-caption-subheader"> Project Properties</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col offset-1 text-left project-properties-text">
                                                        <ul>
                                                            <li>Creating Digital Library</li>
                                                            <li>Setup & Installation</li>
                                                            <li>Customizations</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 carouselImg"
                                            src={image5}
                                            alt="Camunda"
                                        />
                                        <Carousel.Caption>
                                            <div className="container-md project-caption" title="camunda"
                                                 onClick={() => this.handleCarouselClick("camunda")}>

                                                <div className="row justify-content-center">
                                                    <h3 className="project-caption-header">Camunda Process
                                                        Management</h3>
                                                </div>
                                                <div className="row justify-content-center">
                                                   <span
                                                       className="project-caption-subheader"> Click to view project ...</span>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <p
                                                        className="project-caption-subheader"> Project Properties</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col offset-1 text-left project-properties-text">
                                                        <ul>
                                                            <li>Automated Process</li>
                                                            <li>Process Management via Tasklist</li>
                                                            <li>Automated process with BPMN notations and java
                                                                listeners
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                        </Carousel.Caption>
                                    </Carousel.Item>


                                </Carousel>
                                <div className="container">
                                    {
                                        this.modalPop()
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="space"></div>
                    <div className="text-center">
                        <Link className="down-btn page-scroll" href="#"
                              activeClass="active"
                              to="about-us"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                        > <span className="fa fa-angle-down"/> </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Portfolio;