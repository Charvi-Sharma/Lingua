import React from 'react'
import './TitleSection.css';

function TitleSection() {

  return (
    <>
      <div className='title-container'>
        <div className='img-container'>
          <div className='img-container-element-1'>
            <img className='avatar' src='avatar-1.png'></img>
            <div className='avatar-content'>
              <h3>Jane Cooper</h3>
              <p>I loved the Italian course!</p>
            </div>
          </div>
          {/* <div className='img-container-element-2'>
            <div className='title-images'>
              <div className='avatar-1'>
                <div className='padding'>

                  <div className='people'>
                    <div className='avatar-element'>
                    </div>
                  </div>
                </div>
              </div>
              <div className='avatar-2'></div>
            </div>
          </div> */}
          <div className='img-container-element-3'>
            <h3>10+ Courses</h3>
            <p>Multiple Categories</p>
          </div>
          <div className='image'>
          </div>
          <div className='base'></div>
        </div>

        <div className='text-container'>
          <div className='title-content'>
            <h3>A unique approach to learning foreign languages online</h3>
            <p>Learn at your own pace, with lifetime access on mobile and desktop</p>
          </div>
          <div className='button-section'>
            <text>Get Started</text>
          </div>
        </div>

        <div className='header'>
          <div className='logo'>
            <div className='icon'>
              <div className='rectangle-1'><img src='Rectangle 11825.png'></img></div>
              <div className='rectangle-2'><img src='Rectangle 11824.png'></img></div>
              <text>Lingua</text>
            </div>
          </div>
          <div className='frame'>
            <div className='frame-element-1'><text>Courses</text></div>
            <div className='frame-element-2'><text>About Us</text></div>
            <div className='frame-element-3'><text>Teachers</text></div>
            <div className='frame-element-4'><text>Pricing</text></div>
            <div className='frame-element-5'><text>Careers</text></div>
            <div className='frame-element-6'><text>Blog</text></div>
          </div>
          <div className='button-section-2'>
            <text>Get Started</text>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleSection