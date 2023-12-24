import React from 'react';


const Input = (props) =>{
    let onChange =(e)=>{
        props.definition ? props.onChange(e, props.definition) : props.onChange(e, '')
    }
    return (
        <label className={props.className} id={props.id} value={props.type === "text" ? null : props.value}>
            {props.labelBefore ? props.label : null}
            <input type={props.type} className={props.labelBefore ? 'ml-2' : 'mr-2'} onChange={onChange} checked={props.checked} required={props.required} max={props.max} min={props.min} value={props.value} placeholder={props.placeholder} id={props.id} />
            {props.labelBefore ? null : props.label}
        </label>
    )
}
export default Input;