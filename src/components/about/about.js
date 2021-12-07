import React from "react";
import { Col } from "react-bootstrap";
import "./about.scss"

const About = () => {
    return (
        < Col xs="12" sm="12" md="12" lg="12">
            <div className="aboutDiv">
                <Col xs="12" sm="12" md="12" lg="12">
                    <div className="infoDiv">
                        <Col xs="12" sm="8" md="6" lg="4">
                            <div>
                                <h1>Educations</h1>
                                <div>
                                    <span className="nameSchool"> BIT - Belgrade Institute of Technology<br /></span>
                                    <span className="dateSchool"> Belgrade | Started at February 2020 <br /></span>
                                    Attended a 10 weeks long bootcamp for Front End Web
                                    Development, focusing on JavaScript<br />
                                    400+ hours of lessons/ 9 hours per day <br />
                                    Simulation of how does real life programming company
                                    work
                                </div>
                                <div>
                                    <span className="nameSchool">Faculty of Sciences | Chair of Tourism <br /></span>
                                    <span className="dateSchool">Novi Sad | Oct 2017 - Oct 2018 <br /></span>
                                </div>
                                <div>
                                    <span className="nameSchool">The College of Economy and Tourism<br /></span>
                                    <span className="dateSchool">Belgrade | Oct 2013 - Oct 2017 <br /></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="8" md="6" lg="4">
                            <div>
                                <h1>Work Experience</h1>
                                <div>
                                    <span className="nameSchool">  Front-end web development | Internship <br /></span>
                                    <span className="dateSchool">    Belgrade | Nov 2020-Jan 2021 <br /></span>
                                    3 months on Internship in small company Kortechs,
                                    working on real project.We did not continue to cooperate
                                    because they stopped internship project during the
                                    pandemic and started to work remote
                                </div>
                                <div>
                                    <span className="nameSchool">   Data Archiving Agency <br /></span>
                                    <span className="dateSchool">     Belgrade |Oct 2018-Nov 2019 <br /></span>
                                    Storing data in software
                                </div>
                                <div>
                                    <span className="nameSchool">   Tourism Organisation- Novi Sad | Internship <br /></span>
                                    <span className="dateSchool"> Novi Sad | Feb 2018 - Mart 2018 <br /></span>
                                    Representing city and giving instruction to the visitors
                                </div>
                                <div>
                                    <span className="nameSchool">    Work And Travel Student Program | Internship<br /></span>
                                    <span className="dateSchool">    SAD,Alaska | May 2016-Sep 2016</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="8" md="" lg="4">
                            <div>
                                <h1>Skills</h1>
                                <div className="skils">
                                    <p> JavaScript</p> <br />
                                    <p> React</p><br />
                                    <p>Redux</p><br />
                                    <p>HTML5</p><br />
                                    <p>CSS</p><br />
                                    <p>SCSS</p><br />
                                    <p>BOOTSTRAP</p><br />
                                    <p>GIT</p><br />
                                </div>
                            </div>
                        </Col>

                    </div>
                </Col>
            </div >
        </Col >
    )
}

export default About