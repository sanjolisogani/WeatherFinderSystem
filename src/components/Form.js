import React from 'react';

const Form = (props) =>{
    return(
        <div>
            <form onSubmit={props.getWeather}>
                <input type="text" name='city' placeholder="city"/>
                <input type="text" name='country' placeholder="country"/>
                <button type='submit'> Search</button>
            </form>
        </div>
    );
}

export default Form;