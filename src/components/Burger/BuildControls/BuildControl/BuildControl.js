// import React from 'react'

const BuildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button 
        className="Less" 
        onClick={props.deduct} 
        disabled={props.disabled}>Less</button>
        <button 
        className="More" 
        onClick={props.added }>More</button>
    </div>
);

export default BuildControl
