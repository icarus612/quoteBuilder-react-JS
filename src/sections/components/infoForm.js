import React from 'react';
import Input from'./input.js'
let InfoBox = (props) => {
	let value = props.value;
	let  typing = (e) =>{
        let newSet = {... value};
        let id = e.target.id,
         inner = e.target.value;
        newSet[id] = inner;
        props.update({...newSet}, "infoForm");    
    }
		return (
			<div>
				<h3>
					Get Your Quote
				</h3>
				<form className="d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-around">
					<div className="my-4 col-12 col-md-6">
						<Input 
							id='name'
							value={value.name}
							placeholder=' Name'
							type='text'
							onChange={typing}
						/>		
					</div>
					<div className="my-4 col-12 col-md-6">
						<Input 
							id='phone'
							value={value.phone}
							placeholder=' Phone'
							type='phone'
							onChange={typing}
						/>
					</div>
					<div className="my-4 col-12">
						<Input 
							id='email'
							value={value.email}
							placeholder=' Email'
							type='text'
							onChange={typing}
						/>
					</div>
					<div className="my-4 col-12">
						<textarea className="pl-2" placeholder="Message" id="message" onChange={typing}>{value.message}</textarea> 
					</div>
					<div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
						<a className="btn btn-lg btn-primary btn-purple-basic" onClick={props.submitForm}>Get Quote</a>
					</div>
				</form>
			</div>
			
		)
	
}
export default InfoBox;