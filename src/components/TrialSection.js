import React from 'react'
import './TrialSection.css';

function TrialSection() {

  return (
    <>
      <div className='trial-section'>
        <div className='text-section'>
          <text className='trial-heading'>Get a free trial lesson today</text>
          <text className='trial-content'>Start fulfilling your language dreams with our school</text>
        </div>
        <div className='trial-form'>
          <div className='trial-form-component'>
            <text>Enter your email</text>
          </div>
          <div className='trial-button-section'>
              <text>Send</text>
            </div>
        </div>
      </div>
    </>
  )
}

export default TrialSection