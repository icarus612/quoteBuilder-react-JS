import React from 'react';
import Input from './input.js'
const BackEndNeeds = (props) => {
    let value = props.value;

    let  update = (e, def) =>{
        let newSet = {... value};
        let id = e.target.id,
         x = Number(e.target.value);
        newSet[id] = !newSet[id];
        newSet[id] ? newSet.subtotal += x : newSet.subtotal -= x;
        props.update({...newSet}, "backEndNeeds", def);    
    }
    return (

        <form className="d-flex flex-column flex-wrap justify-content-center align-items-around">
            <h3>Back End Needs</h3>
            <Input 
                id='option1'
                value={2000} 
                label='Customer Login'
                type='checkbox'
                checked={value.option1}
                onChange={update}
            />
            <Input 
                id='option2'
                value={1500} 
                label='Employee Login'
                type='checkbox'
                checked={value.option2}
                onChange={update}
            />
            <Input 
                id='option3'
                value={2000} 
                label='eCommerce'
                type='checkbox'
                checked={value.option3}
                onChange={update}
            />
        </form>
    )
    
}

export default BackEndNeeds;