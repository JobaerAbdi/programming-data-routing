import React from 'react';

const Radio = ({option}) => {
    return (
        <div>
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label for="html">{option}</label>
        </div>
    );
};

export default Radio;