import React from 'react';
import '../assets/css/element/button.scss';

const ButtonCount = () => {
    const increaseValue = () => {
        let value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value;

    }

    const decreaseValue = () => {
        let value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 1) {
            value = 1
        } else {
            value = value;
        }
        value--;
        document.getElementById('number').value = value;

    }
    return (

        <form className="bt-count">
            <div className="value-button" id="decrease" onClick={() => decreaseValue()} value="Decrease Value">-</div>
            <input type="number" id="number" value="0" />
            <div className="value-button" id="increase" onClick={() => increaseValue()} value="Increase Value">+</div>
        </form >

    );
}

export default ButtonCount;
