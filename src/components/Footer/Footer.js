import React from "react";
import "./Footer.css";
import { AiFillFacebook, AiFillYoutube,AiFillTwitterSquare, AiFillInstagram} from  'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h3>Mordern EyeGlasses</h3>
                <div className="icons-container d-flex text-center">
                  <div className="icon">
                    <AiFillFacebook />
                  </div>
                  <div className="icon">
                    <AiFillYoutube />
                  </div>
                  <div className="icon">
                    <AiFillTwitterSquare />
                  </div>
                  <div className="icon">
                    <AiFillInstagram />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    *please contacts us in our socialmedea.we are also there for you.please visit our channel.and subscribe to our channel.
                  </small>
                </p>

                <p className="mt-5">
                  <small>CopyRight © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Products</li>
                  <li className="footer-menu">Explore</li>
                  <li className="footer-menu">Reviews</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                  </div>
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                  </div>
                  <div>
                    <p>
                      160 Broadway, New York, NY 10038,
                      <br /> 102 1st Avenue, New York, NY 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;