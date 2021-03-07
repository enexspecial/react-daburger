// import React from 'react'
import BuildControl from './BuildControl/BuildControl';

const control = [
    {label:"Salad", type:'salad'},
    {label:"Bacon", type:'bacon'},
    {label:"Cheese", type:'cheese'},
    {label:"Meat", type:'meat'},
];

const BuildControls = (props) => (
    <div className="BuildControls">
        <p> Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {control.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.ingredientAdded(ctrl.type)}
            deduct={()=>props.ingredientDeduct(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}        
    </div>
);

export default BuildControls
