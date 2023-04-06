import React from 'react';
import './AllFoods.css';
import { Link } from 'react-router-dom';
const AllFood = ({data}) => {
    //console.log(data);
    const {total,name,logo,id} = data;
    return (
        <div className='all-foods'>
            <img src={logo} alt="" />
            <h1>Name : {name}</h1>
            <h1>Total : {total}</h1> 
            <Link to={`/${id}`}><button className='btn-data'>Details</button></Link>
        </div>
    );
};

export default AllFood;