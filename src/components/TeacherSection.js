import React,{useState,useRef} from 'react'
import './TeacherSection.css';
import {Carousel} from 'react-bootstrap';
import Teacher from './Teacher';

function TeacherSection() {
  const teachers= [{src:"teacher-1.png",name:"Christian Harvard",language:"Ellipse 325.png",designation:"Italian Teacher"},
  {src:"teacher-2.png",name:"Sandra Wilson",language:"Ellipse 326.png",designation:"Spanish Teacher"},
  {src:"teacher-3.png",name:"Jimmy Cooper",language:"Ellipse 327.png",designation:"English Teacher"}
]

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const ref= useRef(null);
  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };
  return (
    <>
    <div className='teacher-section'>
        <div className='teacher-text-section'>
            <text>Key Persons</text>
            <h2 className='heading'>Meet Our Teachers</h2>
        </div>
        {/* <div className='teacher-list'> */}
        <Carousel
        ref={ref}
        activeIndex={index} onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={null}
        >
        <Carousel.Item> <Teacher teachers={teachers}/> </Carousel.Item>
        <Carousel.Item> <Teacher teachers={teachers}/> </Carousel.Item>
        </Carousel>
        {/* </div> */}
        <div className='next-icon' onClick={onNextClick}>
          <img src='Arrow-1.png'></img>
        </div>
        <div className='prev-icon'onClick={onPrevClick}>
        <img src='Arrow-2.png'></img>
        </div>
    </div>
    </>
  )
}

export default TeacherSection