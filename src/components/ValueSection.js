import React from 'react'
import './ValueSection.css';

function ValueSection() {

  return (
    <>
        <div className='value-container'>
            <div className='value-text-section'>
                <text className='value-header'>WHY CHOOSE US</text>
                <text className='heading'>Our values</text>
            </div>
            <div className='value-1'>
                <div className='glass-icon'>
                <img src='value-1.png'></img>
                </div>
                <div className='text-container-1'>
                    <h5>Speaking Clubs</h5>
                    <p className='content'>In our school you will practice your speaking skills and just get a lot of positive emotions!</p>
                </div>
               
            </div>
            <div className='value-2'>
                <div className='glass-icon'>
                <img src='value-2.png'></img>
                </div>
                <div className='text-container-1'>
                <h5>Quality Control</h5>
                    <p className='content'>A huge work has been done with the teachers and their work has been monitored thoroughly. </p>
                </div>
            </div>
            <div className='value-3'>
                <div className='glass-icon'>
                <img src='value-3.png'></img>
                </div>
                <div className='text-container-1'>
                <h5>Progress Analysis</h5>
                    <p className='content'>The CEF of Reference has been used at our school. It allows to control our students’ success in studying.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ValueSection