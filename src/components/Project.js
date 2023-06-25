import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCart";
import projImg1 from "../components/images/blog-1-1.jpg";
import projImg2 from "../components/images/blog-1-2.jpg";
import projImg3 from "../components/images/blog-1-3.jpg";
import projImg4 from "../components/images/blog-1-7.jpg";
import projImg5 from "../components/images/blog-1-8.jpg";
import projImg6 from "../components/images/blog-1-9.jpg";
import colorSharp2 from "../components/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Project = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My Name Is Rawan ,I Am Frontend Developer .You Can See All Projects I Had Do</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> First Tab </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> Second Tab </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"> Third Tab </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p> My Name Is Rawan,I Am Frontend Developer .You Can Contact Me In This Form</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p> My Name Is Rawan,I Am Frontend Developer .You Can Contact Me In This Form</p>
                       </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    <img className="background-image-right" src={colorSharp2}></img>
</section>
)
                      }