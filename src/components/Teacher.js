import React from 'react'
import './Teacher.css';

function Teacher(props) {

    return (
        <>
            <div className='teacher-container-1'>
                <img className='mask' src={props.teachers[0].src}></img>
                <div className='teacher-title'>
                    <text className='teacher-name'>{props.teachers[0].name}</text>
                    <br />
                    <img className='teacher-image' src={props.teachers[0].language}></img>
                    <text className='teacher-designation'>{props.teachers[0].designation}</text>
                    
                </div>
            </div>
            <div className='teacher-container-2'>
            <img className='mask' src={props.teachers[1].src}></img>
                <div className='teacher-title'>
                    <text className='teacher-name'>{props.teachers[1].name}</text>
                    <br />
                    <img className='teacher-image' src={props.teachers[1].language}></img>
                    <text className='teacher-designation'>{props.teachers[1].designation}</text>
                    
                </div>
            </div>
            <div className='teacher-container-3'>
            <img className='mask' src={props.teachers[2].src}></img>
                <div className='teacher-title'>
                    <text className='teacher-name'>{props.teachers[2].name}</text>
                    <br />
                    <img className='teacher-image' src={props.teachers[2].language}></img>
                    <text className='teacher-designation'>{props.teachers[2].designation}</text>
                    
                </div>
            </div>
        </>
    )
}

export default Teacher