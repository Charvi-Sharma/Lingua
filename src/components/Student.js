import React,{useState} from 'react'

function Student(props) {

    return (
        <>
            <div className='review-text-container'>
              <div className='name-container'>
                <text className='name'>{props.student.name}</text>
                <div className='course-container'>
                  <img src={props.student.country}></img>
                  <text className='description'>{props.student.course}</text>
                </div>
              </div>
              <text className='review-text'>{props.student.review}</text>
            </div>
         </>
    )
}

export default Student