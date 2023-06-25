import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container ,Row ,Col } from "react-bootstrap"
import arrow1 from "../components/arrow1 (1).svg";
import arrow2 from "../components/arrow2 (1).svg";
import meter1 from "../components/meter1 (1).svg";
import meter2 from "../components/meter2 (1).svg";
import meter3 from "../components/meter3 (1).svg";

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
      
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
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
<div className="skill-bx">
    <h2>Skills</h2>
    <p>You Can See My Skills Here</p>
    <Carousel responsive={responsive} infinite={true} className="skill-slider">
    <div className="item">
        <img src={ meter1}></img>
    <h5>web developer</h5>
    </div>
    <div className="item">
        <img src={meter2}></img>
    <h5>frontend</h5>
    </div>
    <div className="item">
        <img src={meter3}></img>
    <h5>backend</h5>
    </div>
    <div className="item">
        <img src={meter1}></img>
    <h5>fullstack</h5>
    </div>

    </Carousel>
</div>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={require('./images/color-sharp.png')}></img>
        </section>
    )
}
