import React from 'react'
import './Footer.css';

function Footer() {

  return (
    <>
      <div className='footer-section'>
        <div className='footer-background'>
          <div className='footer-container'>
            <div className='footer-1'>
              <div className='logo'>
                <div className='icon'>
                  <div className='rectangle-1'><img src='Rectangle 11825.png'></img></div>
                  <div className='rectangle-2'><img src='Rectangle 11824.png'></img></div>
                  <text>Lingua</text>
                </div>
              </div>
              <text className='address'>20 Osgood Rd, Milford, NH 03055, USA <br />
                +1283871239190213021</text>
            </div>
            <div className='footer-2'>
              <text className='footer-heading'>Company</text>
              <div className='footer-2-container'>
                <text>Careers</text>
                <text>Teachers</text>
                <text>Support</text>
                <text>Contact</text>
              </div>
            </div>
            <div className='footer-2'>
              <text className='footer-heading'>Product</text>
              <div className='footer-2-container'>
                <text>Courses</text>
                <text>Pricing</text>
                <text>Blog</text>
              </div>
              </div>
              <div className='footer-2'>
                <text className='footer-heading'>Legal</text>
                <div className='footer-2-container'>
                  <text>Terms and Conditions</text>
                  <text>Privacy Policy</text>
                </div>
              </div>
              <div className='footer-3'>
                <img className='facebook' src='Facebook.png'/>
                <img className='twitter' src='Twitter.png'/>
                <img className='instagram' src='Instagram.png'/>
              </div>
            </div>
          </div>
        </div>
      </>
      )
}

      export default Footer