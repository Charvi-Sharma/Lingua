import React, { useState } from 'react'
import './StudentSection.css';
import Student from './Student';
import Pagination from './Pagination';


function StudentSection() {
  const students = [{ name: "Martin Watson", course: "B2 course student", review: "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.",src:"student-1.png",country:"flag-1.png" },
  { name: "Arthur King", course: "B1 course student", review: "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.",src:"teacher-1.png" ,country:"flag-1.png" },
  { name: "Mark Watson", course: "B2 course student", review: "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.",src:"student-1.png",country:"flag-1.png"  }
  ]

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => { setCurrentPage(pageNumber); }

  return (
    <>
      <div className='student-section'>
        <div className='student-text-section'>
          <text>Top Studying</text>
          <h2 className='heading'>Our students say</h2>
        </div>
        <div className='student-container'>
          <img className='student-image' src={students[currentPage-1].src}></img>
          <div className='review-container'>
            <Student student={students[currentPage - 1]} />
            <Pagination totalPosts={students.length} paginate={paginate} />
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentSection