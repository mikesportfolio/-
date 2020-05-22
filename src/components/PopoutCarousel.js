import React, {Component} from "react";
import '../css/modalstyle.css'
import Carousel from "react-bootstrap/Carousel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import excelimage11 from "../img/portfolio/excel/new_excel-1.png"
import excelimage22 from "../img/portfolio/excel/new_excel-2.png"
import excelimage33 from "../img/portfolio/excel/new_excel-3.png"
import excelimage44 from "../img/portfolio/excel/new_excel-4.png"
import excelImage1 from "../img/portfolio/excel/excel1Image.jpg";
import excelImage2 from "../img/portfolio/excel/screenshot_2020_05_1_cfI2U.jpg"
import excelImage3 from "../img/portfolio/excel/screenshot_2020_05_1_Qxk47.jpg"
import excelImage4 from "../img/portfolio/excel/Webp.net-compress-image copy.jpg"
import rostering1 from "../img/portfolio/rostering/Screenshot 2020-05-18 at 20.14.21.png"
import rostering2 from "../img/portfolio/rostering/Screenshot 2020-05-18 at 20.08.34.png"
import rostering3 from "../img/portfolio/rostering/Screenshot 2020-05-18 at 20.12.56.png"
import rostering4 from "../img/portfolio/rostering/Screenshot 2020-05-18 at 20.13.20.png"
import dspace1 from "../img/portfolio/dspace/dspace_1.JPG"
import dspace2 from "../img/portfolio/dspace/dspace_2.JPG"
import dspace3 from "../img/portfolio/dspace/dspace_3.JPG"
import dpsace4 from "../img/portfolio/dspace/dspace_4.JPG"
import koha1 from "../img/portfolio/koha/Koha_1.JPG"
import koha2 from "../img/portfolio/koha/Koha_2.JPG"
import koha3 from "../img/portfolio/koha/Koha_3.JPG"
import camunda1 from "../img/portfolio/camunda/Screenshot 2020-05-19 at 22.14.24.png"
import camunda2 from "../img/portfolio/camunda/Screenshot 2020-05-19 at 22.15.28.png"
import camunda3 from "../img/portfolio/camunda/Screenshot 2020-05-19 at 22.16.59.png"
import camunda4 from "../img/portfolio/camunda/Screenshot 2020-05-19 at 22.19.20.png"
import camunda5 from "../img/portfolio/camunda/Screenshot 2020-05-19 at 22.20.01.png"

class PopoutCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopUp: this.props.portfolioProps.carouselDisplay
        }
    }

    closePopup = () => {

        this.setState((prevState) => {
            return {showPopUp: !prevState.showPopUp}
        });
        this.props.handleStateChange(false);

    }


    render() {
        const showHideClassName = this.state.showPopUp ? "modal display-block" : "modal display-none"
        return (
            <div>
                <div className={showHideClassName}>
                    <section className="modal-main">
                        <div className="row">
                        <span className="col offset-11 closeIconCarousel" onClick={this.closePopup}>
                            <FontAwesomeIcon icon={faWindowClose}/>
                        </span>
                        </div>
                        <div
                            style={this.props.portfolioProps.carouselTitle == "excel" ? {display: "block"} : {display: "none"}}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={excelimage11}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={excelimage22}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={excelImage3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={excelImage4}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={excelimage33}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={excelimage44}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div
                            style={this.props.portfolioProps.carouselTitle == "rostering" ? {display: "block"} : {display: "none"}}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={rostering1}
                                        alt="Rostering"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={rostering2}
                                        alt="Employee shift"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={rostering3}
                                        alt="optaPlanner"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={rostering4}
                                        alt="shift roster"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div
                            style={this.props.portfolioProps.carouselTitle == "dspace" ? {display: "block"} : {display: "none"}}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={dspace1}
                                        alt="Asset Management"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={dspace2}
                                        alt="Curate Assets"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={dspace3}
                                        alt="Content Repository"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={dpsace4}
                                        alt="Bitstream"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div
                            style={this.props.portfolioProps.carouselTitle == "koha" ? {display: "block"} : {display: "none"}}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={koha1}
                                        alt="Remote Library"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={koha2}
                                        alt="Online Library"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={koha3}
                                        alt="Library"
                                    />

                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div
                            style={this.props.portfolioProps.carouselTitle == "camunda" ? {display: "block"} : {display: "none"}}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={camunda1}
                                        alt="Camunda"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={camunda2}
                                        alt="Process Automation"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={camunda3}
                                        alt="Tasklist"
                                    />

                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={camunda4}
                                        alt="Cockpit"
                                    />

                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 carouselImg"
                                        src={camunda5}
                                        alt="BPMN Diagram"
                                    />

                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <button onClick={this.closePopup}>close</button>
                    </section>
                </div>

            </div>

        )
    }
}

export default PopoutCarousel;