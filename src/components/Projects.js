import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img_project_api_rest_automation_documents from "../assets/img/backend_projects/API_Automation_Documents.png";
import img_project_front_automation_documents_admin  from '../assets/img/fronted_projects/Front_Automation_documents_admin.png'
import img_project_front_automation_documents_secretary  from '../assets/img/fronted_projects/Front_Automation_documents_secretary.png'
import img_project_front_automation_documents_student  from '../assets/img/fronted_projects/Front_Automation_documents_student.png'



import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const fronted_projects = [
    {
      title: "Front Automation Documents",
      description: "Design & Development",
      imgUrl: img_project_front_automation_documents_admin,
      githubUrl: "",
      urlProject: "",
    },
    {
      title: "Front Automation Documents",
      description: "Design & Development",
      imgUrl: img_project_front_automation_documents_secretary,
      githubUrl: "",
      urlProject: "",
    },
    {
      title: "Front Automation Documents",
      description: "Design & Development",
      imgUrl: img_project_front_automation_documents_student,
      githubUrl: "",
      urlProject: "",
    },
  ];

  const backend_projects = [
    {
      title: "API Automation Documents",
      description: "Design & Development",
      imgUrl: img_project_api_rest_automation_documents,
      githubUrl: "",
      urlProject: "",
    },
    
  ];

  const blog_projects = [

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
                <br></br>
                {/** <p></p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Backend Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Fronted projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Blog projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          backend_projects.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            fronted_projects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                          {
                            blog_projects.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
     
    </section>
  )
}
