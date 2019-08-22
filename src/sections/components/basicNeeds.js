import React from 'react';
import Input from './input'
const BasicNeeds = (props) => {
	let value = props.value;

    let  update = (e, def) =>{
        let newSet = {... value};
        let id = e.target.id,
         x = Number(e.target.value);
        newSet[id] = !newSet[id];
        newSet[id] ? newSet.subtotal += x : newSet.subtotal -= x;
        props.update({...newSet}, "basicNeeds", def);    
    }
		return (
			<div subtotal={value.subtotal}>
				<form className="d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around">
					<h3>
						Basic Pages Needs
					</h3>
					<h5>
						These are pages you will want built dynamicly so that you can update and add to parts of conent yourself.
					</h5>
					<div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-start">
						
							<Input 
								id='option1'
								value={220} 
								label='Blog'
								type='checkbox'
								checked={value.option1}
								onChange={update}
								definition='Blog Page - requires basic database features'
							/>
				
							<Input 
								id='option2'
								value={330} 
								label='Events'
								type='checkbox'
								checked={value.option2}
								onChange={update}
								definition='Events Page - requires basic database and editing features'
							/>
							<Input 
								id='option3'
								value={220} 
								label='Specials'
								type='checkbox'
								checked={value.option3}
								onChange={update}
								definition='Specials Page - requires basic database'
							/>
							<Input 
								id='option4'
								value={220} 
								label={`FAQ's`}
								type='checkbox'
								checked={value.option4}
								onChange={update}
								definition=''
								/>
							<Input 
								id='option5'
								value={220} 
								label='Staff/Board Members'
								type='checkbox'
								checked={value.option5}
								onChange={update}
								definition=''
								/>
							<Input 
								id='option6'
								value={220} 
								label='News/Press Releases'
								type='checkbox'
								checked={value.option6}
								onChange={update}
								definition=''
							/>
							<Input 
								id='option7'
								value={330} 
								label='Portfolio or Clients'
								type='checkbox'
								checked={value.option7}
								onChange={update}
								definition=''
							/>
							<Input 
								id='option8'
								value={220} 
								label='Resources or Documentation Library'
								type='checkbox'
								checked={value.option8}
								onChange={update}
								definition=''
							/>
							<Input 
								id='option9'
								value={330} 
								label='Projects'
								type='checkbox'
								checked={value.option9}
								onChange={update}
								definition=''
							/>
							<Input 
								id='option10'
								value={110} 
								label='Sponsors'
								type='checkbox'
								checked={value.option10}
								onChange={update}
								definition=''
							/>
							<Input 
								id='option11'
								value={220} 
								label='Careers/Jobs'
								type='checkbox'
								checked={value.option11}
								onChange={update}
								definition=''
							/>
							<Input 
								id='option12'
								value={110} 
								label='Testimonials'
								type='checkbox'
								checked={value.option12}
								onChange={update}
								definition=''
							/>
					</div>
				</form>
			</div>
			
		)
	
}
export default BasicNeeds;