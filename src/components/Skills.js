import React from "react"
import ProgressBar from 'react-animated-progress-bar'
import springIco from "../img/skills/springicon_UFY_icon.ico"
import hibernateIco from "../img/skills/hibernate_ZZp_icon.ico"
import springbootIco from "../img/skills/springboot_3Tw_icon.ico"
import restApiIco from "../img/skills/restapi_KZy_icon.ico"
import camundaIco from "../img/skills/camunda_uRv_icon.ico"
import reactJs from "../img/skills/ezgif.com-resize.gif"
import vueJS from "../img/skills/vue_resized.gif"
import angularIco from "../img/skills/Angular_ezgif.com-resize.gif"
import reduxIco from "../img/skills/reduximg_FWv_icon.ico"
import microServicesIco from '../img/skills/microservices_Le6_icon.ico'
import activeMqIco from '../img/skills/activemq_stack_220x234_IQS_icon.ico'
import fuseEsbIco from '../img/skills/fuseesb_vzW_icon.ico'
import awsIco from '../img/skills/aws_logo_smile_1200x630_Ids_icon.ico'
import 'react-sweet-progress/lib/style.css'
import {Progress} from 'react-sweet-progress'
import javaIco from '../img/skills/javaicon_PFz_icon.ico'
import groovyIco from '../img/skills/groovey_rpw_icon.ico'
import cProgramming from '../img/skills/c_programing_language_Jvr_icon.ico'
import excelVB from '../img/skills/excelvb_wQj_icon.ico'
import javascriptIco from '../img/skills/javascriptimage_Tq4_icon.ico'
import htmlCssIco from '../img/skills/htmlcssimg_9Wf_icon.ico'
import typescriptIco from '../img/skills/typescriptimg_HSp_icon.ico'
import sqlIco from '../img/skills/sqlimg_O45_icon.ico'
import {Link} from "react-scroll";


const Skills = () => {

    const myRef = document.querySelector('.scrollable-div')

    return (
        <div>
            <div id="services">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md">
                            <div className="section-title">
                                <h2 className="section-title">Stacks and languages</h2>
                                <hr/>
                            </div>
                            <p className="innerText">The following are few of the technology stacks
                                i have worked with
                                and feel very
                                comfortable using, but not limited to:</p>
                        </div>
                    </div>

                    <div className="space"></div>

                    <div className="row">

                        <div className="col-md-5 service shadow">

                            <div className="row">
                                <div className="col-1">
                                    <img src={javaIco} className="innerspace" alt="java"/>
                                </div>
                                <span className="col-xs-1"><h4
                                    className="text-left fa innerspace">java</h4></span>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Progress
                                        percent={78}
                                        theme={{
                                            success: {
                                                symbol: '🏄‍',
                                                color: 'rgb(223, 105, 180)'
                                            },
                                            active: {
                                                symbol: '78%',
                                                color: '#79fb00'
                                            },
                                            default: {
                                                symbol: '😱',
                                                color: '#8cfb00'
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="row my-2"></div>
                            <div className="row">
                                <div className="col-1">
                                    <img src={groovyIco} className="innerspace" alt="Groovy"/>
                                </div>
                                <span className="col-xs-1"><h4
                                    className="text-left fa innerspace">Groovy</h4></span>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Progress
                                        percent={72}
                                        theme={{
                                            success: {
                                                symbol: '🏄‍',
                                                color: 'rgb(223, 105, 180)'
                                            },
                                            active: {
                                                symbol: '72%',
                                                color: '#79fb00'
                                            },
                                            default: {
                                                symbol: '😱',
                                                color: '#8cfb00'
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="row my-2"></div>
                            <div className="row">
                                <div className="col-1">
                                    <img src={cProgramming} className="innerspace" alt="C"/>
                                </div>
                                <span className="col-xs-1"><h4
                                    className="text-left fa innerspace">C</h4></span>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Progress
                                        percent={67}
                                        theme={{
                                            success: {
                                                symbol: '🏄‍',
                                                color: 'rgb(223, 105, 180)'
                                            },
                                            active: {
                                                symbol: '67%',
                                                color: '#79fb00'
                                            },
                                            default: {
                                                symbol: '😱',
                                                color: '#8cfb00'
                                            }
                                        }}
                                    />
                                </div>
                            </div>


                            <div className="row my-2"></div>
                            <div className="row">
                                <div className="col-1">
                                    <img src={excelVB} className="innerspace" alt="Excel Visual Basic"/>
                                </div>
                                <span className="col-xs-1 col-md-8 text-left"><h4
                                    className="text-left fa innerspace">Excel & Visual Basic</h4></span>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Progress
                                        percent={78}
                                        theme={{
                                            success: {
                                                symbol: '🏄‍',
                                                color: 'rgb(223, 105, 180)'
                                            },
                                            active: {
                                                symbol: '78%',
                                                color: '#79fb00'
                                            },
                                            default: {
                                                symbol: '😱',
                                                color: '#8cfb00'
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2"></div>

                        <div className="col-md-4 service shadow">

                            <div className="row">
                                <div className="col-1">
                                    <img src={javascriptIco} className="innerspace" alt="Javascript"/>
                                </div>
                                <span className="col-xs-1"><h4
                                    className="text-left fa innerspace">Javascript</h4></span>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Progress
                                        percent={75}
                                        theme={{
                                            success: {
                                                symbol: '🏄‍',
                                                color: 'rgb(223, 105, 180)'
                                            },
                                            active: {
                                                symbol: '75%',
                                                color: '#79fb00'
                                            },
                                            default: {
                                                symbol: '😱',
                                                color: '#8cfb00'
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="row my-2"></div>
                            <div className="row">
                                <div className="col-1">
                                    <img src={htmlCssIco} className="innerspace" alt="Html Css Boostrap"/>
                                </div>
                                <span className="col-xs-1 col-md-10 text-left"><h4
                                    className="text-left fa innerspace">HTML & css & bootstrap</h4></span>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Progress
                                        percent={78}
                                        theme={{
                                            success: {
                                                symbol: '🏄‍',
                                                color: 'rgb(223, 105, 180)'
                                            },
                                            active: {
                                                symbol: '78%',
                                                color: '#79fb00'
                                            },
                                            default: {
                                                symbol: '😱',
                                                color: '#8cfb00'
                                            }
                                        }}
                                    />
                                </div>
                            </div>


                            <div className="row my-2"></div>
                            <div className="row">
                                <div className="col-1">
                                    <img src={typescriptIco} className="innerspace" alt="Typescript"/>
                                </div>
                                <span className="col-xs-1"><h4
                                    className="text-left fa innerspace">Typescript</h4></span>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Progress
                                        percent={78}
                                        theme={{
                                            success: {
                                                symbol: '🏄‍',
                                                color: 'rgb(223, 105, 180)'
                                            },
                                            active: {
                                                symbol: '78%',
                                                color: '#79fb00'
                                            },
                                            default: {
                                                symbol: '😱',
                                                color: '#8cfb00'
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="row my-2"></div>
                            <div className="row">
                                <div className="col-1">
                                    <img src={sqlIco} className="innerspace" alt="SQL"/>
                                </div>
                                <span className="col-xs-1"><h4
                                    className="text-left fa innerspace">SQL</h4></span>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Progress
                                        percent={80}
                                        theme={{
                                            success: {
                                                symbol: '🏄‍',
                                                color: 'rgb(223, 105, 180)'
                                            },
                                            active: {
                                                symbol: '80%',
                                                color: '#79fb00'
                                            },
                                            default: {
                                                symbol: '😱',
                                                color: '#8cfb00'
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="space"></div>
                    <div className="row">
                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="75" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={springIco} className="innerspace" alt="spring"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Spring</h4></div>

                                </div>

                            </div>
                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="78" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={hibernateIco} className="innerspace" alt="hibernate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Hibernate</h4></div>

                                </div>

                            </div>
                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="85" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={springbootIco} className="innerspace" alt="springboot"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Spring boot</h4></div>

                                </div>

                            </div>
                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="90" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={restApiIco} className="innerspace" alt="Rest API"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Rest API</h4></div>

                                </div>

                            </div>
                        </div>


                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="75" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={reactJs} className="innerspace" alt="React JS"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">React js</h4></div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="68" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={vueJS} className="innerspace" alt="Vue JS"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Vue js</h4></div>

                                </div>

                            </div>

                        </div>
                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="45" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={angularIco} className="innerspace" alt="Angular JS"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Angular Js</h4></div>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="70" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={reduxIco} className="innerspace" alt="Redux"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Redux</h4></div>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="70" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={reduxIco} className="innerspace" alt="Node"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Node js</h4></div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="70" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={reduxIco} className="innerspace" alt="webpack"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Webpack</h4></div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="77" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={microServicesIco} className="innerspace" alt="Microservices"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Micro services</h4></div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="70" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={microServicesIco} className="innerspace" alt="RDBMS NOSQL"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 title="Oracle MySQL FireBase" className="fa innerspace">RDBMS & NOSQL</h4>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="76" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row" title="ACTIVE MQ KAFKA">
                                    <div className="col">
                                        <img src={activeMqIco} className="innerspace" alt="Message Broker"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 title="ACTIVE MQ KAFKA" className="fa innerspace">Message Broker</h4></div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="68" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={fuseEsbIco} className="innerspace" alt="Message Broker"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 title="FUSE ESB" className="fa innerspace">OSGi</h4></div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="65" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={camundaIco} className="innerspace" alt="Camunda"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 className="fa innerspace">Camunda</h4></div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="85" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={fuseEsbIco} className="innerspace" alt="Message Broker"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 title="LDAP AUTH SSO" className="fa innerspace">Security Authentication</h4>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="70" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={awsIco} className="innerspace" alt="AWS"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 title="AWS" className="fa innerspace">Cloud Infrastructure (AWS)</h4>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-2 justify-content-center col-sm-3 col-xs-12">
                            <div className="service shadow">
                                <span className="row ">
                                   <ProgressBar width="180px" trackWidth="15" percentage="70" scrollArea={myRef}
                                                defColor={{
                                                    fair: 'orangered',
                                                    good: 'yellow',
                                                    excellent: '#79fb00',
                                                    poor: 'red',
                                                }}
                                   />
                               </span>

                                <div className="row">
                                    <div className="col">
                                        <img src={fuseEsbIco} className="innerspace" alt="Active Directory"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h4 title="Active Directory" className="fa innerspace">Active Directory</h4>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>

                    <Link className="down-btn page-scroll" href="#"
                          activeClass="active"
                          to="works"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                    > <span className="fa fa-angle-down"/> </Link>

                </div>
            </div>
            < /div>
                )
                }

                export default (Skills);