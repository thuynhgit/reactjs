import React, { useState } from 'react';
import './colorBox.css';

function getRandomColor() {
    const colorList = ['green', 'red', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 3);
    return colorList[randomIndex];
}
function ColorBox() {
    const [color, setColorBox] = useState('deeppink');
    function handleClick() {
        const newcolor = getRandomColor();
        const colorfilter = () => {
            const ab = (newcolor !== color) ? newcolor : null;
            return ab
        }
        setColorBox(colorfilter());
    };

    return (
        <div
            className='color-box'
            style={{ background: color }}
            onClick={handleClick}
        >COLOR BOX
        </div>
    )
}
export default ColorBox;
