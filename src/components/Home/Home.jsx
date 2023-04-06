import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFood from '../AllFood/AllFood';
import './Home.css';

const Home = () => {
    const data = useLoaderData()
    const allData = data.data;
    return (
        <div>
            <div className='display-data'>
                {
                    allData.map(data=> <AllFood
                    key={data.id}
                    data={data}
                    ></AllFood>)
                }
            </div> 
        </div>
    );
};

export default Home;