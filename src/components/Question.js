import React, { useState } from 'react'
import './Question.css';

function Question(props) {
    const [activeIndex, setActiveIndex] = useState([true,false,false,false,false,false]);
    const activate = (index) => {
       
        var newState=activeIndex.slice();
        newState[index-1]=!newState[index-1];
        console.log(newState);
        setActiveIndex(newState);
    }
    const deactivate = (index) => {
        var newState=activeIndex.slice();
        newState[index-1]=!newState[index-1];
        setActiveIndex(newState);
    }

    let classes = props.className;
    if (activeIndex[props.index-1]) {
        classes += " active-faq";
    }
    else {
        classes += " inactive-faq";
    }
    console.log(classes);
    return (
        <>
            <div className={classes}>

                {!activeIndex[props.index-1] ? (
                    <>
                        <div className='faq-text-container-2'>
                            <text className='faq-question-2'>{props.ques}</text>
                        </div>
                        <div className='icon-frame' onClick={() => activate(props.index)}>
                            <div className='expand-icon'>
                                <img src='Combined Shape.png'></img>
                            </div>
                        </div>
                    </>
                ) : activeIndex[props.index-1] ? (
                    <div className='faq-container'>
                        <div className='faq-text-container-1'>
                            <text className='faq-question-1'>{props.ques}</text>
                            <text className='faq-answer'>By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.</text>
                        </div>
                        <div className='icon-frame' onClick={() => deactivate(props.index)}>
                            <div className='collapse-icon'>
                                <img src='Rectangle.png'></img>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default Question