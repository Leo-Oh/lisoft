import meter100 from "../assets/img/meter/meter_100.svg";
import meter15 from "../assets/img/meter/meter_15.svg";
import meter30 from "../assets/img/meter/meter_30.svg";
import meter40 from "../assets/img/meter/meter_40.svg";
import meter50 from "../assets/img/meter/meter_50.svg";
import meter55 from "../assets/img/meter/meter_55.svg";
import meter60 from "../assets/img/meter/meter_60.svg";
import meter72 from "../assets/img/meter/meter_72.svg";
import meter75 from "../assets/img/meter/meter_75.svg";
import meter80 from "../assets/img/meter/meter_80.svg";
import meter85 from "../assets/img/meter/meter_85.svg";
import meter90 from "../assets/img/meter/meter_90.svg";



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Some technologies I have used are the following:<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter100} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter85} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter40} alt="Image" />
                                <h5>Dart</h5>
                            </div>
                            <div className="item">
                                <img src={meter60} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
