import React from 'react';
import './Footer.css';

const Footer = () => {
    return (        
        <footer class="footer-section">
        <div class="footer-container">
            <div class="box-1">
                <h3>Contact US</h3>
                <ul>
                  <li>
                    <i class="fas fa-map-marker-alt"></i> Movie Mania!, Manila
                  </li>
                  <li>
                    <i class="fas fa-phone-alt"></i> Call +8801xxxxxxxx
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i> info@example.com
                  </li>
                </ul>
              </div>
              <div class="box-2">
                <h3 class="ccolor">
                    <a href="">Movie Mania!</a>
                </h3>
                <p class="text">
                    'Movie Mania!' not only helping your movie searching easy but can also add entertainments in your life. Excessive movie watching is not good, so properly using of our site can help to improve your entertainment quality.
                </p>
                <ul>
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fab fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fab fa-tiktok"></i>
                  </li>
                  <li>
                    <i className="fab fa-pinterest"></i>
                  </li>
                </ul>
              </div>
              <div class="box-3">
                <h3>Opening Hours</h3>
                <ul>
                  <li>Everyday</li>
                  <li>10:00 AM - 10:00 PM</li>
                </ul>
              </div>
            <div class="box-4">
                <div id="date"></div>
              <p>
                &copy; 2022 All Rights Reserved by Developer
              </p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;