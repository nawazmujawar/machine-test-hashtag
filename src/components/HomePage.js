import React from "react";
import "./HomePage.css";
import Ellipse4 from "../images/Ellipse 4.png";
import Ellipse5 from "../images/Ellipse 5.png";
import StarIcon from "../images/star-icon 1.png";
import PosterImage from "../images/image 63.png";

import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <div className="header">
        <div>
          <p style={{ color: "white", margin: "0px", fontSize: "20px" }}>
            <span style={{ color: "red" }}>WATCH</span>NEXT
          </p>
        </div>
        <div style={{ width: "60%" }}>
          <input type="text" placeholder="Search for movies" />
        </div>
        <div className="header__user">
          <img src={Ellipse4} alt="user" />
          <p>Howdy Kate,</p>
        </div>
      </div>
      <div>
        <Navbar
          style={{ backgroundColor: "tomato", color: "white" }}
          expand="lg"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav style={{ margin: "0px auto" }}>
                <Nav.Link className="navbar__menu" href="#home" active>
                  <span>HOME</span>
                </Nav.Link>
                <Nav.Link className="navbar__menu" href="#explore">
                  <span>EXPLORE</span>
                </Nav.Link>
                <Nav.Link className="navbar__menu" href="#activity">
                  <span>ACTIVITY</span>
                </Nav.Link>
                <Nav.Link className="navbar__menu" href="#wheel">
                  <span>WHEEL</span>
                </Nav.Link>
                <Nav.Link className="navbar__menu" href="#notification">
                  <span>NOTIFICATION</span>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="mainContent">
        <div className="mainContent__left">
          <div>
            <img src={Ellipse5} alt="user" />
            <p>katherine _kate</p>
          </div>
          <div>
            <p>
              <img src={StarIcon} alt="star" />
              9/10
            </p>
          </div>
          <div>Progress Bar</div>
          <div>15 reacted to this</div>
        </div>
        <div className="mainContent__middle">
          <h2>Best Marvel movie in my opinion</h2>
          <p>30 June 2020</p>
          <div>
            <p
              style={{
                fontFamily: "bolder",
                fontSize: "80px",
              }}
            >
              "
            </p>
            <div style={{ marginTop: "-60px", padding: "0px 40px" }}>
              <p>
                The film's development began when Marvel Studios received a loan
                from Merrill Lynch in April 2005. After the success of the film
                Iron Man in May 2008, Marvel announced that The Avengers would
                be released in July 2011 and would bring together Tony Stark
                (Downey), Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor
                (Hemsworth) from Marvel's previous films. With the signing of
                Johansson as Natasha Romanoff in March 2009, the film was pushed
                back for a 2012 release. Whedon was brought on board in April
                2010 and rewrote the original screenplay by Zak Penn. Production
                began in April 2011 in Albuquerque, New Mexico, before moving to
                Cleveland, Ohio in August and New York City in September. The
                film has more than 2,200 visual effects shots
              </p>
              <p style={{ marginTop: "30px" }}>
                Production began in April 2011 in Albuquerque, New Mexico,
                before moving to Cleveland, Ohio in August and New York City in
                September. The film has more than 2,200 visual effects shots
              </p>
              <p style={{ margin: "30px 0px" }}>Do you Agree ?</p>
              <div
                style={{
                  borderRadius: "5px",
                  padding: "30px",
                  boxShadow: "3px 3px 5px 6px #ccc",
                }}
              ></div>
              <div
                style={{
                  borderRadius: "25px",
                  color: "white",
                  marginLeft: "30px",
                  marginTop: "30px",
                  padding: "5px 20px",
                  backgroundColor: "tomato",
                  width: "150px",
                  textAlign: "center",
                  marginBottom: "70px",
                }}
              >
                Submit
              </div>
            </div>
          </div>
        </div>

        <div className="mainContent__right">
          <div>
            <img src={PosterImage} alt="poster" />
          </div>
          <h3>Justice Fear(2018)</h3>
          <div className="mainContent__right__details">
            <p>EN,FR</p>
            <p>June 2020</p>
          </div>
          <div className="mainContent__right__details">
            <p>U/A</p>
            <p>Documentory,Short</p>
          </div>
        </div>
          </div>
          <div className="comments">
              <div className="comments__review">
                  <h2>Comments for this Review</h2>
          </div>
          <div className="comments__otherReview"></div>
          </div>
    </div>
  );
}

export default HomePage;
