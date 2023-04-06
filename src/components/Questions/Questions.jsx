import React from 'react';
import './Question.css';
import Radio from '../Radio/Radio';

const Questions = ({singleQuestion}) => {
    console.log(singleQuestion);
    const {correctAnswer,options,question} = singleQuestion;
    return (
        <div>
            <div className='ques'>
                  <h1>Question : {question}</h1>
                  <h1>Options : {options.map(option=><Radio
                   option={option}
                  ></Radio>)}</h1>
                  <h1>Correct Answer : {correctAnswer}</h1>
            </div>
        </div>
    );
};

export default Questions;