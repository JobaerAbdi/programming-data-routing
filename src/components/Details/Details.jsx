import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Details.css';

const Details = () => {
    const data = useLoaderData();
    const singleData = data.data;
    console.log(singleData);
    const {name,logo,questions} = singleData;
    return (
        <div>
            <img className='img' src={logo} alt="" />
            <h1 className='name'>{name}</h1>
            <div className='question'>
                {
                    questions.map(singleQuestion=><Questions
                        singleQuestion={singleQuestion}
                    ></Questions>)
                }
            </div>
        </div>
    );
};

export default Details;