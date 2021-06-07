import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Col, Row } from "react-bootstrap";
import profileImage from "../../assets/img/profileImage.png";
const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Container className="main" fluid={true}   id="home"
      style={{
        background: `linear-gradient(136deg,${gradient})`,
        backgroundSize: "1200% 1200%",
        position: "relative"
      }}>
        <Row>
          <Col xs="6">
          <Jumbotron
        fluid
       
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist className="lead typist" cursor={{ show: false }}>
            {" "}
            {message}
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                style= {{
                  padding : "20px"
                }}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
          </Col>
          <Col xs="6">
          <img
                
                src={profileImage}
                alt="profilepicture"
                width="100%"
                height="100%"
              />
        
          </Col>
        </Row>
        <Row style={{height: "120px" , backgroundColor : "white" , width : "100%" , position : "absolute" , bottom: "0"
        } }>
                
          </Row> 
      </Container>
    );
  }
);

export default MainBody;
