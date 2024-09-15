import React from 'react';
import '../components/static/portfolio.css'
import BrandIdentity from './static/images/portfolio/Baps - Brand Identity Cover 1.png'
import CoverMinifurs from './static/images/portfolio/Cover Minifurs.png'
import CarServices from './static/images/portfolio/Car Services.png'
import Plantation from './static/images/portfolio/Plantation.png'
import SigmaOutside from './static/images/portfolio/Sigma Outside.png'
import MobileDesign from './static/images/portfolio/Mobile Design.png'
import Dashboard from './static/images/portfolio/Dashboard.png'


const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="text-center">PORTFOLIO</h2>
                <div className="row grid">


                    <div className="col-lg-4 col-md-6 grid-item marketing">
                        <div className="single-portfolio-item">
                            <img src={BrandIdentity} alt="" className="img-fluid" />
                            <div className="overlay text-center">
                                <div className="content">
                                    <h3>Baps</h3>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/design/NXyIJ0ynvAhAry41VugIU1/Baps---Brand-Identity?node-id=2-603&t=ZSuJmrE6Dy3MkkJh-1">
                                        <span className="fa fa-eye"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 grid-item design">
                        <div className="single-portfolio-item">
                            <img src={CoverMinifurs} alt="" className="img-fluid" />
                            <div className="overlay text-center">
                                <div className="content">
                                    <h3>Furni</h3>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/design/D8msW7pyMNIYCX5keulfg9/AI-Furniture-E-commerce?node-id=0-1&t=mSZsXWJPgeiQgqmd-1">
                                        <span className="fa fa-eye"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 grid-item design">
                        <div className="single-portfolio-item">
                            <img src={MobileDesign} alt="" className="img-fluid" />
                            <div className="overlay text-center">
                                <div className="content">
                                    <h3>Explora</h3>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/design/MnfYCIsztMOPwnj5wnHIcv/Explora---Travel-Tickets-Booking-App?node-id=0-1&t=lEWgvbjDlbIU5F69-1">
                                        <span className="fa fa-eye"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 grid-item design">
                        <div className="single-portfolio-item">
                            <img src={CarServices} alt="" className="img-fluid" />
                            <div className="overlay text-center">
                                <div className="content">
                                    <h3>Car Cleaning Services</h3>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/design/ykjAwBbFhJBGOdB6smNeQz/Car-Service?node-id=0-302&t=BFuoYGThCyjgi21c-1">
                                        <span className="fa fa-eye"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 grid-item design">
                        <div className="single-portfolio-item">
                            <img src={Plantation} alt="" className="img-fluid" />
                            <div className="overlay text-center">
                                <div className="content">
                                    <h3>Plantation Mobile Application</h3>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/design/OJcpGFs17mY1oxkFN7kW5N/Plantation?node-id=14-1154&t=ynY5Cb1vxkZ9jSVs-1">
                                        <span className="fa fa-eye"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
  

                    <div className="col-lg-4 col-md-6 grid-item design">
                        <div className="single-portfolio-item">
                            <img src={SigmaOutside} alt="" className="img-fluid" />
                            <div className="overlay text-center">
                                <div className="content">
                                    <h3>Static Ad Designs</h3>
                                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1_vi3aBrP5ZA5aqfdBhWW1pxROV6OKrxC?usp=drive_link">
                                        <span className="fa fa-eye"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 grid-item design">
                        <div className="single-portfolio-item">
                            <img src={Dashboard} alt="" className="img-fluid" />
                            <div className="overlay text-center">
                                <div className="content">
                                    <h3></h3>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/design/JGQC8kXkNohaJKlpQzpZI5/UFS-Design?node-id=0-1&t=6aGalsMTvVZCg4Rv-1">
                                        <span className="fa fa-eye"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Portfolio;
