import React from 'react'
import './QuestionSection.css';
import Question from './Question';

function QuestionSection() {

  var questions=["How the first lesson with teacher will be?","Are you adjusting to the student's schedule?","Do I need to buy materials for lessons?","What is the maximum group size?","Can I do it individually or only in a group?","How can I know my level of knowledge?"];

  return (
    <>
      <div className='question-section'>
        <div className='question-text-section'>
          <text>More Info</text>
          <h2 className='heading'>Common questions</h2>
        </div>
        {/* <div className='faq-1 active-faq'>
          <div className='faq-container'>
            <div className='faq-text-container-1'>
              <text className='faq-question-1'>How the first lesson with teacher will be?</text>
              <text className='faq-answer'>By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.</text>
            </div>
            <div className='display'>
            </div>
          </div>
        </div> */}
        <Question className='faq-1' ques={questions[0]} index={1}/>
        <Question className='faq-2' ques={questions[1]} index={2}/>
        <Question className='faq-3' ques={questions[2]} index={3}/>
        <Question className='faq-4' ques={questions[3]} index={4}/>
        <Question className='faq-5' ques={questions[4]} index={5}/>
        <Question className='faq-6' ques={questions[5]} index={6}/>
      </div>
    </>
  )
}

export default QuestionSection