import React from 'react';
import Input from './input.js';
import Scale from './scale.js';

const BackEndNeeds = (props) => {
    let value = props.value;
    let typing = (e) => {
        let newSet = {...value},
            id = e.target.id,
            inner = e.target.value;
        newSet[id] = inner;
        props.update({...newSet}, "backEndNeeds", " Any additional info about your eCommerce needs?");    
    }

    let update = (e, def) => {
        let newSet = {...value};
        let id = e.target.id,
         x = Number(e.target.value);
        newSet[id] = !newSet[id];
        newSet[id] ? newSet.subtotal += x : newSet.subtotal -= x;
        props.update({...newSet}, "backEndNeeds", def);    
    }
    let updateScale = (e, id, i) => {
        let newSet = {...value};
        newSet.subtotal -= newSet[id].subtotal;
        for (let j = 0; j < newSet[id].options.length; j++){
            newSet[id].options[j] = j === i ? true : false;
        }
        newSet[id].subtotal = Number(e);
        newSet.subtotal += newSet[id].subtotal;
        props.update({...newSet}, "backEndNeeds", '');    

    }
    return (
        <form className="d-flex flex-column flex-wrap justify-content-center align-items-around">
            <h3>Back End Needs</h3>
            <div className="col-12 d-flex flex-column justify-content-start align-items-start">
                <Input 
                    id='option1'
                    value={500} 
                    label='Customer Login'
                    type='checkbox'
                    checked={value.option1}
                    onChange={update}
                />
                {value.option1 ? <Scale 
                                    id="sudo1" 
                                    onChange={updateScale} 
                                    options={[
                                        {name: 'opt1', definition: 'Basic login to veiw members only features or information', value: 500, checked: value.sudo1.options[0]},
                                        {name: 'opt2', definition: 'Including the basics customers will also have a profile section where they can customize their info.', value: 1000, checked: value.sudo1.options[1]}, 
                                        {name: 'opt3', definition:'Along with options 1 and 2 will also be able to post and edit content.', value: 1500, checked: value.sudo1.options[2]}, 
                                        {name: 'opt4', definition:'All of the above, and members can also like and comment on others work.', value: 2000, checked: value.sudo1.options[3]}
                                    ]} 
                                />: null}
                <Input 
                    id='option2'
                    value={400} 
                    label='Employee Login'
                    type='checkbox'
                    checked={value.option2}
                    onChange={update}
                />
                {value.option2 ? <Scale 
                                    id="sudo2" 
                                    onChange={updateScale} 
                                    options={[
                                        {name: 'opt1', definition: 'Basic login to veiw employee only features or information.', value: 500, checked: value.sudo2.options[0]},
                                        {name: 'opt2', definition: 'Including the basics employees will also have a profile section where they can customize their info.', value: 1000, checked: value.sudo2.options[1]}, 
                                        {name: 'opt3', definition:'Along with the first 2 employees will also be able to post/store and edit content.', value: 1500, checked: value.sudo2.options[2]}, 
                                    ]} 
                                />: null}
                <Input 
                    id='option3'
                    value={500} 
                    label='eCommerce'
                    type='checkbox'
                    checked={value.option3}
                    onChange={update}
                />
                {value.option3 ? (
                    <div>
                        <Scale 
                            id="sudo3" 
                            onChange={updateScale} 
                            options={[
                                {name: 'opt1', definition: 'eCommerce items and pages route to a different website (shopify, amazon, ect)', value: 200, checked: value.sudo3.options[0]},
                                {name: 'opt2', definition: 'Built off shopify: we build you a basic site shopify site, with limited customization, but clean user flow and experience. ', value: 1000, checked: value.sudo3.options[1]}, 
                                {name: 'opt3', definition:'The more customizable version of option 2.', value: 1800, checked: value.sudo3.options[2]}, 
                            ]} 
                        /> 
					    <textarea className="pl-2 ml-3 col-11" placeholder="Any additional info about your eCommerce needs?" id="message" onChange={typing}>{value.message}</textarea> 
                    </div>
                ): null}
            </div>
        </form>
    )
    
}

export default BackEndNeeds;