import React from 'react';
import Input from './input.js'
const Scale = (props) => {
    return (

        <div className="d-flex flex-column flex-wrap justify-content-center align-items-around pl-3">
            {
                props.options.map((i)=> {
                    let onChange = (e) =>{
                        props.onChange(e.target.value, props.id, props.options.indexOf(i))
                    }
                    return (
                        <Input 
                            id={i.name}
                            type='radio'
                            value={i.value}
                            onChange={onChange}
                            label={i.definition}
                            checked={i.checked}
                        />
                    )
                    
                })
            }

        </div>
    )
    
}

export default Scale;