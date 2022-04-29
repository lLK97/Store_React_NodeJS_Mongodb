import React, {
    useEffect
} from 'react';


const Dropdownbox = props => {


    const getValue = (input, para) => {
        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener('input', (e) => {
                let newValue;
                newValue = input[i].value;
                para[i].innerHTML = newValue;

            })
        }

    }
    useEffect(() => {
        const rangeInput = document.getElementsByClassName('form-range');
        const para = document.getElementsByClassName('para');
        getValue(rangeInput, para);
    }, [])
    return (
        <div className='form-slide' key={props.index}>
            <div className='display_text row'>
                <div className='attrib col-6'>{props.attrib}</div>
                <div className='para col-6'>{props.para}</div>
            </div>
            <input type='range' className='form-range' min={props.min_range} max={props.max_range} step='1' ></input>
        </div>
    );
}

export default Dropdownbox;
